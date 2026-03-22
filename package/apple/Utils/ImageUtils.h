@interface ImageUtils : NSObject

+ (void)sourceColorFromImageUri:(NSString *)uri
               maxWidthOrHeight:(NSUInteger)maxWidthOrHeight
              didCreateDispatch:(void (^)(dispatch_block_t dispatchBlock))didCreateDispatch
                  didCreateTask:(void (^)(NSURLSessionDataTask *task))didCreateTask
                      didResult:(void (^)(NSNumber *color))didResult;

+ (NSNumber *)sourceColorFromImage:(UIImage *)image
            maxWidthOrHeight:(NSUInteger)maxWidthOrHeight;

@end
