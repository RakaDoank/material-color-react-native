#import "cpp/quantize/celebi.h"
#import "cpp/score/score.h"
#import "cpp/utils/utils.h"
#import "ImageUtils.h"

typedef void (^SourceColorFromImageDispatchCallback)(dispatch_block_t targetBlock);

@implementation ImageUtils : NSObject

+ (void)sourceColorFromImageUri:(NSString *)uri
               maxWidthOrHeight:(NSUInteger)maxWidthOrHeight
              didCreateDispatch:(void (^)(dispatch_block_t dispatchBlock))didCreateDispatch
                  didCreateTask:(void (^)(NSURLSessionDataTask *task))didCreateTask
                      didResult:(void (^)(NSNumber *color))didResult
{
  NSURL *url = [NSURL URLWithString:uri];

  if(!url) {
    didResult(nil);
    return;
  }

  __block dispatch_block_t dispatchBlock;

  // Local File
  if(url.isFileURL) {
    dispatchBlock = dispatch_block_create(DISPATCH_BLOCK_BARRIER, ^{
      UIImage *image = [UIImage imageWithContentsOfFile:url.path];
      NSNumber *color = [self sourceColorFromImage:image maxWidthOrHeight:maxWidthOrHeight];
      dispatch_async(dispatch_get_main_queue(), ^{
        didResult(color);
      });
    });
    
    didCreateDispatch(dispatchBlock);

    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), dispatchBlock);
    return;
  }
  
  NSURLSessionDataTask *task = [[NSURLSession sharedSession] dataTaskWithURL:url completionHandler:^(NSData *_Nullable data, NSURLResponse *_Nullable response, NSError *_Nullable error) {
    if(error || !data) {
      dispatch_async(dispatch_get_main_queue(), ^ {
        didResult(nil);
      });
      return;
    }
    
    dispatchBlock = dispatch_block_create(DISPATCH_BLOCK_BARRIER, ^{
      UIImage *image = [UIImage imageWithData:data];
      NSNumber *color = [self sourceColorFromImage:image maxWidthOrHeight:maxWidthOrHeight];
      dispatch_async(dispatch_get_main_queue(), ^{
        didResult(color);
      });
    });
  
    didCreateDispatch(dispatchBlock);
    
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), dispatchBlock);
  }];

  didCreateTask(task);

  [task resume];
}

+ (NSNumber *)sourceColorFromImage:(UIImage *)image
                  maxWidthOrHeight:(NSUInteger)maxWidthOrHeight
{
  UIImage *bitmap = image;

  if(maxWidthOrHeight > 0) {
    [self resizeImage:bitmap targetSize:maxWidthOrHeight];
  }

  size_t width, height;

  // DO NOT FORGET TO FREE THIS
  uint32_t *pixels =
    [self copyPixelsFromImage:bitmap width:&width height:&height]; // IN RGBA

  if(!pixels) {
    return nil;
  }

  size_t pixelCount = width * height;

  std::vector<material_color_utilities::Argb> filteredPixels = {}; // IN ARGB
  
  for(size_t i = 0; i < pixelCount; i += 4) {
    uint32_t pixel = pixels[i];
    uint8_t r = (pixel >> 24) & 0xFF;
    uint8_t g = (pixel >> 16) & 0xFF;
    uint8_t b = (pixel >> 8)  & 0xFF;
    uint8_t a = (pixel) & 0xFF;
  
    if(a >= 255) {
      // convert it to ARGB
      uint32_t argb =
        (a << 24) |
        (r << 16) |
        (g << 8)  |
        (b);

      filteredPixels.push_back(argb);
    }
  }

  free(pixels);

  material_color_utilities::QuantizerResult result =
    material_color_utilities::QuantizeCelebi(filteredPixels, 128);
  
  std::vector<material_color_utilities::Argb> ranked =
    material_color_utilities::RankedSuggestions(result.color_to_count);

  material_color_utilities::Argb top = ranked.front();
  
  return [NSNumber numberWithInt:top];
}

+ (UIImage *)resizeImage:(UIImage *)image
              targetSize:(NSUInteger)targetSize
{
  NSNumber *targetSizeNumber = [NSNumber numberWithInteger:targetSize];
  CGFloat targetSizeFloat = [targetSizeNumber doubleValue];

  // +++++ Begin Image Context +++++
  UIGraphicsBeginImageContextWithOptions(CGSizeMake(targetSizeFloat, targetSizeFloat), YES, 1.0);
  
  [image drawInRect:CGRectMake(0, 0, targetSizeFloat, targetSizeFloat)];
  UIImage *result = UIGraphicsGetImageFromCurrentImageContext();

  UIGraphicsEndImageContext();
  // ----- End Image Context -----

  return result;
}

/**
 * DO NOT FORGET TO FREE THE PIXELS
 * The pixels is in RGBA color space
 */
+ (uint32_t *)copyPixelsFromImage:(UIImage *)image
                           width:(size_t *)width
                          height:(size_t *)height
{
  CGImageRef cgImage = image.CGImage;
  if(!cgImage) {
    return NULL;
  }

  *width = CGImageGetWidth(cgImage);
  *height = CGImageGetHeight(cgImage);

  size_t bytesPerPixel = 4;
  size_t bytesPerRow = bytesPerPixel * (*width);
  size_t bitsPerComponent = 8;

  uint32_t *pixels = (uint32_t *)calloc((*width) * (*height), sizeof(uint32_t));

  if(!pixels) {
    return NULL;
  }

  CGColorSpaceRef colorSpace = CGColorSpaceCreateDeviceRGB();
  CGContextRef context = CGBitmapContextCreate(pixels, *width, *height, bitsPerComponent, bytesPerRow, colorSpace, kCGImageAlphaPremultipliedLast | kCGBitmapByteOrder32Host);

  if(!context) {
    CGColorSpaceRelease(colorSpace);
    free(pixels);
    return NULL;
  }

  CGContextDrawImage(context, CGRectMake(0, 0, *width, *height), cgImage);

  CGContextRelease(context);
  CGColorSpaceRelease(colorSpace);
  
  return pixels; // DO NOT FORGET TO FREE THIS!
}

@end
