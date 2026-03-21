require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "MaterialColor"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => min_ios_version_supported, :osx => "10.14" }
  s.source       = { :git => "https://github.com/RakaDoank/material-color-react-native.git", :tag => "#{s.version}" }

  s.source_files          = "apple/**/*.{h,m,mm,cpp}"
  s.ios.exclude_files     = "**/*.macos.{h,m,mm}"
  s.tvos.exclude_files    = "**/*.macos.{h,m,mm}"
  s.osx.exclude_files     = "**/*.ios.{h,m,mm}"
  s.private_header_files  = "apple/**/*.h"

  s.subspec "cpp" do |ss|
    ss.source_files         = "cpp/**/*.{h,cc}"
    ss.project_header_files = "cpp/**/*.h" # Don't expose C++ headers publicly to allow importing framework into Swift files
    ss.header_dir           = "MaterialColorSpec"
    ss.pod_target_xcconfig  = { "HEADER_SEARCH_PATHS" => "\"$(PODS_TARGET_SRCROOT)\"" }
  end

  s.dependency "abseil", "~> 1.20250512" # Used internally by material-foundation cpp

  install_modules_dependencies(s)
end
