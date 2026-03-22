#import "MaterialColor.h"
#import "Utils/ImageUtils.h"
#import "cpp/utils/utils.h"

@implementation MaterialColor {
  NSMutableDictionary<NSString *, dispatch_block_t> *mapDispatcher;
  NSMutableDictionary<NSString *, NSURLSessionDataTask *> *mapTask;
}

- (void)sourceColorFromImageUri:(NSString *)uri
                       signalID:(NSString *)signalID
               maxWidthOrHeight:(NSNumber *)maxWidthOrHeight
                        resolve:(RCTPromiseResolveBlock)resolve
                         reject:(RCTPromiseRejectBlock)reject
{
  [self sourceColorFromImageUriBaseHandler:uri signalID:signalID maxWidthOrHeight:maxWidthOrHeight didResult:^(NSNumber *color){
    [self->mapDispatcher removeObjectForKey:signalID];
    [self->mapTask removeObjectForKey:signalID];
    resolve(color);
  }];
}

- (void)sourceHexColorFromImageUri:(NSString *)uri
                          signalID:(NSString *)signalID
                  maxWidthOrHeight:(NSNumber *)maxWidthOrHeight
                           resolve:(RCTPromiseResolveBlock)resolve
                            reject:(RCTPromiseRejectBlock)reject
{
  [self sourceColorFromImageUriBaseHandler:uri signalID:signalID maxWidthOrHeight:maxWidthOrHeight didResult:^(NSNumber *color){
    uint32_t colorInt = [color intValue];
    std::string hexColor = material_color_utilities::HexFromArgb(colorInt);

    if(hexColor[0] != '#') {
      hexColor = "#" + hexColor;
    }

    resolve([NSString stringWithCString:hexColor.c_str() encoding:[NSString defaultCStringEncoding]]);
  }];
}

- (void)sourceColorFromImageUriBaseHandler:(NSString *)uri
                                  signalID:(NSString *)signalID
                          maxWidthOrHeight:(NSNumber *)maxWidthOrHeight
                                 didResult:(void (^)(NSNumber *color))didResult
{
  NSUInteger maxWidthOrHeightInteger = 0;
  if(maxWidthOrHeight && [maxWidthOrHeight integerValue] > 0) {
    maxWidthOrHeightInteger = [maxWidthOrHeight unsignedIntegerValue];
  }

  [ImageUtils sourceColorFromImageUri:uri maxWidthOrHeight:maxWidthOrHeightInteger didCreateDispatch:^(dispatch_block_t dispatchBlock){

    if(!self->mapDispatcher) {
      self->mapDispatcher = @{}.mutableCopy;
    }
    [self->mapDispatcher setObject:dispatchBlock forKey:signalID];

  } didCreateTask:^(NSURLSessionDataTask *task){

    if(!self->mapTask) {
      self->mapTask = @{}.mutableCopy;
    }
    [self->mapTask setObject:task forKey:signalID];

  } didResult:^(NSNumber *color){

    [self->mapDispatcher removeObjectForKey:signalID];
    [self->mapTask removeObjectForKey:signalID];

    didResult(color);

  }];
}

- (void)cancelSourceColorFromImageUri:(NSString *)signalID
{
  dispatch_block_t dispatchBlock = [self->mapDispatcher objectForKey:signalID];
  if(dispatchBlock) {
    dispatch_block_cancel(dispatchBlock);
  }

  NSURLSessionDataTask *task = [self->mapTask objectForKey:signalID];
  if(task) {
    [task cancel];
  }
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeMaterialColorSpecJSI>(params);
}

RCT_EXPORT_MODULE()

@end
