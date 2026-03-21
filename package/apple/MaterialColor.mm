#import "MaterialColor.h"
#import "Utils/ImageUtils.h"
#import "cpp/utils/utils.h"

@implementation MaterialColor {
  NSMutableDictionary<NSString *, dispatch_block_t> *mapDispatcher;
  NSMutableDictionary<NSString *, NSURLSessionDataTask *> *mapTask;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeMaterialColorSpecJSI>(params);
}

- (void)sourceColorFromImageUri:(NSString *)uri signalID:(NSString *)signalID maxWidthOrHeight:(NSNumber *)maxWidthOrHeight resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject
{
  [ImageUtils sourceColorFromImageUri:uri maxWidthOrHeight:1280 didCreatedDispatch:^(dispatch_block_t dispatchBlock){
    if(!self->mapDispatcher) {
      self->mapDispatcher = @{}.mutableCopy;
    }
    [self->mapDispatcher setObject:dispatchBlock forKey:signalID];
  } didCreatedTask:^(NSURLSessionDataTask *task){
    if(!self->mapTask) {
      self->mapTask = @{}.mutableCopy;
    }
    [self->mapTask setObject:task forKey:signalID];
  } didResult:^(NSNumber *color){
    [self->mapDispatcher removeObjectForKey:signalID];
    [self->mapTask removeObjectForKey:signalID];
    resolve(color);
  }];
}

- (void)sourceHexColorFromImageUri:(NSString *)uri signalID:(NSString *)signalID maxWidthOrHeight:(NSNumber *)maxWidthOrHeight resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject
{
  [ImageUtils sourceColorFromImageUri:uri maxWidthOrHeight:1280 didCreatedDispatch:^(dispatch_block_t dispatchBlock){
    if(!self->mapDispatcher) {
      self->mapDispatcher = @{}.mutableCopy;
    }
    [self->mapDispatcher setObject:dispatchBlock forKey:signalID];
  } didCreatedTask:^(NSURLSessionDataTask *task){
    if(!self->mapTask) {
      self->mapTask = @{}.mutableCopy;
    }
    [self->mapTask setObject:task forKey:signalID];
  } didResult:^(NSNumber *color){
    [self->mapDispatcher removeObjectForKey:signalID];
    [self->mapTask removeObjectForKey:signalID];

    uint32_t colorInt = [color intValue];
    std::string hexColor = material_color_utilities::HexFromArgb(colorInt);
    
    if(hexColor[0] != '#') {
      hexColor = "#" + hexColor;
    }

    resolve([NSString stringWithCString:hexColor.c_str() encoding:[NSString defaultCStringEncoding]]);
  }];
}

- (void)cancelSourceColorFromImageUri:(NSString *)signalID
{
    
}

+ (NSString *)moduleName
{
  return @"MaterialColor";
}

@end
