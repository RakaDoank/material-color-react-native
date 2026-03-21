@interface ImageUtils : NSObject

+ (void)sourceColorFromImageUri:(NSString *)uri
               maxWidthOrHeight:(NSUInteger)maxWidthOrHeight
             didCreatedDispatch:(void (^)(dispatch_block_t dispatchBlock))didCreatedDispatch
                 didCreatedTask:(void (^)(NSURLSessionDataTask *task))didCreatedTask
                      didResult:(void (^)(NSNumber *color))didResult;

+ (NSNumber *)sourceColorFromImage:(UIImage *)image
            maxWidthOrHeight:(NSUInteger)maxWidthOrHeight;

@end
