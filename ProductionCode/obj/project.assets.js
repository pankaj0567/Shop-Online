(function() {
  ({
    "version": 3,
    "targets": {
      ".NETCoreApp,Version=v2.0": {
        "bootstrap/4.0.0": {
          "type": "package",
          "dependencies": {
            "jQuery": "[3.0.0, 4.0.0)",
            "popper.js": "[1.12.9, 2.0.0)"
          }
        },
        "jQuery/3.0.0": {
          "type": "package"
        },
        "Libuv/1.10.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.0.1"
          },
          "runtimeTargets": {
            "runtimes/linux-arm/native/libuv.so": {
              "assetType": "native",
              "rid": "linux-arm"
            },
            "runtimes/linux-arm64/native/libuv.so": {
              "assetType": "native",
              "rid": "linux-arm64"
            },
            "runtimes/linux-armel/native/libuv.so": {
              "assetType": "native",
              "rid": "linux-armel"
            },
            "runtimes/linux-x64/native/libuv.so": {
              "assetType": "native",
              "rid": "linux-x64"
            },
            "runtimes/osx/native/libuv.dylib": {
              "assetType": "native",
              "rid": "osx"
            },
            "runtimes/win-arm/native/libuv.dll": {
              "assetType": "native",
              "rid": "win-arm"
            },
            "runtimes/win-x64/native/libuv.dll": {
              "assetType": "native",
              "rid": "win-x64"
            },
            "runtimes/win-x86/native/libuv.dll": {
              "assetType": "native",
              "rid": "win-x86"
            }
          }
        },
        "Microsoft.ApplicationInsights/2.4.0": {
          "type": "package",
          "dependencies": {
            "NETStandard.Library": "1.6.1",
            "System.Diagnostics.DiagnosticSource": "4.4.0",
            "System.Diagnostics.StackTrace": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.ApplicationInsights.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.ApplicationInsights.dll": {}
          }
        },
        "Microsoft.ApplicationInsights.AspNetCore/2.1.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.ApplicationInsights": "2.4.0",
            "Microsoft.ApplicationInsights.DependencyCollector": "2.4.1",
            "Microsoft.AspNetCore.Hosting": "1.0.0",
            "Microsoft.Extensions.Configuration": "1.0.0",
            "Microsoft.Extensions.Configuration.Json": "1.0.0",
            "Microsoft.Extensions.DiagnosticAdapter": "1.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "1.0.0",
            "NETStandard.Library": "1.6.1",
            "System.Net.NameResolution": "4.3.0",
            "System.Text.Encodings.Web": "4.3.1"
          },
          "compile": {
            "lib/netstandard1.6/Microsoft.ApplicationInsights.AspNetCore.dll": {}
          },
          "runtime": {
            "lib/netstandard1.6/Microsoft.ApplicationInsights.AspNetCore.dll": {}
          }
        },
        "Microsoft.ApplicationInsights.DependencyCollector/2.4.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.ApplicationInsights": "[2.4.0]",
            "Microsoft.Extensions.PlatformAbstractions": "1.1.0",
            "NETStandard.Library": "1.6.1",
            "System.Diagnostics.DiagnosticSource": "4.4.0",
            "System.Diagnostics.StackTrace": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.6/Microsoft.AI.DependencyCollector.dll": {}
          },
          "runtime": {
            "lib/netstandard1.6/Microsoft.AI.DependencyCollector.dll": {}
          }
        },
        "Microsoft.AspNetCore/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Diagnostics": "2.0.1",
            "Microsoft.AspNetCore.Hosting": "2.0.1",
            "Microsoft.AspNetCore.Routing": "2.0.1",
            "Microsoft.AspNetCore.Server.IISIntegration": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Https": "2.0.1",
            "Microsoft.Extensions.Configuration.CommandLine": "2.0.0",
            "Microsoft.Extensions.Configuration.EnvironmentVariables": "2.0.0",
            "Microsoft.Extensions.Configuration.FileExtensions": "2.0.0",
            "Microsoft.Extensions.Configuration.Json": "2.0.0",
            "Microsoft.Extensions.Configuration.UserSecrets": "2.0.0",
            "Microsoft.Extensions.Logging": "2.0.0",
            "Microsoft.Extensions.Logging.Configuration": "2.0.0",
            "Microsoft.Extensions.Logging.Console": "2.0.0",
            "Microsoft.Extensions.Logging.Debug": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.dll": {}
          }
        },
        "Microsoft.AspNetCore.All/2.0.5": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore": "2.0.1",
            "Microsoft.AspNetCore.Antiforgery": "2.0.1",
            "Microsoft.AspNetCore.ApplicationInsights.HostingStartup": "2.0.1",
            "Microsoft.AspNetCore.Authentication": "2.0.1",
            "Microsoft.AspNetCore.Authentication.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Authentication.Cookies": "2.0.1",
            "Microsoft.AspNetCore.Authentication.Core": "2.0.1",
            "Microsoft.AspNetCore.Authentication.Facebook": "2.0.1",
            "Microsoft.AspNetCore.Authentication.Google": "2.0.1",
            "Microsoft.AspNetCore.Authentication.JwtBearer": "2.0.1",
            "Microsoft.AspNetCore.Authentication.MicrosoftAccount": "2.0.1",
            "Microsoft.AspNetCore.Authentication.OAuth": "2.0.1",
            "Microsoft.AspNetCore.Authentication.OpenIdConnect": "2.0.1",
            "Microsoft.AspNetCore.Authentication.Twitter": "2.0.1",
            "Microsoft.AspNetCore.Authorization": "2.0.1",
            "Microsoft.AspNetCore.Authorization.Policy": "2.0.1",
            "Microsoft.AspNetCore.AzureAppServices.HostingStartup": "2.0.1",
            "Microsoft.AspNetCore.AzureAppServicesIntegration": "2.0.1",
            "Microsoft.AspNetCore.CookiePolicy": "2.0.1",
            "Microsoft.AspNetCore.Cors": "2.0.1",
            "Microsoft.AspNetCore.Cryptography.Internal": "2.0.1",
            "Microsoft.AspNetCore.Cryptography.KeyDerivation": "2.0.1",
            "Microsoft.AspNetCore.DataProtection": "2.0.1",
            "Microsoft.AspNetCore.DataProtection.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.DataProtection.AzureStorage": "2.0.1",
            "Microsoft.AspNetCore.DataProtection.Extensions": "2.0.1",
            "Microsoft.AspNetCore.Diagnostics": "2.0.1",
            "Microsoft.AspNetCore.Diagnostics.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore": "2.0.1",
            "Microsoft.AspNetCore.Hosting": "2.0.1",
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Hosting.Server.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Html.Abstractions": "2.0.0",
            "Microsoft.AspNetCore.Http": "2.0.1",
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.AspNetCore.Http.Features": "2.0.1",
            "Microsoft.AspNetCore.HttpOverrides": "2.0.1",
            "Microsoft.AspNetCore.Identity": "2.0.1",
            "Microsoft.AspNetCore.Identity.EntityFrameworkCore": "2.0.1",
            "Microsoft.AspNetCore.JsonPatch": "2.0.0",
            "Microsoft.AspNetCore.Localization": "2.0.1",
            "Microsoft.AspNetCore.Localization.Routing": "2.0.1",
            "Microsoft.AspNetCore.MiddlewareAnalysis": "2.0.1",
            "Microsoft.AspNetCore.Mvc": "2.0.2",
            "Microsoft.AspNetCore.Mvc.Abstractions": "2.0.2",
            "Microsoft.AspNetCore.Mvc.ApiExplorer": "2.0.2",
            "Microsoft.AspNetCore.Mvc.Core": "2.0.2",
            "Microsoft.AspNetCore.Mvc.Cors": "2.0.2",
            "Microsoft.AspNetCore.Mvc.DataAnnotations": "2.0.2",
            "Microsoft.AspNetCore.Mvc.Formatters.Json": "2.0.2",
            "Microsoft.AspNetCore.Mvc.Formatters.Xml": "2.0.2",
            "Microsoft.AspNetCore.Mvc.Localization": "2.0.2",
            "Microsoft.AspNetCore.Mvc.Razor": "2.0.2",
            "Microsoft.AspNetCore.Mvc.Razor.Extensions": "2.0.1",
            "Microsoft.AspNetCore.Mvc.Razor.ViewCompilation": "2.0.2",
            "Microsoft.AspNetCore.Mvc.RazorPages": "2.0.2",
            "Microsoft.AspNetCore.Mvc.TagHelpers": "2.0.2",
            "Microsoft.AspNetCore.Mvc.ViewFeatures": "2.0.2",
            "Microsoft.AspNetCore.NodeServices": "2.0.2",
            "Microsoft.AspNetCore.Owin": "2.0.1",
            "Microsoft.AspNetCore.Razor": "2.0.1",
            "Microsoft.AspNetCore.Razor.Language": "2.0.1",
            "Microsoft.AspNetCore.Razor.Runtime": "2.0.1",
            "Microsoft.AspNetCore.ResponseCaching": "2.0.1",
            "Microsoft.AspNetCore.ResponseCaching.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.ResponseCompression": "2.0.1",
            "Microsoft.AspNetCore.Rewrite": "2.0.1",
            "Microsoft.AspNetCore.Routing": "2.0.1",
            "Microsoft.AspNetCore.Routing.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Server.HttpSys": "2.0.1",
            "Microsoft.AspNetCore.Server.IISIntegration": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Core": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Https": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Transport.Libuv": "2.0.1",
            "Microsoft.AspNetCore.Session": "2.0.1",
            "Microsoft.AspNetCore.SpaServices": "2.0.2",
            "Microsoft.AspNetCore.StaticFiles": "2.0.1",
            "Microsoft.AspNetCore.WebSockets": "2.0.1",
            "Microsoft.AspNetCore.WebUtilities": "2.0.1",
            "Microsoft.CodeAnalysis.Razor": "2.0.1",
            "Microsoft.Data.Sqlite": "2.0.0",
            "Microsoft.Data.Sqlite.Core": "2.0.0",
            "Microsoft.EntityFrameworkCore": "2.0.1",
            "Microsoft.EntityFrameworkCore.Design": "2.0.1",
            "Microsoft.EntityFrameworkCore.InMemory": "2.0.1",
            "Microsoft.EntityFrameworkCore.Relational": "2.0.1",
            "Microsoft.EntityFrameworkCore.SqlServer": "2.0.1",
            "Microsoft.EntityFrameworkCore.Sqlite": "2.0.1",
            "Microsoft.EntityFrameworkCore.Sqlite.Core": "2.0.1",
            "Microsoft.EntityFrameworkCore.Tools": "2.0.1",
            "Microsoft.Extensions.Caching.Abstractions": "2.0.0",
            "Microsoft.Extensions.Caching.Memory": "2.0.0",
            "Microsoft.Extensions.Caching.Redis": "2.0.0",
            "Microsoft.Extensions.Caching.SqlServer": "2.0.0",
            "Microsoft.Extensions.Configuration": "2.0.0",
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0",
            "Microsoft.Extensions.Configuration.AzureKeyVault": "2.0.0",
            "Microsoft.Extensions.Configuration.Binder": "2.0.0",
            "Microsoft.Extensions.Configuration.CommandLine": "2.0.0",
            "Microsoft.Extensions.Configuration.EnvironmentVariables": "2.0.0",
            "Microsoft.Extensions.Configuration.FileExtensions": "2.0.0",
            "Microsoft.Extensions.Configuration.Ini": "2.0.0",
            "Microsoft.Extensions.Configuration.Json": "2.0.0",
            "Microsoft.Extensions.Configuration.UserSecrets": "2.0.0",
            "Microsoft.Extensions.Configuration.Xml": "2.0.0",
            "Microsoft.Extensions.DependencyInjection": "2.0.0",
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.DiagnosticAdapter": "2.0.0",
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0",
            "Microsoft.Extensions.FileProviders.Composite": "2.0.0",
            "Microsoft.Extensions.FileProviders.Embedded": "2.0.0",
            "Microsoft.Extensions.FileProviders.Physical": "2.0.0",
            "Microsoft.Extensions.FileSystemGlobbing": "2.0.0",
            "Microsoft.Extensions.Hosting.Abstractions": "2.0.1",
            "Microsoft.Extensions.Identity.Core": "2.0.1",
            "Microsoft.Extensions.Identity.Stores": "2.0.1",
            "Microsoft.Extensions.Localization": "2.0.1",
            "Microsoft.Extensions.Localization.Abstractions": "2.0.1",
            "Microsoft.Extensions.Logging": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.AzureAppServices": "2.0.0",
            "Microsoft.Extensions.Logging.Configuration": "2.0.0",
            "Microsoft.Extensions.Logging.Console": "2.0.0",
            "Microsoft.Extensions.Logging.Debug": "2.0.0",
            "Microsoft.Extensions.Logging.EventSource": "2.0.0",
            "Microsoft.Extensions.Logging.TraceSource": "2.0.0",
            "Microsoft.Extensions.ObjectPool": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "Microsoft.Extensions.Options.ConfigurationExtensions": "2.0.0",
            "Microsoft.Extensions.Primitives": "2.0.0",
            "Microsoft.Extensions.WebEncoders": "2.0.0",
            "Microsoft.Net.Http.Headers": "2.0.1",
            "Microsoft.VisualStudio.Web.BrowserLink": "2.0.1"
          },
          "compile": {
            "lib/netcoreapp2.0/_._": {}
          },
          "runtime": {
            "lib/netcoreapp2.0/_._": {}
          },
          "build": {
            "build/netcoreapp2.0/Microsoft.AspNetCore.All.targets": {}
          }
        },
        "Microsoft.AspNetCore.Antiforgery/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.DataProtection": "2.0.1",
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.AspNetCore.WebUtilities": "2.0.1",
            "Microsoft.Extensions.ObjectPool": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Antiforgery.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Antiforgery.dll": {}
          }
        },
        "Microsoft.AspNetCore.ApplicationInsights.HostingStartup/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.ApplicationInsights.AspNetCore": "2.1.1",
            "Microsoft.AspNetCore.Hosting": "2.0.1",
            "Microsoft.AspNetCore.Razor.Runtime": "2.0.1",
            "Microsoft.Extensions.Configuration.Json": "2.0.0",
            "Microsoft.Extensions.DiagnosticAdapter": "2.0.0",
            "Microsoft.Extensions.Logging": "2.0.0",
            "Microsoft.Extensions.Logging.Configuration": "2.0.0"
          },
          "compile": {
            "lib/netcoreapp2.0/Microsoft.AspNetCore.ApplicationInsights.HostingStartup.dll": {}
          },
          "runtime": {
            "lib/netcoreapp2.0/Microsoft.AspNetCore.ApplicationInsights.HostingStartup.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.Core": "2.0.1",
            "Microsoft.AspNetCore.DataProtection": "2.0.1",
            "Microsoft.AspNetCore.Http": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "Microsoft.Extensions.WebEncoders": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.Abstractions/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.Cookies/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Cookies.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Cookies.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.Core/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Core.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Core.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.Facebook/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.OAuth": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Facebook.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Facebook.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.Google/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.OAuth": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Google.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Google.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.JwtBearer/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication": "2.0.1",
            "Microsoft.IdentityModel.Protocols.OpenIdConnect": "2.1.4"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.JwtBearer.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.JwtBearer.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.MicrosoftAccount/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.OAuth": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.MicrosoftAccount.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.MicrosoftAccount.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.OAuth/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication": "2.0.1",
            "Newtonsoft.Json": "10.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.OAuth.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.OAuth.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.OpenIdConnect/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.OAuth": "2.0.1",
            "Microsoft.IdentityModel.Protocols.OpenIdConnect": "2.1.4"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.OpenIdConnect.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.OpenIdConnect.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.Twitter/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.OAuth": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Twitter.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Twitter.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authorization/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authorization.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authorization.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authorization.Policy/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Authorization": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authorization.Policy.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authorization.Policy.dll": {}
          }
        },
        "Microsoft.AspNetCore.AzureAppServices.HostingStartup/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.AzureAppServicesIntegration": "2.0.1",
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1"
          },
          "compile": {
            "lib/netcoreapp2.0/Microsoft.AspNetCore.AzureAppServices.HostingStartup.dll": {}
          },
          "runtime": {
            "lib/netcoreapp2.0/Microsoft.AspNetCore.AzureAppServices.HostingStartup.dll": {}
          }
        },
        "Microsoft.AspNetCore.AzureAppServicesIntegration/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Hosting": "2.0.1",
            "Microsoft.Extensions.Logging.AzureAppServices": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.AzureAppServicesIntegration.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.AzureAppServicesIntegration.dll": {}
          }
        },
        "Microsoft.AspNetCore.CookiePolicy/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http": "2.0.1",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.CookiePolicy.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.CookiePolicy.dll": {}
          }
        },
        "Microsoft.AspNetCore.Cors/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0",
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Cors.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Cors.dll": {}
          }
        },
        "Microsoft.AspNetCore.Cryptography.Internal/2.0.1": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Cryptography.Internal.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Cryptography.Internal.dll": {}
          }
        },
        "Microsoft.AspNetCore.Cryptography.KeyDerivation/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Cryptography.Internal": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Cryptography.KeyDerivation.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Cryptography.KeyDerivation.dll": {}
          }
        },
        "Microsoft.AspNetCore.DataProtection/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Cryptography.Internal": "2.0.1",
            "Microsoft.AspNetCore.DataProtection.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "Microsoft.Win32.Registry": "4.4.0",
            "System.Security.Cryptography.Xml": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.dll": {}
          }
        },
        "Microsoft.AspNetCore.DataProtection.Abstractions/2.0.1": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.DataProtection.AzureStorage/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.DataProtection": "2.0.1",
            "WindowsAzure.Storage": "8.1.4"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.AzureStorage.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.AzureStorage.dll": {}
          }
        },
        "Microsoft.AspNetCore.DataProtection.Extensions/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.DataProtection": "2.0.1",
            "Microsoft.Extensions.DependencyInjection": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.Extensions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.Extensions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Diagnostics/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Diagnostics.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.AspNetCore.WebUtilities": "2.0.1",
            "Microsoft.Extensions.FileProviders.Physical": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "System.Diagnostics.DiagnosticSource": "4.4.1",
            "System.Reflection.Metadata": "1.5.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.dll": {}
          }
        },
        "Microsoft.AspNetCore.Diagnostics.Abstractions/2.0.1": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.EntityFrameworkCore.Relational": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore.dll": {}
          }
        },
        "Microsoft.AspNetCore.Hosting/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Hosting.Server.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Configuration": "2.0.0",
            "Microsoft.Extensions.Configuration.EnvironmentVariables": "2.0.0",
            "Microsoft.Extensions.Configuration.FileExtensions": "2.0.0",
            "Microsoft.Extensions.DependencyInjection": "2.0.0",
            "Microsoft.Extensions.FileProviders.Physical": "2.0.0",
            "Microsoft.Extensions.Logging": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "System.Diagnostics.DiagnosticSource": "4.4.1",
            "System.Reflection.Metadata": "1.5.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.dll": {}
          }
        },
        "Microsoft.AspNetCore.Hosting.Abstractions/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Server.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0",
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0",
            "Microsoft.Extensions.Hosting.Abstractions": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Hosting.Server.Abstractions/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Features": "2.0.1",
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.Server.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.Server.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Html.Abstractions/2.0.0": {
          "type": "package",
          "dependencies": {
            "System.Text.Encodings.Web": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Html.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Html.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Http/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.WebUtilities": "2.0.1",
            "Microsoft.Extensions.ObjectPool": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "Microsoft.Net.Http.Headers": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.dll": {}
          }
        },
        "Microsoft.AspNetCore.Http.Abstractions/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Features": "2.0.1",
            "System.Text.Encodings.Web": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Http.Extensions/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0",
            "Microsoft.Net.Http.Headers": "2.0.1",
            "System.Buffers": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.Extensions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.Extensions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Http.Features/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Primitives": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.Features.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.Features.dll": {}
          }
        },
        "Microsoft.AspNetCore.HttpOverrides/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.HttpOverrides.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.HttpOverrides.dll": {}
          }
        },
        "Microsoft.AspNetCore.Identity/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.Cookies": "2.0.1",
            "Microsoft.AspNetCore.Cryptography.KeyDerivation": "2.0.1",
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.Extensions.Identity.Core": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Identity.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Identity.dll": {}
          }
        },
        "Microsoft.AspNetCore.Identity.EntityFrameworkCore/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Identity": "2.0.1",
            "Microsoft.EntityFrameworkCore.Relational": "2.0.1",
            "Microsoft.Extensions.Identity.Stores": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Identity.EntityFrameworkCore.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Identity.EntityFrameworkCore.dll": {}
          }
        },
        "Microsoft.AspNetCore.JsonPatch/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.CSharp": "4.4.0",
            "Newtonsoft.Json": "10.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.JsonPatch.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.JsonPatch.dll": {}
          }
        },
        "Microsoft.AspNetCore.Localization/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Localization.Abstractions": "2.0.1",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Localization.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Localization.dll": {}
          }
        },
        "Microsoft.AspNetCore.Localization.Routing/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Localization": "2.0.1",
            "Microsoft.AspNetCore.Routing.Abstractions": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Localization.Routing.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Localization.Routing.dll": {}
          }
        },
        "Microsoft.AspNetCore.MiddlewareAnalysis/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "System.Diagnostics.DiagnosticSource": "4.4.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.MiddlewareAnalysis.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.MiddlewareAnalysis.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.ApiExplorer": "2.0.2",
            "Microsoft.AspNetCore.Mvc.Cors": "2.0.2",
            "Microsoft.AspNetCore.Mvc.DataAnnotations": "2.0.2",
            "Microsoft.AspNetCore.Mvc.Formatters.Json": "2.0.2",
            "Microsoft.AspNetCore.Mvc.Localization": "2.0.2",
            "Microsoft.AspNetCore.Mvc.RazorPages": "2.0.2",
            "Microsoft.AspNetCore.Mvc.TagHelpers": "2.0.2",
            "Microsoft.AspNetCore.Mvc.ViewFeatures": "2.0.2",
            "Microsoft.Extensions.Caching.Memory": "2.0.0",
            "Microsoft.Extensions.DependencyInjection": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Abstractions/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Routing.Abstractions": "2.0.1",
            "Microsoft.Net.Http.Headers": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.ApiExplorer/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.Core": "2.0.2"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.ApiExplorer.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.ApiExplorer.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Core/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.Core": "2.0.1",
            "Microsoft.AspNetCore.Authorization.Policy": "2.0.1",
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.AspNetCore.Mvc.Abstractions": "2.0.2",
            "Microsoft.AspNetCore.ResponseCaching.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Routing": "2.0.1",
            "Microsoft.Extensions.DependencyModel": "2.0.3",
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "System.Diagnostics.DiagnosticSource": "4.4.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Core.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Core.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Cors/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Cors": "2.0.1",
            "Microsoft.AspNetCore.Mvc.Core": "2.0.2"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Cors.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Cors.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.DataAnnotations/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.Core": "2.0.2",
            "Microsoft.Extensions.Localization": "2.0.1",
            "System.ComponentModel.Annotations": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.DataAnnotations.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.DataAnnotations.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Formatters.Json/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.JsonPatch": "2.0.0",
            "Microsoft.AspNetCore.Mvc.Core": "2.0.2"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Formatters.Json.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Formatters.Json.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Formatters.Xml/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.Core": "2.0.2"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Formatters.Xml.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Formatters.Xml.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Localization/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Localization": "2.0.1",
            "Microsoft.AspNetCore.Mvc.Razor": "2.0.2",
            "Microsoft.Extensions.DependencyInjection": "2.0.0",
            "Microsoft.Extensions.Localization": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Localization.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Localization.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Razor/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.Razor.Extensions": "2.0.1",
            "Microsoft.AspNetCore.Mvc.ViewFeatures": "2.0.2",
            "Microsoft.AspNetCore.Razor.Runtime": "2.0.1",
            "Microsoft.CodeAnalysis.CSharp": "2.3.1",
            "Microsoft.CodeAnalysis.Razor": "2.0.1",
            "Microsoft.Extensions.Caching.Memory": "2.0.0",
            "Microsoft.Extensions.FileProviders.Composite": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Razor.Extensions/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Razor.Language": "2.0.1",
            "Microsoft.CodeAnalysis.Razor": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.Extensions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.Extensions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Razor.ViewCompilation/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Hosting": "2.0.1",
            "Microsoft.AspNetCore.Mvc.RazorPages": "2.0.2"
          },
          "build": {
            "build/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.ViewCompilation.targets": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.RazorPages/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.Razor": "2.0.2"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.RazorPages.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.RazorPages.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.TagHelpers/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.Razor": "2.0.2",
            "Microsoft.AspNetCore.Razor.Runtime": "2.0.1",
            "Microsoft.AspNetCore.Routing.Abstractions": "2.0.1",
            "Microsoft.Extensions.Caching.Memory": "2.0.0",
            "Microsoft.Extensions.FileSystemGlobbing": "2.0.0",
            "Microsoft.Extensions.Primitives": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.TagHelpers.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.TagHelpers.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.ViewFeatures/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Antiforgery": "2.0.1",
            "Microsoft.AspNetCore.Diagnostics.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Html.Abstractions": "2.0.0",
            "Microsoft.AspNetCore.Mvc.Core": "2.0.2",
            "Microsoft.AspNetCore.Mvc.DataAnnotations": "2.0.2",
            "Microsoft.AspNetCore.Mvc.Formatters.Json": "2.0.2",
            "Microsoft.Extensions.WebEncoders": "2.0.0",
            "Newtonsoft.Json.Bson": "1.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.ViewFeatures.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.ViewFeatures.dll": {}
          }
        },
        "Microsoft.AspNetCore.NodeServices/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.Extensions.Logging.Console": "2.0.0",
            "Newtonsoft.Json": "10.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.NodeServices.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.NodeServices.dll": {}
          }
        },
        "Microsoft.AspNetCore.Owin/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Owin.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Owin.dll": {}
          }
        },
        "Microsoft.AspNetCore.Razor/2.0.1": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Razor.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Razor.dll": {}
          }
        },
        "Microsoft.AspNetCore.Razor.Language/2.0.1": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Razor.Language.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Razor.Language.dll": {}
          }
        },
        "Microsoft.AspNetCore.Razor.Runtime/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Html.Abstractions": "2.0.0",
            "Microsoft.AspNetCore.Razor": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Razor.Runtime.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Razor.Runtime.dll": {}
          }
        },
        "Microsoft.AspNetCore.ResponseCaching/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.AspNetCore.ResponseCaching.Abstractions": "2.0.1",
            "Microsoft.Extensions.Caching.Memory": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCaching.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCaching.dll": {}
          }
        },
        "Microsoft.AspNetCore.ResponseCaching.Abstractions/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Primitives": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCaching.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCaching.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.ResponseCompression/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCompression.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCompression.dll": {}
          }
        },
        "Microsoft.AspNetCore.Rewrite/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0",
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Rewrite.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Rewrite.dll": {}
          }
        },
        "Microsoft.AspNetCore.Routing/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.AspNetCore.Routing.Abstractions": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.ObjectPool": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Routing.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Routing.dll": {}
          }
        },
        "Microsoft.AspNetCore.Routing.Abstractions/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Routing.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Routing.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Server.HttpSys/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.Core": "2.0.1",
            "Microsoft.AspNetCore.Hosting": "2.0.1",
            "Microsoft.Net.Http.Headers": "2.0.1",
            "Microsoft.Win32.Registry": "4.4.0",
            "System.Security.Principal.Windows": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.HttpSys.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.HttpSys.dll": {}
          }
        },
        "Microsoft.AspNetCore.Server.IISIntegration/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.Core": "2.0.1",
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.AspNetCore.HttpOverrides": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "System.Security.Principal.Windows": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.IISIntegration.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.IISIntegration.dll": {}
          }
        },
        "Microsoft.AspNetCore.Server.Kestrel/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Hosting": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Core": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Transport.Libuv": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.dll": {}
          }
        },
        "Microsoft.AspNetCore.Server.Kestrel.Core/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.WebUtilities": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "Microsoft.Net.Http.Headers": "2.0.1",
            "System.Threading.Tasks.Extensions": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Core.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Core.dll": {}
          }
        },
        "Microsoft.AspNetCore.Server.Kestrel.Https/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Core": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Https.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Https.dll": {}
          }
        },
        "Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Features": "2.0.1",
            "System.Buffers": "4.4.0",
            "System.Numerics.Vectors": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Server.Kestrel.Transport.Libuv/2.0.1": {
          "type": "package",
          "dependencies": {
            "Libuv": "1.10.0",
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Transport.Libuv.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Transport.Libuv.dll": {}
          }
        },
        "Microsoft.AspNetCore.Session/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.DataProtection": "2.0.1",
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.Extensions.Caching.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Session.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Session.dll": {}
          }
        },
        "Microsoft.AspNetCore.SpaServices/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.TagHelpers": "2.0.2",
            "Microsoft.AspNetCore.Mvc.ViewFeatures": "2.0.2",
            "Microsoft.AspNetCore.NodeServices": "2.0.2"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.SpaServices.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.SpaServices.dll": {}
          }
        },
        "Microsoft.AspNetCore.StaticFiles/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.WebEncoders": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.StaticFiles.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.StaticFiles.dll": {}
          }
        },
        "Microsoft.AspNetCore.WebSockets/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Options": "2.0.0",
            "System.Numerics.Vectors": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.WebSockets.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.WebSockets.dll": {}
          }
        },
        "Microsoft.AspNetCore.WebUtilities/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.Net.Http.Headers": "2.0.1",
            "System.Text.Encodings.Web": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.WebUtilities.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.WebUtilities.dll": {}
          }
        },
        "Microsoft.Azure.KeyVault/2.3.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.Azure.KeyVault.WebKey": "2.0.7",
            "Microsoft.Rest.ClientRuntime": "[2.3.8, 3.0.0)",
            "Microsoft.Rest.ClientRuntime.Azure": "[3.3.7, 4.0.0)",
            "NETStandard.Library": "1.6.1",
            "Newtonsoft.Json": "9.0.1",
            "System.Net.Http": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.Azure.KeyVault.dll": {}
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.Azure.KeyVault.dll": {}
          }
        },
        "Microsoft.Azure.KeyVault.WebKey/2.0.7": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.0.2",
            "NETStandard.Library": "1.6.1",
            "Newtonsoft.Json": "9.0.1",
            "System.Collections": "4.0.11",
            "System.Collections.Concurrent": "4.0.12",
            "System.Linq": "4.1.0",
            "System.Runtime": "4.1.0",
            "System.Security.Cryptography.Algorithms": "4.2.0"
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.Azure.KeyVault.WebKey.dll": {}
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.Azure.KeyVault.WebKey.dll": {}
          }
        },
        "Microsoft.CodeAnalysis.Analyzers/1.1.0": {
          "type": "package"
        },
        "Microsoft.CodeAnalysis.Common/2.3.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.CodeAnalysis.Analyzers": "1.1.0",
            "System.AppContext": "4.3.0",
            "System.Collections": "4.3.0",
            "System.Collections.Concurrent": "4.3.0",
            "System.Collections.Immutable": "1.3.1",
            "System.Console": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Diagnostics.FileVersionInfo": "4.3.0",
            "System.Diagnostics.StackTrace": "4.3.0",
            "System.Diagnostics.Tools": "4.3.0",
            "System.Dynamic.Runtime": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO.Compression": "4.3.0",
            "System.IO.FileSystem": "4.3.0",
            "System.IO.FileSystem.Primitives": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Linq.Expressions": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Metadata": "1.4.2",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Runtime.Numerics": "4.3.0",
            "System.Security.Cryptography.Algorithms": "4.3.0",
            "System.Security.Cryptography.Encoding": "4.3.0",
            "System.Security.Cryptography.X509Certificates": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Text.Encoding.CodePages": "4.3.0",
            "System.Text.Encoding.Extensions": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0",
            "System.Threading.Tasks.Parallel": "4.3.0",
            "System.Threading.Thread": "4.3.0",
            "System.ValueTuple": "4.3.0",
            "System.Xml.ReaderWriter": "4.3.0",
            "System.Xml.XDocument": "4.3.0",
            "System.Xml.XPath.XDocument": "4.3.0",
            "System.Xml.XmlDocument": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.dll": {}
          }
        },
        "Microsoft.CodeAnalysis.CSharp/2.3.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.CodeAnalysis.Common": "[2.3.1]"
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.CSharp.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.CSharp.dll": {}
          }
        },
        "Microsoft.CodeAnalysis.CSharp.Workspaces/2.3.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.CodeAnalysis.CSharp": "[2.3.1]",
            "Microsoft.CodeAnalysis.Workspaces.Common": "[2.3.1]"
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.CSharp.Workspaces.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.CSharp.Workspaces.dll": {}
          }
        },
        "Microsoft.CodeAnalysis.Razor/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Razor.Language": "2.0.1",
            "Microsoft.CodeAnalysis.CSharp": "2.3.1",
            "Microsoft.CodeAnalysis.Common": "2.3.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.CodeAnalysis.Razor.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.CodeAnalysis.Razor.dll": {}
          }
        },
        "Microsoft.CodeAnalysis.Workspaces.Common/2.3.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.CodeAnalysis.Common": "[2.3.1]",
            "System.Composition": "1.0.31",
            "System.Diagnostics.Contracts": "4.3.0",
            "System.Linq.Parallel": "4.3.0",
            "System.ObjectModel": "4.3.0",
            "System.Text.RegularExpressions": "4.3.0",
            "System.Threading.Tasks.Parallel": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.Workspaces.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.Workspaces.dll": {}
          }
        },
        "Microsoft.CSharp/4.4.0": {
          "type": "package",
          "compile": {
            "ref/netcoreapp2.0/_._": {}
          },
          "runtime": {
            "lib/netcoreapp2.0/_._": {}
          }
        },
        "Microsoft.Data.Edm/5.8.2": {
          "type": "package",
          "compile": {
            "lib/netstandard1.1/Microsoft.Data.Edm.dll": {}
          },
          "runtime": {
            "lib/netstandard1.1/Microsoft.Data.Edm.dll": {}
          },
          "resource": {
            "lib/netstandard1.1/de/Microsoft.Data.Edm.resources.dll": {
              "locale": "de"
            },
            "lib/netstandard1.1/es/Microsoft.Data.Edm.resources.dll": {
              "locale": "es"
            },
            "lib/netstandard1.1/fr/Microsoft.Data.Edm.resources.dll": {
              "locale": "fr"
            },
            "lib/netstandard1.1/it/Microsoft.Data.Edm.resources.dll": {
              "locale": "it"
            },
            "lib/netstandard1.1/ja/Microsoft.Data.Edm.resources.dll": {
              "locale": "ja"
            },
            "lib/netstandard1.1/ko/Microsoft.Data.Edm.resources.dll": {
              "locale": "ko"
            },
            "lib/netstandard1.1/ru/Microsoft.Data.Edm.resources.dll": {
              "locale": "ru"
            },
            "lib/netstandard1.1/zh-Hans/Microsoft.Data.Edm.resources.dll": {
              "locale": "zh-Hans"
            },
            "lib/netstandard1.1/zh-Hant/Microsoft.Data.Edm.resources.dll": {
              "locale": "zh-Hant"
            }
          }
        },
        "Microsoft.Data.OData/5.8.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.Data.Edm": "[5.8.2]",
            "System.Spatial": "[5.8.2]"
          },
          "compile": {
            "lib/netstandard1.1/Microsoft.Data.OData.dll": {}
          },
          "runtime": {
            "lib/netstandard1.1/Microsoft.Data.OData.dll": {}
          },
          "resource": {
            "lib/netstandard1.1/de/Microsoft.Data.OData.resources.dll": {
              "locale": "de"
            },
            "lib/netstandard1.1/es/Microsoft.Data.OData.resources.dll": {
              "locale": "es"
            },
            "lib/netstandard1.1/fr/Microsoft.Data.OData.resources.dll": {
              "locale": "fr"
            },
            "lib/netstandard1.1/it/Microsoft.Data.OData.resources.dll": {
              "locale": "it"
            },
            "lib/netstandard1.1/ja/Microsoft.Data.OData.resources.dll": {
              "locale": "ja"
            },
            "lib/netstandard1.1/ko/Microsoft.Data.OData.resources.dll": {
              "locale": "ko"
            },
            "lib/netstandard1.1/ru/Microsoft.Data.OData.resources.dll": {
              "locale": "ru"
            },
            "lib/netstandard1.1/zh-Hans/Microsoft.Data.OData.resources.dll": {
              "locale": "zh-Hans"
            },
            "lib/netstandard1.1/zh-Hant/Microsoft.Data.OData.resources.dll": {
              "locale": "zh-Hant"
            }
          }
        },
        "Microsoft.Data.Sqlite/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Data.Sqlite.Core": "2.0.0",
            "SQLitePCLRaw.bundle_green": "1.1.7"
          }
        },
        "Microsoft.Data.Sqlite.Core/2.0.0": {
          "type": "package",
          "dependencies": {
            "SQLitePCLRaw.core": "1.1.7"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Data.Sqlite.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Data.Sqlite.dll": {}
          }
        },
        "Microsoft.DotNet.PlatformAbstractions/2.0.3": {
          "type": "package",
          "dependencies": {
            "System.AppContext": "4.1.0",
            "System.Collections": "4.0.11",
            "System.IO": "4.1.0",
            "System.IO.FileSystem": "4.0.1",
            "System.Reflection.TypeExtensions": "4.1.0",
            "System.Runtime.Extensions": "4.1.0",
            "System.Runtime.InteropServices": "4.1.0",
            "System.Runtime.InteropServices.RuntimeInformation": "4.0.0"
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.DotNet.PlatformAbstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.DotNet.PlatformAbstractions.dll": {}
          }
        },
        "Microsoft.EntityFrameworkCore/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Caching.Memory": "2.0.0",
            "Microsoft.Extensions.DependencyInjection": "2.0.0",
            "Microsoft.Extensions.Logging": "2.0.0",
            "Remotion.Linq": "2.1.1",
            "System.Collections.Immutable": "1.4.0",
            "System.ComponentModel.Annotations": "4.4.0",
            "System.Diagnostics.DiagnosticSource": "4.4.1",
            "System.Interactive.Async": "3.1.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.dll": {}
          }
        },
        "Microsoft.EntityFrameworkCore.Design/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.EntityFrameworkCore.Relational": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Design.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Design.dll": {}
          }
        },
        "Microsoft.EntityFrameworkCore.InMemory/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.EntityFrameworkCore": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.InMemory.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.InMemory.dll": {}
          }
        },
        "Microsoft.EntityFrameworkCore.Relational/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.CSharp": "4.4.0",
            "Microsoft.EntityFrameworkCore": "2.0.1",
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Relational.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Relational.dll": {}
          }
        },
        "Microsoft.EntityFrameworkCore.Sqlite/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.EntityFrameworkCore.Sqlite.Core": "2.0.1",
            "SQLitePCLRaw.bundle_green": "1.1.7"
          }
        },
        "Microsoft.EntityFrameworkCore.Sqlite.Core/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.Data.Sqlite.Core": "2.0.0",
            "Microsoft.EntityFrameworkCore.Relational": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Sqlite.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Sqlite.dll": {}
          }
        },
        "Microsoft.EntityFrameworkCore.SqlServer/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.EntityFrameworkCore.Relational": "2.0.1",
            "System.Data.SqlClient": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.SqlServer.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.SqlServer.dll": {}
          }
        },
        "Microsoft.EntityFrameworkCore.Tools/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.EntityFrameworkCore.Design": "2.0.1"
          },
          "compile": {
            "lib/netstandard2.0/_._": {}
          },
          "runtime": {
            "lib/netstandard2.0/_._": {}
          }
        },
        "Microsoft.Extensions.Caching.Abstractions/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Primitives": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.Abstractions.dll": {}
          }
        },
        "Microsoft.Extensions.Caching.Memory/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Caching.Abstractions": "2.0.0",
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.Memory.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.Memory.dll": {}
          }
        },
        "Microsoft.Extensions.Caching.Redis/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Caching.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "StackExchange.Redis.StrongName": "1.2.4"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.Redis.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.Redis.dll": {}
          }
        },
        "Microsoft.Extensions.Caching.SqlServer/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Caching.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "System.Data.SqlClient": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.SqlServer.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.SqlServer.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.Abstractions/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Primitives": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Abstractions.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.AzureKeyVault/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Azure.KeyVault": "2.3.2",
            "Microsoft.Extensions.Configuration": "2.0.0",
            "Microsoft.Extensions.Configuration.FileExtensions": "2.0.0",
            "Microsoft.IdentityModel.Clients.ActiveDirectory": "3.14.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.AzureKeyVault.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.AzureKeyVault.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.Binder/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Configuration": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Binder.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Binder.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.CommandLine/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Configuration": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.CommandLine.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.CommandLine.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.EnvironmentVariables/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Configuration": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.EnvironmentVariables.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.EnvironmentVariables.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.FileExtensions/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Configuration": "2.0.0",
            "Microsoft.Extensions.FileProviders.Physical": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.FileExtensions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.FileExtensions.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.Ini/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Configuration": "2.0.0",
            "Microsoft.Extensions.Configuration.FileExtensions": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Ini.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Ini.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.Json/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Configuration": "2.0.0",
            "Microsoft.Extensions.Configuration.FileExtensions": "2.0.0",
            "Newtonsoft.Json": "10.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Json.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Json.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.UserSecrets/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Configuration.Json": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.UserSecrets.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.UserSecrets.dll": {}
          },
          "build": {
            "build/netstandard2.0/Microsoft.Extensions.Configuration.UserSecrets.targets": {}
          }
        },
        "Microsoft.Extensions.Configuration.Xml/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Configuration": "2.0.0",
            "Microsoft.Extensions.Configuration.FileExtensions": "2.0.0",
            "System.Security.Cryptography.Xml": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Xml.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Xml.dll": {}
          }
        },
        "Microsoft.Extensions.DependencyInjection/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.DependencyInjection.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.DependencyInjection.dll": {}
          }
        },
        "Microsoft.Extensions.DependencyInjection.Abstractions/2.0.0": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.DependencyInjection.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.DependencyInjection.Abstractions.dll": {}
          }
        },
        "Microsoft.Extensions.DependencyModel/2.0.3": {
          "type": "package",
          "dependencies": {
            "Microsoft.DotNet.PlatformAbstractions": "2.0.3",
            "Newtonsoft.Json": "9.0.1",
            "System.Diagnostics.Debug": "4.0.11",
            "System.Dynamic.Runtime": "4.0.11",
            "System.Linq": "4.1.0"
          },
          "compile": {
            "lib/netstandard1.6/Microsoft.Extensions.DependencyModel.dll": {}
          },
          "runtime": {
            "lib/netstandard1.6/Microsoft.Extensions.DependencyModel.dll": {}
          }
        },
        "Microsoft.Extensions.DiagnosticAdapter/2.0.0": {
          "type": "package",
          "dependencies": {
            "System.Diagnostics.DiagnosticSource": "4.4.1"
          },
          "compile": {
            "lib/netcoreapp2.0/Microsoft.Extensions.DiagnosticAdapter.dll": {}
          },
          "runtime": {
            "lib/netcoreapp2.0/Microsoft.Extensions.DiagnosticAdapter.dll": {}
          }
        },
        "Microsoft.Extensions.FileProviders.Abstractions/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Primitives": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Abstractions.dll": {}
          }
        },
        "Microsoft.Extensions.FileProviders.Composite/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Composite.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Composite.dll": {}
          }
        },
        "Microsoft.Extensions.FileProviders.Embedded/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Embedded.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Embedded.dll": {}
          }
        },
        "Microsoft.Extensions.FileProviders.Physical/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0",
            "Microsoft.Extensions.FileSystemGlobbing": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Physical.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Physical.dll": {}
          }
        },
        "Microsoft.Extensions.FileSystemGlobbing/2.0.0": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.FileSystemGlobbing.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.FileSystemGlobbing.dll": {}
          }
        },
        "Microsoft.Extensions.Hosting.Abstractions/2.0.1": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Hosting.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Hosting.Abstractions.dll": {}
          }
        },
        "Microsoft.Extensions.Identity.Core/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Cryptography.KeyDerivation": "2.0.1",
            "Microsoft.Extensions.Logging": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "System.ComponentModel.Annotations": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Identity.Core.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Identity.Core.dll": {}
          }
        },
        "Microsoft.Extensions.Identity.Stores/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Identity.Core": "2.0.1",
            "Microsoft.Extensions.Logging": "2.0.0",
            "System.ComponentModel.Annotations": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Identity.Stores.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Identity.Stores.dll": {}
          }
        },
        "Microsoft.Extensions.Localization/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Localization.Abstractions": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Localization.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Localization.dll": {}
          }
        },
        "Microsoft.Extensions.Localization.Abstractions/2.0.1": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Localization.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Localization.Abstractions.dll": {}
          }
        },
        "Microsoft.Extensions.Logging/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.dll": {}
          }
        },
        "Microsoft.Extensions.Logging.Abstractions/2.0.0": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Abstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Abstractions.dll": {}
          }
        },
        "Microsoft.Extensions.Logging.AzureAppServices/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Configuration.EnvironmentVariables": "2.0.0",
            "Microsoft.Extensions.Configuration.Json": "2.0.0",
            "Microsoft.Extensions.Logging": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.Configuration": "2.0.0",
            "System.ValueTuple": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.AzureAppServices.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.AzureAppServices.dll": {}
          }
        },
        "Microsoft.Extensions.Logging.Configuration/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Logging": "2.0.0",
            "Microsoft.Extensions.Options.ConfigurationExtensions": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Configuration.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Configuration.dll": {}
          }
        },
        "Microsoft.Extensions.Logging.Console/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Console.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Console.dll": {}
          }
        },
        "Microsoft.Extensions.Logging.Debug/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Logging": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Debug.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Debug.dll": {}
          }
        },
        "Microsoft.Extensions.Logging.EventSource/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Logging": "2.0.0",
            "Newtonsoft.Json": "10.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.EventSource.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.EventSource.dll": {}
          }
        },
        "Microsoft.Extensions.Logging.TraceSource/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Logging": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.TraceSource.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.TraceSource.dll": {}
          }
        },
        "Microsoft.Extensions.ObjectPool/2.0.0": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.ObjectPool.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.ObjectPool.dll": {}
          }
        },
        "Microsoft.Extensions.Options/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Primitives": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Options.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Options.dll": {}
          }
        },
        "Microsoft.Extensions.Options.ConfigurationExtensions/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0",
            "Microsoft.Extensions.Configuration.Binder": "2.0.0",
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Options.ConfigurationExtensions.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Options.ConfigurationExtensions.dll": {}
          }
        },
        "Microsoft.Extensions.PlatformAbstractions/1.1.0": {
          "type": "package",
          "dependencies": {
            "NETStandard.Library": "1.6.1",
            "System.Reflection.TypeExtensions": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.Extensions.PlatformAbstractions.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.Extensions.PlatformAbstractions.dll": {}
          }
        },
        "Microsoft.Extensions.Primitives/2.0.0": {
          "type": "package",
          "dependencies": {
            "System.Runtime.CompilerServices.Unsafe": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Primitives.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Primitives.dll": {}
          }
        },
        "Microsoft.Extensions.WebEncoders/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "System.Text.Encodings.Web": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.WebEncoders.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.WebEncoders.dll": {}
          }
        },
        "Microsoft.IdentityModel.Clients.ActiveDirectory/3.14.1": {
          "type": "package",
          "dependencies": {
            "NETStandard.Library": "1.6.0",
            "System.Runtime.Serialization.Json": "4.0.2",
            "System.Runtime.Serialization.Primitives": "4.1.1"
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.dll": {},
            "lib/netstandard1.3/Microsoft.IdentityModel.Clients.ActiveDirectory.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.dll": {},
            "lib/netstandard1.3/Microsoft.IdentityModel.Clients.ActiveDirectory.dll": {}
          }
        },
        "Microsoft.IdentityModel.Logging/1.1.4": {
          "type": "package",
          "dependencies": {
            "System.Diagnostics.Tracing": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.IO.FileSystem": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Logging.dll": {}
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Logging.dll": {}
          }
        },
        "Microsoft.IdentityModel.Protocols/2.1.4": {
          "type": "package",
          "dependencies": {
            "System.Collections.Specialized": "4.3.0",
            "System.Diagnostics.Contracts": "4.3.0",
            "System.IdentityModel.Tokens.Jwt": "5.1.4",
            "System.Net.Http": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Protocols.dll": {}
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Protocols.dll": {}
          }
        },
        "Microsoft.IdentityModel.Protocols.OpenIdConnect/2.1.4": {
          "type": "package",
          "dependencies": {
            "Microsoft.IdentityModel.Protocols": "2.1.4",
            "System.Dynamic.Runtime": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Protocols.OpenIdConnect.dll": {}
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Protocols.OpenIdConnect.dll": {}
          }
        },
        "Microsoft.IdentityModel.Tokens/5.1.4": {
          "type": "package",
          "dependencies": {
            "Microsoft.IdentityModel.Logging": "1.1.4",
            "Newtonsoft.Json": "9.0.1",
            "System.Collections": "4.3.0",
            "System.Diagnostics.Tools": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Runtime.InteropServices.RuntimeInformation": "4.3.0",
            "System.Security.Claims": "4.3.0",
            "System.Security.Cryptography.Algorithms": "4.3.0",
            "System.Security.Cryptography.X509Certificates": "4.3.0",
            "System.Text.RegularExpressions": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Xml.ReaderWriter": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Tokens.dll": {}
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Tokens.dll": {}
          }
        },
        "Microsoft.Net.Http.Headers/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.Primitives": "2.0.0",
            "System.Buffers": "4.4.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Net.Http.Headers.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Net.Http.Headers.dll": {}
          }
        },
        "Microsoft.NETCore.App/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.DotNetHostPolicy": "2.0.0",
            "Microsoft.NETCore.Platforms": "2.0.0",
            "NETStandard.Library": "2.0.0"
          },
          "compile": {
            "ref/netcoreapp2.0/Microsoft.CSharp.dll": {},
            "ref/netcoreapp2.0/Microsoft.VisualBasic.dll": {},
            "ref/netcoreapp2.0/Microsoft.Win32.Primitives.dll": {},
            "ref/netcoreapp2.0/System.AppContext.dll": {},
            "ref/netcoreapp2.0/System.Buffers.dll": {},
            "ref/netcoreapp2.0/System.Collections.Concurrent.dll": {},
            "ref/netcoreapp2.0/System.Collections.Immutable.dll": {},
            "ref/netcoreapp2.0/System.Collections.NonGeneric.dll": {},
            "ref/netcoreapp2.0/System.Collections.Specialized.dll": {},
            "ref/netcoreapp2.0/System.Collections.dll": {},
            "ref/netcoreapp2.0/System.ComponentModel.Annotations.dll": {},
            "ref/netcoreapp2.0/System.ComponentModel.Composition.dll": {},
            "ref/netcoreapp2.0/System.ComponentModel.DataAnnotations.dll": {},
            "ref/netcoreapp2.0/System.ComponentModel.EventBasedAsync.dll": {},
            "ref/netcoreapp2.0/System.ComponentModel.Primitives.dll": {},
            "ref/netcoreapp2.0/System.ComponentModel.TypeConverter.dll": {},
            "ref/netcoreapp2.0/System.ComponentModel.dll": {},
            "ref/netcoreapp2.0/System.Configuration.dll": {},
            "ref/netcoreapp2.0/System.Console.dll": {},
            "ref/netcoreapp2.0/System.Core.dll": {},
            "ref/netcoreapp2.0/System.Data.Common.dll": {},
            "ref/netcoreapp2.0/System.Data.dll": {},
            "ref/netcoreapp2.0/System.Diagnostics.Contracts.dll": {},
            "ref/netcoreapp2.0/System.Diagnostics.Debug.dll": {},
            "ref/netcoreapp2.0/System.Diagnostics.DiagnosticSource.dll": {},
            "ref/netcoreapp2.0/System.Diagnostics.FileVersionInfo.dll": {},
            "ref/netcoreapp2.0/System.Diagnostics.Process.dll": {},
            "ref/netcoreapp2.0/System.Diagnostics.StackTrace.dll": {},
            "ref/netcoreapp2.0/System.Diagnostics.TextWriterTraceListener.dll": {},
            "ref/netcoreapp2.0/System.Diagnostics.Tools.dll": {},
            "ref/netcoreapp2.0/System.Diagnostics.TraceSource.dll": {},
            "ref/netcoreapp2.0/System.Diagnostics.Tracing.dll": {},
            "ref/netcoreapp2.0/System.Drawing.Primitives.dll": {},
            "ref/netcoreapp2.0/System.Drawing.dll": {},
            "ref/netcoreapp2.0/System.Dynamic.Runtime.dll": {},
            "ref/netcoreapp2.0/System.Globalization.Calendars.dll": {},
            "ref/netcoreapp2.0/System.Globalization.Extensions.dll": {},
            "ref/netcoreapp2.0/System.Globalization.dll": {},
            "ref/netcoreapp2.0/System.IO.Compression.FileSystem.dll": {},
            "ref/netcoreapp2.0/System.IO.Compression.ZipFile.dll": {},
            "ref/netcoreapp2.0/System.IO.Compression.dll": {},
            "ref/netcoreapp2.0/System.IO.FileSystem.DriveInfo.dll": {},
            "ref/netcoreapp2.0/System.IO.FileSystem.Primitives.dll": {},
            "ref/netcoreapp2.0/System.IO.FileSystem.Watcher.dll": {},
            "ref/netcoreapp2.0/System.IO.FileSystem.dll": {},
            "ref/netcoreapp2.0/System.IO.IsolatedStorage.dll": {},
            "ref/netcoreapp2.0/System.IO.MemoryMappedFiles.dll": {},
            "ref/netcoreapp2.0/System.IO.Pipes.dll": {},
            "ref/netcoreapp2.0/System.IO.UnmanagedMemoryStream.dll": {},
            "ref/netcoreapp2.0/System.IO.dll": {},
            "ref/netcoreapp2.0/System.Linq.Expressions.dll": {},
            "ref/netcoreapp2.0/System.Linq.Parallel.dll": {},
            "ref/netcoreapp2.0/System.Linq.Queryable.dll": {},
            "ref/netcoreapp2.0/System.Linq.dll": {},
            "ref/netcoreapp2.0/System.Net.Http.dll": {},
            "ref/netcoreapp2.0/System.Net.HttpListener.dll": {},
            "ref/netcoreapp2.0/System.Net.Mail.dll": {},
            "ref/netcoreapp2.0/System.Net.NameResolution.dll": {},
            "ref/netcoreapp2.0/System.Net.NetworkInformation.dll": {},
            "ref/netcoreapp2.0/System.Net.Ping.dll": {},
            "ref/netcoreapp2.0/System.Net.Primitives.dll": {},
            "ref/netcoreapp2.0/System.Net.Requests.dll": {},
            "ref/netcoreapp2.0/System.Net.Security.dll": {},
            "ref/netcoreapp2.0/System.Net.ServicePoint.dll": {},
            "ref/netcoreapp2.0/System.Net.Sockets.dll": {},
            "ref/netcoreapp2.0/System.Net.WebClient.dll": {},
            "ref/netcoreapp2.0/System.Net.WebHeaderCollection.dll": {},
            "ref/netcoreapp2.0/System.Net.WebProxy.dll": {},
            "ref/netcoreapp2.0/System.Net.WebSockets.Client.dll": {},
            "ref/netcoreapp2.0/System.Net.WebSockets.dll": {},
            "ref/netcoreapp2.0/System.Net.dll": {},
            "ref/netcoreapp2.0/System.Numerics.Vectors.dll": {},
            "ref/netcoreapp2.0/System.Numerics.dll": {},
            "ref/netcoreapp2.0/System.ObjectModel.dll": {},
            "ref/netcoreapp2.0/System.Reflection.DispatchProxy.dll": {},
            "ref/netcoreapp2.0/System.Reflection.Emit.ILGeneration.dll": {},
            "ref/netcoreapp2.0/System.Reflection.Emit.Lightweight.dll": {},
            "ref/netcoreapp2.0/System.Reflection.Emit.dll": {},
            "ref/netcoreapp2.0/System.Reflection.Extensions.dll": {},
            "ref/netcoreapp2.0/System.Reflection.Metadata.dll": {},
            "ref/netcoreapp2.0/System.Reflection.Primitives.dll": {},
            "ref/netcoreapp2.0/System.Reflection.TypeExtensions.dll": {},
            "ref/netcoreapp2.0/System.Reflection.dll": {},
            "ref/netcoreapp2.0/System.Resources.Reader.dll": {},
            "ref/netcoreapp2.0/System.Resources.ResourceManager.dll": {},
            "ref/netcoreapp2.0/System.Resources.Writer.dll": {},
            "ref/netcoreapp2.0/System.Runtime.CompilerServices.VisualC.dll": {},
            "ref/netcoreapp2.0/System.Runtime.Extensions.dll": {},
            "ref/netcoreapp2.0/System.Runtime.Handles.dll": {},
            "ref/netcoreapp2.0/System.Runtime.InteropServices.RuntimeInformation.dll": {},
            "ref/netcoreapp2.0/System.Runtime.InteropServices.WindowsRuntime.dll": {},
            "ref/netcoreapp2.0/System.Runtime.InteropServices.dll": {},
            "ref/netcoreapp2.0/System.Runtime.Loader.dll": {},
            "ref/netcoreapp2.0/System.Runtime.Numerics.dll": {},
            "ref/netcoreapp2.0/System.Runtime.Serialization.Formatters.dll": {},
            "ref/netcoreapp2.0/System.Runtime.Serialization.Json.dll": {},
            "ref/netcoreapp2.0/System.Runtime.Serialization.Primitives.dll": {},
            "ref/netcoreapp2.0/System.Runtime.Serialization.Xml.dll": {},
            "ref/netcoreapp2.0/System.Runtime.Serialization.dll": {},
            "ref/netcoreapp2.0/System.Runtime.dll": {},
            "ref/netcoreapp2.0/System.Security.Claims.dll": {},
            "ref/netcoreapp2.0/System.Security.Cryptography.Algorithms.dll": {},
            "ref/netcoreapp2.0/System.Security.Cryptography.Csp.dll": {},
            "ref/netcoreapp2.0/System.Security.Cryptography.Encoding.dll": {},
            "ref/netcoreapp2.0/System.Security.Cryptography.Primitives.dll": {},
            "ref/netcoreapp2.0/System.Security.Cryptography.X509Certificates.dll": {},
            "ref/netcoreapp2.0/System.Security.Principal.dll": {},
            "ref/netcoreapp2.0/System.Security.SecureString.dll": {},
            "ref/netcoreapp2.0/System.Security.dll": {},
            "ref/netcoreapp2.0/System.ServiceModel.Web.dll": {},
            "ref/netcoreapp2.0/System.ServiceProcess.dll": {},
            "ref/netcoreapp2.0/System.Text.Encoding.Extensions.dll": {},
            "ref/netcoreapp2.0/System.Text.Encoding.dll": {},
            "ref/netcoreapp2.0/System.Text.RegularExpressions.dll": {},
            "ref/netcoreapp2.0/System.Threading.Overlapped.dll": {},
            "ref/netcoreapp2.0/System.Threading.Tasks.Dataflow.dll": {},
            "ref/netcoreapp2.0/System.Threading.Tasks.Extensions.dll": {},
            "ref/netcoreapp2.0/System.Threading.Tasks.Parallel.dll": {},
            "ref/netcoreapp2.0/System.Threading.Tasks.dll": {},
            "ref/netcoreapp2.0/System.Threading.Thread.dll": {},
            "ref/netcoreapp2.0/System.Threading.ThreadPool.dll": {},
            "ref/netcoreapp2.0/System.Threading.Timer.dll": {},
            "ref/netcoreapp2.0/System.Threading.dll": {},
            "ref/netcoreapp2.0/System.Transactions.Local.dll": {},
            "ref/netcoreapp2.0/System.Transactions.dll": {},
            "ref/netcoreapp2.0/System.ValueTuple.dll": {},
            "ref/netcoreapp2.0/System.Web.HttpUtility.dll": {},
            "ref/netcoreapp2.0/System.Web.dll": {},
            "ref/netcoreapp2.0/System.Windows.dll": {},
            "ref/netcoreapp2.0/System.Xml.Linq.dll": {},
            "ref/netcoreapp2.0/System.Xml.ReaderWriter.dll": {},
            "ref/netcoreapp2.0/System.Xml.Serialization.dll": {},
            "ref/netcoreapp2.0/System.Xml.XDocument.dll": {},
            "ref/netcoreapp2.0/System.Xml.XPath.XDocument.dll": {},
            "ref/netcoreapp2.0/System.Xml.XPath.dll": {},
            "ref/netcoreapp2.0/System.Xml.XmlDocument.dll": {},
            "ref/netcoreapp2.0/System.Xml.XmlSerializer.dll": {},
            "ref/netcoreapp2.0/System.Xml.dll": {},
            "ref/netcoreapp2.0/System.dll": {},
            "ref/netcoreapp2.0/WindowsBase.dll": {},
            "ref/netcoreapp2.0/mscorlib.dll": {},
            "ref/netcoreapp2.0/netstandard.dll": {}
          },
          "build": {
            "build/netcoreapp2.0/Microsoft.NETCore.App.props": {},
            "build/netcoreapp2.0/Microsoft.NETCore.App.targets": {}
          }
        },
        "Microsoft.NETCore.DotNetAppHost/2.0.0": {
          "type": "package"
        },
        "Microsoft.NETCore.DotNetHostPolicy/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.DotNetHostResolver": "2.0.0"
          }
        },
        "Microsoft.NETCore.DotNetHostResolver/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.DotNetAppHost": "2.0.0"
          }
        },
        "Microsoft.NETCore.Platforms/2.0.0": {
          "type": "package",
          "compile": {
            "lib/netstandard1.0/_._": {}
          },
          "runtime": {
            "lib/netstandard1.0/_._": {}
          }
        },
        "Microsoft.NETCore.Targets/1.1.0": {
          "type": "package",
          "compile": {
            "lib/netstandard1.0/_._": {}
          },
          "runtime": {
            "lib/netstandard1.0/_._": {}
          }
        },
        "Microsoft.Rest.ClientRuntime/2.3.8": {
          "type": "package",
          "dependencies": {
            "NETStandard.Library": "1.6.1",
            "Newtonsoft.Json": "9.0.1"
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.Rest.ClientRuntime.dll": {}
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.Rest.ClientRuntime.dll": {}
          }
        },
        "Microsoft.Rest.ClientRuntime.Azure/3.3.7": {
          "type": "package",
          "dependencies": {
            "Microsoft.Rest.ClientRuntime": "[2.3.8, 3.0.0)",
            "NETStandard.Library": "1.6.1",
            "Newtonsoft.Json": "9.0.1"
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.Rest.ClientRuntime.Azure.dll": {}
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.Rest.ClientRuntime.Azure.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.BrowserLink/2.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.FileProviders.Physical": "2.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.BrowserLink.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.BrowserLink.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGeneration/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.DependencyInjection": "2.0.0",
            "Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore": "2.0.2"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGeneration.Contracts/2.0.2": {
          "type": "package",
          "dependencies": {
            "Newtonsoft.Json": "10.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Contracts.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Contracts.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGeneration.Core/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.Extensions.DependencyInjection": "2.0.0",
            "Microsoft.VisualStudio.Web.CodeGeneration.Templating": "2.0.2",
            "Newtonsoft.Json": "10.0.1"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Core.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Core.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGeneration.Design/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.VisualStudio.Web.CodeGenerators.Mvc": "2.0.2"
          },
          "compile": {
            "lib/netcoreapp2.0/dotnet-aspnet-codegenerator-design.dll": {}
          },
          "runtime": {
            "lib/netcoreapp2.0/dotnet-aspnet-codegenerator-design.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.VisualStudio.Web.CodeGeneration.Core": "2.0.2"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGeneration.Templating/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.Razor.Extensions": "2.0.1",
            "Microsoft.CodeAnalysis.CSharp": "2.3.1",
            "Microsoft.VisualStudio.Web.CodeGeneration.Utils": "2.0.2"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Templating.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Templating.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGeneration.Utils/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.CodeAnalysis.CSharp.Workspaces": "2.3.1",
            "Microsoft.VisualStudio.Web.CodeGeneration.Contracts": "2.0.2",
            "Newtonsoft.Json": "10.0.1",
            "NuGet.Frameworks": "4.0.0"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Utils.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Utils.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGenerators.Mvc/2.0.2": {
          "type": "package",
          "dependencies": {
            "Microsoft.VisualStudio.Web.CodeGeneration": "2.0.2"
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGenerators.Mvc.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGenerators.Mvc.dll": {}
          }
        },
        "Microsoft.Win32.Primitives/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/_._": {}
          }
        },
        "Microsoft.Win32.Registry/4.4.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "System.Security.AccessControl": "4.4.0",
            "System.Security.Principal.Windows": "4.4.0"
          },
          "compile": {
            "ref/netstandard2.0/Microsoft.Win32.Registry.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Win32.Registry.dll": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netcoreapp2.0/Microsoft.Win32.Registry.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netcoreapp2.0/Microsoft.Win32.Registry.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "NETStandard.Library/2.0.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0"
          },
          "compile": {
            "lib/netstandard1.0/_._": {}
          },
          "runtime": {
            "lib/netstandard1.0/_._": {}
          },
          "build": {
            "build/netstandard2.0/NETStandard.Library.targets": {}
          }
        },
        "Newtonsoft.Json/10.0.1": {
          "type": "package",
          "dependencies": {
            "Microsoft.CSharp": "4.3.0",
            "System.Collections": "4.3.0",
            "System.ComponentModel.TypeConverter": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Dynamic.Runtime": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Linq.Expressions": "4.3.0",
            "System.ObjectModel": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Extensions": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.Numerics": "4.3.0",
            "System.Runtime.Serialization.Formatters": "4.3.0",
            "System.Runtime.Serialization.Primitives": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Text.Encoding.Extensions": "4.3.0",
            "System.Text.RegularExpressions": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0",
            "System.Xml.ReaderWriter": "4.3.0",
            "System.Xml.XDocument": "4.3.0",
            "System.Xml.XmlDocument": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.3/Newtonsoft.Json.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/Newtonsoft.Json.dll": {}
          }
        },
        "Newtonsoft.Json.Bson/1.0.1": {
          "type": "package",
          "dependencies": {
            "NETStandard.Library": "1.6.1",
            "Newtonsoft.Json": "10.0.1"
          },
          "compile": {
            "lib/netstandard1.3/Newtonsoft.Json.Bson.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/Newtonsoft.Json.Bson.dll": {}
          }
        },
        "NuGet.Frameworks/4.0.0": {
          "type": "package",
          "dependencies": {
            "NETStandard.Library": "1.6.0"
          },
          "compile": {
            "lib/netstandard1.3/NuGet.Frameworks.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/NuGet.Frameworks.dll": {}
          }
        },
        "popper.js/1.12.9": {
          "type": "package"
        },
        "Remotion.Linq/2.1.1": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.0.11",
            "System.Diagnostics.Debug": "4.0.11",
            "System.Linq": "4.1.0",
            "System.Linq.Expressions": "4.1.0",
            "System.Linq.Queryable": "4.0.1",
            "System.ObjectModel": "4.0.12",
            "System.Reflection": "4.1.0",
            "System.Reflection.Extensions": "4.0.1",
            "System.Runtime": "4.1.0",
            "System.Runtime.Extensions": "4.1.0",
            "System.Threading": "4.0.11"
          },
          "compile": {
            "lib/netstandard1.0/Remotion.Linq.dll": {}
          },
          "runtime": {
            "lib/netstandard1.0/Remotion.Linq.dll": {}
          }
        },
        "runtime.debian.8-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "type": "package",
          "runtimeTargets": {
            "runtimes/debian.8-x64/native/System.Security.Cryptography.Native.OpenSsl.so": {
              "assetType": "native",
              "rid": "debian.8-x64"
            }
          }
        },
        "runtime.fedora.23-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "type": "package",
          "runtimeTargets": {
            "runtimes/fedora.23-x64/native/System.Security.Cryptography.Native.OpenSsl.so": {
              "assetType": "native",
              "rid": "fedora.23-x64"
            }
          }
        },
        "runtime.fedora.24-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "type": "package",
          "runtimeTargets": {
            "runtimes/fedora.24-x64/native/System.Security.Cryptography.Native.OpenSsl.so": {
              "assetType": "native",
              "rid": "fedora.24-x64"
            }
          }
        },
        "runtime.native.System/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0"
          },
          "compile": {
            "lib/netstandard1.0/_._": {}
          },
          "runtime": {
            "lib/netstandard1.0/_._": {}
          }
        },
        "runtime.native.System.Data.SqlClient.sni/4.4.0": {
          "type": "package",
          "dependencies": {
            "runtime.win-arm64.runtime.native.System.Data.SqlClient.sni": "4.4.0",
            "runtime.win-x64.runtime.native.System.Data.SqlClient.sni": "4.4.0",
            "runtime.win-x86.runtime.native.System.Data.SqlClient.sni": "4.4.0"
          }
        },
        "runtime.native.System.IO.Compression/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0"
          },
          "compile": {
            "lib/netstandard1.0/_._": {}
          },
          "runtime": {
            "lib/netstandard1.0/_._": {}
          }
        },
        "runtime.native.System.Net.Http/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0"
          },
          "compile": {
            "lib/netstandard1.0/_._": {}
          },
          "runtime": {
            "lib/netstandard1.0/_._": {}
          }
        },
        "runtime.native.System.Net.Security/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0"
          },
          "compile": {
            "lib/netstandard1.0/_._": {}
          },
          "runtime": {
            "lib/netstandard1.0/_._": {}
          }
        },
        "runtime.native.System.Security.Cryptography.Apple/4.3.0": {
          "type": "package",
          "dependencies": {
            "runtime.osx.10.10-x64.runtime.native.System.Security.Cryptography.Apple": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.0/_._": {}
          },
          "runtime": {
            "lib/netstandard1.0/_._": {}
          }
        },
        "runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "type": "package",
          "dependencies": {
            "runtime.debian.8-x64.runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0",
            "runtime.fedora.23-x64.runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0",
            "runtime.fedora.24-x64.runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0",
            "runtime.opensuse.13.2-x64.runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0",
            "runtime.opensuse.42.1-x64.runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0",
            "runtime.osx.10.10-x64.runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0",
            "runtime.rhel.7-x64.runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0",
            "runtime.ubuntu.14.04-x64.runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0",
            "runtime.ubuntu.16.04-x64.runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0",
            "runtime.ubuntu.16.10-x64.runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.0/_._": {}
          },
          "runtime": {
            "lib/netstandard1.0/_._": {}
          }
        },
        "runtime.opensuse.13.2-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "type": "package",
          "runtimeTargets": {
            "runtimes/opensuse.13.2-x64/native/System.Security.Cryptography.Native.OpenSsl.so": {
              "assetType": "native",
              "rid": "opensuse.13.2-x64"
            }
          }
        },
        "runtime.opensuse.42.1-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "type": "package",
          "runtimeTargets": {
            "runtimes/opensuse.42.1-x64/native/System.Security.Cryptography.Native.OpenSsl.so": {
              "assetType": "native",
              "rid": "opensuse.42.1-x64"
            }
          }
        },
        "runtime.osx.10.10-x64.runtime.native.System.Security.Cryptography.Apple/4.3.0": {
          "type": "package",
          "runtimeTargets": {
            "runtimes/osx.10.10-x64/native/System.Security.Cryptography.Native.Apple.dylib": {
              "assetType": "native",
              "rid": "osx.10.10-x64"
            }
          }
        },
        "runtime.osx.10.10-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "type": "package",
          "runtimeTargets": {
            "runtimes/osx.10.10-x64/native/System.Security.Cryptography.Native.OpenSsl.dylib": {
              "assetType": "native",
              "rid": "osx.10.10-x64"
            }
          }
        },
        "runtime.rhel.7-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "type": "package",
          "runtimeTargets": {
            "runtimes/rhel.7-x64/native/System.Security.Cryptography.Native.OpenSsl.so": {
              "assetType": "native",
              "rid": "rhel.7-x64"
            }
          }
        },
        "runtime.ubuntu.14.04-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "type": "package",
          "runtimeTargets": {
            "runtimes/ubuntu.14.04-x64/native/System.Security.Cryptography.Native.OpenSsl.so": {
              "assetType": "native",
              "rid": "ubuntu.14.04-x64"
            }
          }
        },
        "runtime.ubuntu.16.04-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "type": "package",
          "runtimeTargets": {
            "runtimes/ubuntu.16.04-x64/native/System.Security.Cryptography.Native.OpenSsl.so": {
              "assetType": "native",
              "rid": "ubuntu.16.04-x64"
            }
          }
        },
        "runtime.ubuntu.16.10-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "type": "package",
          "runtimeTargets": {
            "runtimes/ubuntu.16.10-x64/native/System.Security.Cryptography.Native.OpenSsl.so": {
              "assetType": "native",
              "rid": "ubuntu.16.10-x64"
            }
          }
        },
        "runtime.win-arm64.runtime.native.System.Data.SqlClient.sni/4.4.0": {
          "type": "package",
          "runtimeTargets": {
            "runtimes/win-arm64/native/sni.dll": {
              "assetType": "native",
              "rid": "win-arm64"
            }
          }
        },
        "runtime.win-x64.runtime.native.System.Data.SqlClient.sni/4.4.0": {
          "type": "package",
          "runtimeTargets": {
            "runtimes/win-x64/native/sni.dll": {
              "assetType": "native",
              "rid": "win-x64"
            }
          }
        },
        "runtime.win-x86.runtime.native.System.Data.SqlClient.sni/4.4.0": {
          "type": "package",
          "runtimeTargets": {
            "runtimes/win-x86/native/sni.dll": {
              "assetType": "native",
              "rid": "win-x86"
            }
          }
        },
        "SQLitePCLRaw.bundle_green/1.1.7": {
          "type": "package",
          "dependencies": {
            "SQLitePCLRaw.core": "1.1.7",
            "SQLitePCLRaw.lib.e_sqlite3.linux": "1.1.7",
            "SQLitePCLRaw.lib.e_sqlite3.osx": "1.1.7",
            "SQLitePCLRaw.lib.e_sqlite3.v110_xp": "1.1.7",
            "SQLitePCLRaw.provider.e_sqlite3.netstandard11": "1.1.7"
          },
          "compile": {
            "lib/netcoreapp/SQLitePCLRaw.batteries_green.dll": {},
            "lib/netcoreapp/SQLitePCLRaw.batteries_v2.dll": {}
          },
          "runtime": {
            "lib/netcoreapp/SQLitePCLRaw.batteries_green.dll": {},
            "lib/netcoreapp/SQLitePCLRaw.batteries_v2.dll": {}
          }
        },
        "SQLitePCLRaw.core/1.1.7": {
          "type": "package",
          "dependencies": {
            "NETStandard.Library": "1.6.0"
          },
          "compile": {
            "lib/netstandard1.1/SQLitePCLRaw.core.dll": {}
          },
          "runtime": {
            "lib/netstandard1.1/SQLitePCLRaw.core.dll": {}
          }
        },
        "SQLitePCLRaw.lib.e_sqlite3.linux/1.1.7": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/_._": {}
          },
          "runtime": {
            "lib/netstandard2.0/_._": {}
          },
          "runtimeTargets": {
            "runtimes/linux-x64/native/libe_sqlite3.so": {
              "assetType": "native",
              "rid": "linux-x64"
            },
            "runtimes/linux-x86/native/libe_sqlite3.so": {
              "assetType": "native",
              "rid": "linux-x86"
            }
          }
        },
        "SQLitePCLRaw.lib.e_sqlite3.osx/1.1.7": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/_._": {}
          },
          "runtime": {
            "lib/netstandard2.0/_._": {}
          },
          "runtimeTargets": {
            "runtimes/osx-x64/native/libe_sqlite3.dylib": {
              "assetType": "native",
              "rid": "osx-x64"
            }
          }
        },
        "SQLitePCLRaw.lib.e_sqlite3.v110_xp/1.1.7": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/_._": {}
          },
          "runtime": {
            "lib/netstandard2.0/_._": {}
          },
          "runtimeTargets": {
            "runtimes/win7-x64/native/e_sqlite3.dll": {
              "assetType": "native",
              "rid": "win7-x64"
            },
            "runtimes/win7-x86/native/e_sqlite3.dll": {
              "assetType": "native",
              "rid": "win7-x86"
            }
          }
        },
        "SQLitePCLRaw.provider.e_sqlite3.netstandard11/1.1.7": {
          "type": "package",
          "dependencies": {
            "NETStandard.Library": "1.6.0",
            "SQLitePCLRaw.core": "1.1.7"
          },
          "compile": {
            "lib/netstandard1.1/SQLitePCLRaw.provider.e_sqlite3.dll": {}
          },
          "runtime": {
            "lib/netstandard1.1/SQLitePCLRaw.provider.e_sqlite3.dll": {}
          }
        },
        "StackExchange.Redis.StrongName/1.2.4": {
          "type": "package",
          "dependencies": {
            "NETStandard.Library": "1.6.1",
            "System.Collections": "4.3.0",
            "System.Collections.Concurrent": "4.3.0",
            "System.Collections.NonGeneric": "4.3.0",
            "System.Diagnostics.Tools": "4.3.0",
            "System.IO.Compression": "4.3.0",
            "System.IO.FileSystem": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Net.NameResolution": "4.3.0",
            "System.Net.Security": "4.3.0",
            "System.Net.Sockets": "4.3.0",
            "System.Reflection.Emit": "4.3.0",
            "System.Reflection.Emit.Lightweight": "4.3.0",
            "System.Reflection.TypeExtensions": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.InteropServices.RuntimeInformation": "4.3.0",
            "System.Security.Cryptography.Algorithms": "4.3.0",
            "System.Security.Cryptography.X509Certificates": "4.3.0",
            "System.Text.RegularExpressions": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Thread": "4.3.0",
            "System.Threading.ThreadPool": "4.3.0",
            "System.Threading.Timer": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.5/StackExchange.Redis.StrongName.dll": {}
          },
          "runtime": {
            "lib/netstandard1.5/StackExchange.Redis.StrongName.dll": {}
          }
        },
        "System.AppContext/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.6/System.AppContext.dll": {}
          },
          "runtime": {
            "lib/netstandard1.6/System.AppContext.dll": {}
          }
        },
        "System.Buffers/4.4.0": {
          "type": "package",
          "compile": {
            "ref/netcoreapp2.0/_._": {}
          },
          "runtime": {
            "lib/netcoreapp2.0/_._": {}
          }
        },
        "System.Collections/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Collections.dll": {}
          }
        },
        "System.Collections.Concurrent/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Diagnostics.Tracing": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Collections.Concurrent.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Collections.Concurrent.dll": {}
          }
        },
        "System.Collections.Immutable/1.4.0": {
          "type": "package",
          "compile": {
            "ref/netcoreapp2.0/_._": {}
          },
          "runtime": {
            "lib/netcoreapp2.0/_._": {}
          }
        },
        "System.Collections.NonGeneric/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Diagnostics.Debug": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Threading": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Collections.NonGeneric.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Collections.NonGeneric.dll": {}
          }
        },
        "System.Collections.Specialized/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections.NonGeneric": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Globalization.Extensions": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Threading": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Collections.Specialized.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Collections.Specialized.dll": {}
          }
        },
        "System.ComponentModel/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.0/System.ComponentModel.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.ComponentModel.dll": {}
          }
        },
        "System.ComponentModel.Annotations/4.4.0": {
          "type": "package",
          "compile": {
            "ref/netcoreapp2.0/_._": {}
          },
          "runtime": {
            "lib/netcoreapp2.0/_._": {}
          }
        },
        "System.ComponentModel.Primitives/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.ComponentModel": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.0/System.ComponentModel.Primitives.dll": {}
          },
          "runtime": {
            "lib/netstandard1.0/System.ComponentModel.Primitives.dll": {}
          }
        },
        "System.ComponentModel.TypeConverter/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Collections.NonGeneric": "4.3.0",
            "System.Collections.Specialized": "4.3.0",
            "System.ComponentModel": "4.3.0",
            "System.ComponentModel.Primitives": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Extensions": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Reflection.TypeExtensions": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Threading": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.5/System.ComponentModel.TypeConverter.dll": {}
          },
          "runtime": {
            "lib/netstandard1.5/System.ComponentModel.TypeConverter.dll": {}
          }
        },
        "System.Composition/1.0.31": {
          "type": "package",
          "dependencies": {
            "System.Composition.AttributedModel": "1.0.31",
            "System.Composition.Convention": "1.0.31",
            "System.Composition.Hosting": "1.0.31",
            "System.Composition.Runtime": "1.0.31",
            "System.Composition.TypedParts": "1.0.31"
          }
        },
        "System.Composition.AttributedModel/1.0.31": {
          "type": "package",
          "dependencies": {
            "System.Reflection": "4.3.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.0/System.Composition.AttributedModel.dll": {}
          },
          "runtime": {
            "lib/netstandard1.0/System.Composition.AttributedModel.dll": {}
          }
        },
        "System.Composition.Convention/1.0.31": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Composition.AttributedModel": "1.0.31",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Diagnostics.Tools": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Linq.Expressions": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Extensions": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Threading": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.0/System.Composition.Convention.dll": {}
          },
          "runtime": {
            "lib/netstandard1.0/System.Composition.Convention.dll": {}
          }
        },
        "System.Composition.Hosting/1.0.31": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Composition.Runtime": "1.0.31",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Diagnostics.Tools": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Linq.Expressions": "4.3.0",
            "System.ObjectModel": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Extensions": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Threading": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.0/System.Composition.Hosting.dll": {}
          },
          "runtime": {
            "lib/netstandard1.0/System.Composition.Hosting.dll": {}
          }
        },
        "System.Composition.Runtime/1.0.31": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Diagnostics.Tools": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.0/System.Composition.Runtime.dll": {}
          },
          "runtime": {
            "lib/netstandard1.0/System.Composition.Runtime.dll": {}
          }
        },
        "System.Composition.TypedParts/1.0.31": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Composition.AttributedModel": "1.0.31",
            "System.Composition.Hosting": "1.0.31",
            "System.Composition.Runtime": "1.0.31",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Diagnostics.Tools": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Linq.Expressions": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Extensions": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0"
          },
          "compile": {
            "lib/netstandard1.0/System.Composition.TypedParts.dll": {}
          },
          "runtime": {
            "lib/netstandard1.0/System.Composition.TypedParts.dll": {}
          }
        },
        "System.Console/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.IO": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Text.Encoding": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Console.dll": {}
          }
        },
        "System.Data.SqlClient/4.4.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.Win32.Registry": "4.4.0",
            "System.Security.Principal.Windows": "4.4.0",
            "System.Text.Encoding.CodePages": "4.4.0",
            "runtime.native.System.Data.SqlClient.sni": "4.4.0"
          },
          "compile": {
            "ref/netstandard2.0/System.Data.SqlClient.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/System.Data.SqlClient.dll": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netstandard2.0/System.Data.SqlClient.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netstandard2.0/System.Data.SqlClient.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.Diagnostics.Contracts/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.0/System.Diagnostics.Contracts.dll": {}
          },
          "runtime": {
            "lib/netstandard1.0/System.Diagnostics.Contracts.dll": {}
          }
        },
        "System.Diagnostics.Debug/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Diagnostics.Debug.dll": {}
          }
        },
        "System.Diagnostics.DiagnosticSource/4.4.1": {
          "type": "package",
          "compile": {
            "ref/netcoreapp2.0/_._": {}
          },
          "runtime": {
            "lib/netcoreapp2.0/_._": {}
          }
        },
        "System.Diagnostics.FileVersionInfo/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.IO.FileSystem": "4.3.0",
            "System.IO.FileSystem.Primitives": "4.3.0",
            "System.Reflection.Metadata": "1.4.1",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/_._": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netstandard1.3/System.Diagnostics.FileVersionInfo.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netstandard1.3/System.Diagnostics.FileVersionInfo.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.Diagnostics.StackTrace/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.IO.FileSystem": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Metadata": "1.4.1",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Diagnostics.StackTrace.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Diagnostics.StackTrace.dll": {}
          }
        },
        "System.Diagnostics.Tools/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.0/System.Diagnostics.Tools.dll": {}
          }
        },
        "System.Diagnostics.Tracing/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.5/System.Diagnostics.Tracing.dll": {}
          }
        },
        "System.Dynamic.Runtime/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Linq.Expressions": "4.3.0",
            "System.ObjectModel": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Emit": "4.3.0",
            "System.Reflection.Emit.ILGeneration": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Reflection.TypeExtensions": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Threading": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Dynamic.Runtime.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Dynamic.Runtime.dll": {}
          }
        },
        "System.Globalization/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Globalization.dll": {}
          }
        },
        "System.Globalization.Calendars/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Globalization": "4.3.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/_._": {}
          }
        },
        "System.Globalization.Extensions/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "System.Globalization": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/_._": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netstandard1.3/System.Globalization.Extensions.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netstandard1.3/System.Globalization.Extensions.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.IdentityModel.Tokens.Jwt/5.1.4": {
          "type": "package",
          "dependencies": {
            "Microsoft.IdentityModel.Tokens": "5.1.4"
          },
          "compile": {
            "lib/netstandard1.4/System.IdentityModel.Tokens.Jwt.dll": {}
          },
          "runtime": {
            "lib/netstandard1.4/System.IdentityModel.Tokens.Jwt.dll": {}
          }
        },
        "System.Interactive.Async/3.1.1": {
          "type": "package",
          "dependencies": {
            "NETStandard.Library": "1.6.0"
          },
          "compile": {
            "lib/netstandard1.3/System.Interactive.Async.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Interactive.Async.dll": {}
          }
        },
        "System.IO/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Threading.Tasks": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.5/System.IO.dll": {}
          }
        },
        "System.IO.Compression/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "System.Buffers": "4.3.0",
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.IO": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.Handles": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0",
            "runtime.native.System": "4.3.0",
            "runtime.native.System.IO.Compression": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.IO.Compression.dll": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netstandard1.3/System.IO.Compression.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netstandard1.3/System.IO.Compression.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.IO.FileSystem/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.IO": "4.3.0",
            "System.IO.FileSystem.Primitives": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Handles": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Threading.Tasks": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.IO.FileSystem.dll": {}
          }
        },
        "System.IO.FileSystem.Primitives/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.IO.FileSystem.Primitives.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.IO.FileSystem.Primitives.dll": {}
          }
        },
        "System.Linq/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.6/System.Linq.dll": {}
          },
          "runtime": {
            "lib/netstandard1.6/System.Linq.dll": {}
          }
        },
        "System.Linq.Expressions/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.Linq": "4.3.0",
            "System.ObjectModel": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Emit": "4.3.0",
            "System.Reflection.Emit.ILGeneration": "4.3.0",
            "System.Reflection.Emit.Lightweight": "4.3.0",
            "System.Reflection.Extensions": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Reflection.TypeExtensions": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Threading": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.6/System.Linq.Expressions.dll": {}
          },
          "runtime": {
            "lib/netstandard1.6/System.Linq.Expressions.dll": {}
          }
        },
        "System.Linq.Parallel/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Collections.Concurrent": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Diagnostics.Tracing": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.1/System.Linq.Parallel.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Linq.Parallel.dll": {}
          }
        },
        "System.Linq.Queryable/4.0.1": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.0.11",
            "System.Diagnostics.Debug": "4.0.11",
            "System.Linq": "4.1.0",
            "System.Linq.Expressions": "4.1.0",
            "System.Reflection": "4.1.0",
            "System.Reflection.Extensions": "4.0.1",
            "System.Resources.ResourceManager": "4.0.1",
            "System.Runtime": "4.1.0"
          },
          "compile": {
            "ref/netstandard1.0/System.Linq.Queryable.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Linq.Queryable.dll": {}
          }
        },
        "System.Net.Http/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Diagnostics.DiagnosticSource": "4.3.0",
            "System.Diagnostics.Tracing": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Globalization.Extensions": "4.3.0",
            "System.IO": "4.3.0",
            "System.IO.FileSystem": "4.3.0",
            "System.Net.Primitives": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.Handles": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Security.Cryptography.Algorithms": "4.3.0",
            "System.Security.Cryptography.Encoding": "4.3.0",
            "System.Security.Cryptography.OpenSsl": "4.3.0",
            "System.Security.Cryptography.Primitives": "4.3.0",
            "System.Security.Cryptography.X509Certificates": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0",
            "runtime.native.System": "4.3.0",
            "runtime.native.System.Net.Http": "4.3.0",
            "runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Net.Http.dll": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netstandard1.6/System.Net.Http.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netstandard1.3/System.Net.Http.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.Net.NameResolution/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "System.Collections": "4.3.0",
            "System.Diagnostics.Tracing": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Net.Primitives": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.Handles": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Security.Principal.Windows": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0",
            "runtime.native.System": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Net.NameResolution.dll": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netstandard1.3/System.Net.NameResolution.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netstandard1.3/System.Net.NameResolution.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.Net.Primitives/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Handles": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Net.Primitives.dll": {}
          }
        },
        "System.Net.Security/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.Win32.Primitives": "4.3.0",
            "System.Collections": "4.3.0",
            "System.Collections.Concurrent": "4.3.0",
            "System.Diagnostics.Tracing": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Globalization.Extensions": "4.3.0",
            "System.IO": "4.3.0",
            "System.Net.Primitives": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.Handles": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Security.Claims": "4.3.0",
            "System.Security.Cryptography.Algorithms": "4.3.0",
            "System.Security.Cryptography.Encoding": "4.3.0",
            "System.Security.Cryptography.OpenSsl": "4.3.0",
            "System.Security.Cryptography.Primitives": "4.3.0",
            "System.Security.Cryptography.X509Certificates": "4.3.0",
            "System.Security.Principal": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0",
            "System.Threading.ThreadPool": "4.3.0",
            "runtime.native.System": "4.3.0",
            "runtime.native.System.Net.Security": "4.3.0",
            "runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Net.Security.dll": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netstandard1.6/System.Net.Security.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netstandard1.3/System.Net.Security.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.Net.Sockets/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.IO": "4.3.0",
            "System.Net.Primitives": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Threading.Tasks": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Net.Sockets.dll": {}
          }
        },
        "System.Numerics.Vectors/4.4.0": {
          "type": "package",
          "compile": {
            "ref/netcoreapp2.0/_._": {}
          },
          "runtime": {
            "lib/netcoreapp2.0/_._": {}
          }
        },
        "System.ObjectModel/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Threading": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.ObjectModel.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.ObjectModel.dll": {}
          }
        },
        "System.Private.DataContractSerialization/4.1.1": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.0.11",
            "System.Collections.Concurrent": "4.0.12",
            "System.Diagnostics.Debug": "4.0.11",
            "System.Globalization": "4.0.11",
            "System.IO": "4.1.0",
            "System.Linq": "4.1.0",
            "System.Reflection": "4.1.0",
            "System.Reflection.Emit.ILGeneration": "4.0.1",
            "System.Reflection.Emit.Lightweight": "4.0.1",
            "System.Reflection.Extensions": "4.0.1",
            "System.Reflection.Primitives": "4.0.1",
            "System.Reflection.TypeExtensions": "4.1.0",
            "System.Resources.ResourceManager": "4.0.1",
            "System.Runtime": "4.1.0",
            "System.Runtime.Extensions": "4.1.0",
            "System.Runtime.Serialization.Primitives": "4.1.1",
            "System.Text.Encoding": "4.0.11",
            "System.Text.Encoding.Extensions": "4.0.11",
            "System.Text.RegularExpressions": "4.1.0",
            "System.Threading": "4.0.11",
            "System.Threading.Tasks": "4.0.11",
            "System.Xml.ReaderWriter": "4.0.11",
            "System.Xml.XmlDocument": "4.0.1",
            "System.Xml.XmlSerializer": "4.0.11"
          },
          "compile": {
            "ref/netstandard/_._": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Private.DataContractSerialization.dll": {}
          }
        },
        "System.Reflection/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.IO": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.5/System.Reflection.dll": {}
          }
        },
        "System.Reflection.Emit/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.IO": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Emit.ILGeneration": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.1/System.Reflection.Emit.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Reflection.Emit.dll": {}
          }
        },
        "System.Reflection.Emit.ILGeneration/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Reflection": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.0/System.Reflection.Emit.ILGeneration.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Reflection.Emit.ILGeneration.dll": {}
          }
        },
        "System.Reflection.Emit.Lightweight/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Reflection": "4.3.0",
            "System.Reflection.Emit.ILGeneration": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.0/System.Reflection.Emit.Lightweight.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Reflection.Emit.Lightweight.dll": {}
          }
        },
        "System.Reflection.Extensions/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Reflection": "4.3.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.0/System.Reflection.Extensions.dll": {}
          }
        },
        "System.Reflection.Metadata/1.5.0": {
          "type": "package",
          "compile": {
            "ref/netcoreapp2.0/_._": {}
          },
          "runtime": {
            "lib/netcoreapp2.0/_._": {}
          }
        },
        "System.Reflection.Primitives/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.0/System.Reflection.Primitives.dll": {}
          }
        },
        "System.Reflection.TypeExtensions/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Reflection": "4.3.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.5/System.Reflection.TypeExtensions.dll": {}
          },
          "runtime": {
            "lib/netstandard1.5/System.Reflection.TypeExtensions.dll": {}
          }
        },
        "System.Resources.ResourceManager/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Globalization": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.0/System.Resources.ResourceManager.dll": {}
          }
        },
        "System.Runtime/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0"
          },
          "compile": {
            "ref/netstandard1.5/System.Runtime.dll": {}
          }
        },
        "System.Runtime.CompilerServices.Unsafe/4.4.0": {
          "type": "package",
          "compile": {
            "ref/netstandard2.0/System.Runtime.CompilerServices.Unsafe.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/System.Runtime.CompilerServices.Unsafe.dll": {}
          }
        },
        "System.Runtime.Extensions/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.5/System.Runtime.Extensions.dll": {}
          }
        },
        "System.Runtime.Handles/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Runtime.Handles.dll": {}
          }
        },
        "System.Runtime.InteropServices/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Handles": "4.3.0"
          },
          "compile": {
            "ref/netcoreapp1.1/System.Runtime.InteropServices.dll": {}
          }
        },
        "System.Runtime.InteropServices.RuntimeInformation/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Reflection": "4.3.0",
            "System.Reflection.Extensions": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Threading": "4.3.0",
            "runtime.native.System": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.1/System.Runtime.InteropServices.RuntimeInformation.dll": {}
          },
          "runtime": {
            "lib/netstandard1.1/System.Runtime.InteropServices.RuntimeInformation.dll": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netstandard1.1/System.Runtime.InteropServices.RuntimeInformation.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netstandard1.1/System.Runtime.InteropServices.RuntimeInformation.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.Runtime.Numerics/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Globalization": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.1/System.Runtime.Numerics.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Runtime.Numerics.dll": {}
          }
        },
        "System.Runtime.Serialization.Formatters/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Serialization.Primitives": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Runtime.Serialization.Formatters.dll": {}
          },
          "runtime": {
            "lib/netstandard1.4/System.Runtime.Serialization.Formatters.dll": {}
          }
        },
        "System.Runtime.Serialization.Json/4.0.2": {
          "type": "package",
          "dependencies": {
            "System.IO": "4.1.0",
            "System.Private.DataContractSerialization": "4.1.1",
            "System.Runtime": "4.1.0"
          },
          "compile": {
            "ref/netstandard1.0/System.Runtime.Serialization.Json.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Runtime.Serialization.Json.dll": {}
          }
        },
        "System.Runtime.Serialization.Primitives/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Runtime.Serialization.Primitives.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Runtime.Serialization.Primitives.dll": {}
          }
        },
        "System.Security.AccessControl/4.4.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "System.Security.Principal.Windows": "4.4.0"
          },
          "compile": {
            "ref/netstandard2.0/System.Security.AccessControl.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/System.Security.AccessControl.dll": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netcoreapp2.0/System.Security.AccessControl.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netcoreapp2.0/System.Security.AccessControl.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.Security.Claims/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Security.Principal": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Security.Claims.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Security.Claims.dll": {}
          }
        },
        "System.Security.Cryptography.Algorithms/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "System.Collections": "4.3.0",
            "System.IO": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.Handles": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Runtime.Numerics": "4.3.0",
            "System.Security.Cryptography.Encoding": "4.3.0",
            "System.Security.Cryptography.Primitives": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "runtime.native.System.Security.Cryptography.Apple": "4.3.0",
            "runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.6/System.Security.Cryptography.Algorithms.dll": {}
          },
          "runtimeTargets": {
            "runtimes/osx/lib/netstandard1.6/System.Security.Cryptography.Algorithms.dll": {
              "assetType": "runtime",
              "rid": "osx"
            },
            "runtimes/unix/lib/netstandard1.6/System.Security.Cryptography.Algorithms.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netstandard1.6/System.Security.Cryptography.Algorithms.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.Security.Cryptography.Cng/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "System.IO": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.Handles": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Security.Cryptography.Algorithms": "4.3.0",
            "System.Security.Cryptography.Encoding": "4.3.0",
            "System.Security.Cryptography.Primitives": "4.3.0",
            "System.Text.Encoding": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.6/_._": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netstandard1.6/System.Security.Cryptography.Cng.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netstandard1.6/System.Security.Cryptography.Cng.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.Security.Cryptography.Csp/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "System.IO": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.Handles": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Security.Cryptography.Algorithms": "4.3.0",
            "System.Security.Cryptography.Encoding": "4.3.0",
            "System.Security.Cryptography.Primitives": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Threading": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/_._": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netstandard1.3/System.Security.Cryptography.Csp.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netstandard1.3/System.Security.Cryptography.Csp.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.Security.Cryptography.Encoding/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "System.Collections": "4.3.0",
            "System.Collections.Concurrent": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.Handles": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Security.Cryptography.Primitives": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Security.Cryptography.Encoding.dll": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netstandard1.3/System.Security.Cryptography.Encoding.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netstandard1.3/System.Security.Cryptography.Encoding.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.Security.Cryptography.OpenSsl/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.IO": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.Handles": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Runtime.Numerics": "4.3.0",
            "System.Security.Cryptography.Algorithms": "4.3.0",
            "System.Security.Cryptography.Encoding": "4.3.0",
            "System.Security.Cryptography.Primitives": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.6/_._": {}
          },
          "runtime": {
            "lib/netstandard1.6/System.Security.Cryptography.OpenSsl.dll": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netstandard1.6/System.Security.Cryptography.OpenSsl.dll": {
              "assetType": "runtime",
              "rid": "unix"
            }
          }
        },
        "System.Security.Cryptography.Primitives/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Diagnostics.Debug": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Security.Cryptography.Primitives.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Security.Cryptography.Primitives.dll": {}
          }
        },
        "System.Security.Cryptography.X509Certificates/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Globalization.Calendars": "4.3.0",
            "System.IO": "4.3.0",
            "System.IO.FileSystem": "4.3.0",
            "System.IO.FileSystem.Primitives": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.Handles": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Runtime.Numerics": "4.3.0",
            "System.Security.Cryptography.Algorithms": "4.3.0",
            "System.Security.Cryptography.Cng": "4.3.0",
            "System.Security.Cryptography.Csp": "4.3.0",
            "System.Security.Cryptography.Encoding": "4.3.0",
            "System.Security.Cryptography.OpenSsl": "4.3.0",
            "System.Security.Cryptography.Primitives": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Threading": "4.3.0",
            "runtime.native.System": "4.3.0",
            "runtime.native.System.Net.Http": "4.3.0",
            "runtime.native.System.Security.Cryptography.OpenSsl": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.4/System.Security.Cryptography.X509Certificates.dll": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netstandard1.6/System.Security.Cryptography.X509Certificates.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netstandard1.6/System.Security.Cryptography.X509Certificates.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.Security.Cryptography.Xml/4.4.0": {
          "type": "package",
          "compile": {
            "ref/netstandard2.0/System.Security.Cryptography.Xml.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/System.Security.Cryptography.Xml.dll": {}
          }
        },
        "System.Security.Principal/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.0/System.Security.Principal.dll": {}
          },
          "runtime": {
            "lib/netstandard1.0/System.Security.Principal.dll": {}
          }
        },
        "System.Security.Principal.Windows/4.4.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0"
          },
          "compile": {
            "ref/netstandard2.0/System.Security.Principal.Windows.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/System.Security.Principal.Windows.dll": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netcoreapp2.0/System.Security.Principal.Windows.dll": {
              "assetType": "runtime",
              "rid": "unix"
            },
            "runtimes/win/lib/netcoreapp2.0/System.Security.Principal.Windows.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.Spatial/5.8.2": {
          "type": "package",
          "compile": {
            "lib/netstandard1.1/System.Spatial.dll": {}
          },
          "runtime": {
            "lib/netstandard1.1/System.Spatial.dll": {}
          },
          "resource": {
            "lib/netstandard1.1/de/System.Spatial.resources.dll": {
              "locale": "de"
            },
            "lib/netstandard1.1/es/System.Spatial.resources.dll": {
              "locale": "es"
            },
            "lib/netstandard1.1/fr/System.Spatial.resources.dll": {
              "locale": "fr"
            },
            "lib/netstandard1.1/it/System.Spatial.resources.dll": {
              "locale": "it"
            },
            "lib/netstandard1.1/ja/System.Spatial.resources.dll": {
              "locale": "ja"
            },
            "lib/netstandard1.1/ko/System.Spatial.resources.dll": {
              "locale": "ko"
            },
            "lib/netstandard1.1/ru/System.Spatial.resources.dll": {
              "locale": "ru"
            },
            "lib/netstandard1.1/zh-Hans/System.Spatial.resources.dll": {
              "locale": "zh-Hans"
            },
            "lib/netstandard1.1/zh-Hant/System.Spatial.resources.dll": {
              "locale": "zh-Hant"
            }
          }
        },
        "System.Text.Encoding/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Text.Encoding.dll": {}
          }
        },
        "System.Text.Encoding.CodePages/4.4.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0"
          },
          "compile": {
            "ref/netstandard2.0/_._": {}
          },
          "runtime": {
            "lib/netstandard2.0/System.Text.Encoding.CodePages.dll": {}
          },
          "runtimeTargets": {
            "runtimes/win/lib/netcoreapp2.0/System.Text.Encoding.CodePages.dll": {
              "assetType": "runtime",
              "rid": "win"
            }
          }
        },
        "System.Text.Encoding.Extensions/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0",
            "System.Text.Encoding": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Text.Encoding.Extensions.dll": {}
          }
        },
        "System.Text.Encodings.Web/4.4.0": {
          "type": "package",
          "compile": {
            "lib/netstandard2.0/System.Text.Encodings.Web.dll": {}
          },
          "runtime": {
            "lib/netstandard2.0/System.Text.Encodings.Web.dll": {}
          }
        },
        "System.Text.RegularExpressions/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netcoreapp1.1/System.Text.RegularExpressions.dll": {}
          },
          "runtime": {
            "lib/netstandard1.6/System.Text.RegularExpressions.dll": {}
          }
        },
        "System.Threading/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Runtime": "4.3.0",
            "System.Threading.Tasks": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Threading.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Threading.dll": {}
          }
        },
        "System.Threading.Tasks/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Threading.Tasks.dll": {}
          }
        },
        "System.Threading.Tasks.Extensions/4.4.0": {
          "type": "package",
          "compile": {
            "ref/netcoreapp2.0/_._": {}
          },
          "runtime": {
            "lib/netcoreapp2.0/_._": {}
          }
        },
        "System.Threading.Tasks.Parallel/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections.Concurrent": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Diagnostics.Tracing": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.1/System.Threading.Tasks.Parallel.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Threading.Tasks.Parallel.dll": {}
          }
        },
        "System.Threading.Thread/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Threading.Thread.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Threading.Thread.dll": {}
          }
        },
        "System.Threading.ThreadPool/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Runtime": "4.3.0",
            "System.Runtime.Handles": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Threading.ThreadPool.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Threading.ThreadPool.dll": {}
          }
        },
        "System.Threading.Timer/4.3.0": {
          "type": "package",
          "dependencies": {
            "Microsoft.NETCore.Platforms": "1.1.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.2/System.Threading.Timer.dll": {}
          }
        },
        "System.ValueTuple/4.4.0": {
          "type": "package",
          "compile": {
            "ref/netcoreapp2.0/_._": {}
          },
          "runtime": {
            "lib/netcoreapp2.0/_._": {}
          }
        },
        "System.Xml.ReaderWriter/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.IO.FileSystem": "4.3.0",
            "System.IO.FileSystem.Primitives": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Text.Encoding.Extensions": "4.3.0",
            "System.Text.RegularExpressions": "4.3.0",
            "System.Threading.Tasks": "4.3.0",
            "System.Threading.Tasks.Extensions": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Xml.ReaderWriter.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Xml.ReaderWriter.dll": {}
          }
        },
        "System.Xml.XDocument/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Diagnostics.Tools": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Xml.ReaderWriter": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Xml.XDocument.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Xml.XDocument.dll": {}
          }
        },
        "System.Xml.XmlDocument/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Xml.ReaderWriter": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/System.Xml.XmlDocument.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Xml.XmlDocument.dll": {}
          }
        },
        "System.Xml.XmlSerializer/4.0.11": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.0.11",
            "System.Globalization": "4.0.11",
            "System.IO": "4.1.0",
            "System.Linq": "4.1.0",
            "System.Reflection": "4.1.0",
            "System.Reflection.Emit": "4.0.1",
            "System.Reflection.Emit.ILGeneration": "4.0.1",
            "System.Reflection.Extensions": "4.0.1",
            "System.Reflection.Primitives": "4.0.1",
            "System.Reflection.TypeExtensions": "4.1.0",
            "System.Resources.ResourceManager": "4.0.1",
            "System.Runtime": "4.1.0",
            "System.Runtime.Extensions": "4.1.0",
            "System.Text.RegularExpressions": "4.1.0",
            "System.Threading": "4.0.11",
            "System.Xml.ReaderWriter": "4.0.11",
            "System.Xml.XmlDocument": "4.0.1"
          },
          "compile": {
            "ref/netstandard1.3/_._": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Xml.XmlSerializer.dll": {}
          }
        },
        "System.Xml.XPath/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Xml.ReaderWriter": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/_._": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Xml.XPath.dll": {}
          }
        },
        "System.Xml.XPath.XDocument/4.3.0": {
          "type": "package",
          "dependencies": {
            "System.Diagnostics.Debug": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Xml.ReaderWriter": "4.3.0",
            "System.Xml.XDocument": "4.3.0",
            "System.Xml.XPath": "4.3.0"
          },
          "compile": {
            "ref/netstandard1.3/_._": {}
          },
          "runtime": {
            "lib/netstandard1.3/System.Xml.XPath.XDocument.dll": {}
          }
        },
        "WindowsAzure.Storage/8.1.4": {
          "type": "package",
          "dependencies": {
            "Microsoft.Data.OData": "5.8.2",
            "NETStandard.Library": "1.6.0",
            "Newtonsoft.Json": "9.0.1",
            "System.Spatial": "5.8.2"
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.WindowsAzure.Storage.dll": {}
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.WindowsAzure.Storage.dll": {}
          }
        }
      }
    },
    "libraries": {
      "bootstrap/4.0.0": {
        "sha512": "aW3kJMmptC2GD4+hIa3x3fSrPF4VkrWQ2PRBEJg+o7lMRMi7u4UW9igY/GP02/wrIpH/CusL+mQIM42YhvA3XQ==",
        "type": "package",
        "path": "bootstrap/4.0.0",
        "files": ["bootstrap.4.0.0.nupkg.sha512", "bootstrap.nuspec", "content/Content/bootstrap-grid.css", "content/Content/bootstrap-grid.css.map", "content/Content/bootstrap-grid.min.css", "content/Content/bootstrap-grid.min.css.map", "content/Content/bootstrap-reboot.css", "content/Content/bootstrap-reboot.css.map", "content/Content/bootstrap-reboot.min.css", "content/Content/bootstrap-reboot.min.css.map", "content/Content/bootstrap.css", "content/Content/bootstrap.css.map", "content/Content/bootstrap.min.css", "content/Content/bootstrap.min.css.map", "content/Scripts/bootstrap.bundle.js", "content/Scripts/bootstrap.bundle.js.map", "content/Scripts/bootstrap.bundle.min.js", "content/Scripts/bootstrap.bundle.min.js.map", "content/Scripts/bootstrap.js", "content/Scripts/bootstrap.js.map", "content/Scripts/bootstrap.min.js", "content/Scripts/bootstrap.min.js.map"]
      },
      "jQuery/3.0.0": {
        "sha512": "xFfntV19HzCtKdJWOp/XT9PUY3SslokTDDLFJZdBug36j1XVhw1+vPQ/n7Gd5y+jdpesn5B1m1yn1qIUq57jlA==",
        "type": "package",
        "path": "jquery/3.0.0",
        "files": ["Content/Scripts/jquery-3.0.0-vsdoc.js", "Content/Scripts/jquery-3.0.0.js", "Content/Scripts/jquery-3.0.0.min.js", "Content/Scripts/jquery-3.0.0.min.map", "Content/Scripts/jquery-3.0.0.slim.js", "Content/Scripts/jquery-3.0.0.slim.min.js", "Content/Scripts/jquery-3.0.0.slim.min.map", "Tools/common.ps1", "Tools/install.ps1", "Tools/jquery-3.0.0.intellisense.js", "Tools/uninstall.ps1", "jquery.3.0.0.nupkg.sha512", "jquery.nuspec"]
      },
      "Libuv/1.10.0": {
        "sha512": "GsCf4q+eyaI49rCPlgYxdxa1SQCysXFFdSJWdstrwxytg4+VPYLYrXD4AT2rjHVJ+UF7SSWX9CapWEYaU4ejVQ==",
        "type": "package",
        "path": "libuv/1.10.0",
        "files": ["License.txt", "libuv.1.10.0.nupkg.sha512", "libuv.nuspec", "runtimes/linux-arm/native/libuv.so", "runtimes/linux-arm64/native/libuv.so", "runtimes/linux-armel/native/libuv.so", "runtimes/linux-x64/native/libuv.so", "runtimes/osx/native/libuv.dylib", "runtimes/win-arm/native/libuv.dll", "runtimes/win-x64/native/libuv.dll", "runtimes/win-x86/native/libuv.dll"]
      },
      "Microsoft.ApplicationInsights/2.4.0": {
        "sha512": "4dX/zu3Psz9oM3ErU64xfOHuSxOwMxN6q5RabSkeYbX42Yn6dR/kDToqjs+txCRjrfHUxyYjfeJHu+MbCfvAsg==",
        "type": "package",
        "path": "microsoft.applicationinsights/2.4.0",
        "files": ["lib/net40/Microsoft.ApplicationInsights.XML", "lib/net40/Microsoft.ApplicationInsights.dll", "lib/net45/Microsoft.ApplicationInsights.XML", "lib/net45/Microsoft.ApplicationInsights.dll", "lib/net46/Microsoft.ApplicationInsights.XML", "lib/net46/Microsoft.ApplicationInsights.dll", "lib/netstandard1.3/Microsoft.ApplicationInsights.XML", "lib/netstandard1.3/Microsoft.ApplicationInsights.dll", "lib/portable-win81+wpa81/Microsoft.ApplicationInsights.dll", "lib/uap10.0/Microsoft.ApplicationInsights.dll", "lib/wp8/Microsoft.ApplicationInsights.dll", "microsoft.applicationinsights.2.4.0.nupkg.sha512", "microsoft.applicationinsights.nuspec"]
      },
      "Microsoft.ApplicationInsights.AspNetCore/2.1.1": {
        "sha512": "kiGmzl9Cav34dF7AHVMoJxdJJQEeLB8KZGNwX1LjImG9iem5hGk4DkHpW7/m9Nh3DrL8IKSL3mqQo+IPqWfMRQ==",
        "type": "package",
        "path": "microsoft.applicationinsights.aspnetcore/2.1.1",
        "files": ["lib/net451/Microsoft.ApplicationInsights.AspNetCore.dll", "lib/net451/Microsoft.ApplicationInsights.AspNetCore.xml", "lib/netstandard1.6/Microsoft.ApplicationInsights.AspNetCore.dll", "lib/netstandard1.6/Microsoft.ApplicationInsights.AspNetCore.xml", "microsoft.applicationinsights.aspnetcore.2.1.1.nupkg.sha512", "microsoft.applicationinsights.aspnetcore.nuspec"]
      },
      "Microsoft.ApplicationInsights.DependencyCollector/2.4.1": {
        "sha512": "RWxdX90MY6tNF8S5lwRvJcHiBMIWwVLCxd4TGIEl3X0yAKaolY2vs4zTCvyCIVkEAMs1aInTgWkYwOjzYvAHWw==",
        "type": "package",
        "path": "microsoft.applicationinsights.dependencycollector/2.4.1",
        "files": ["content/ApplicationInsights.config.install.xdt", "content/ApplicationInsights.config.transform", "content/ApplicationInsights.config.uninstall.xdt", "lib/net40/Microsoft.AI.DependencyCollector.XML", "lib/net40/Microsoft.AI.DependencyCollector.dll", "lib/net45/Microsoft.AI.DependencyCollector.XML", "lib/net45/Microsoft.AI.DependencyCollector.dll", "lib/netstandard1.6/Microsoft.AI.DependencyCollector.dll", "lib/netstandard1.6/Microsoft.AI.DependencyCollector.xml", "microsoft.applicationinsights.dependencycollector.2.4.1.nupkg.sha512", "microsoft.applicationinsights.dependencycollector.nuspec"]
      },
      "Microsoft.AspNetCore/2.0.1": {
        "sha512": "12IBPqyTHIAEReaV/JhHsRImbpASKs4SokhHTl/yn5Q6+IHZQtCpOeEaPJrThVgjtnljReGqUlsnFXpx6IQK6g==",
        "type": "package",
        "path": "microsoft.aspnetcore/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.dll", "lib/netstandard2.0/Microsoft.AspNetCore.xml", "microsoft.aspnetcore.2.0.1.nupkg.sha512", "microsoft.aspnetcore.nuspec"]
      },
      "Microsoft.AspNetCore.All/2.0.5": {
        "sha512": "0A+EnH/RT2syj9NaTh73wf90/d4Vs8p5nE8m9hoZUk2zWO4PIB7/G0RyiWkNSS/jmhcH9de3M6pfXWVj8BrocQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.all/2.0.5",
        "files": ["build/PublishWithAspNetCoreTargetManifest.targets", "build/aspnetcore-store-2.0.0-common.xml", "build/aspnetcore-store-2.0.0-linux-x64.xml", "build/aspnetcore-store-2.0.0-osx-x64.xml", "build/aspnetcore-store-2.0.0-win7-x64.xml", "build/aspnetcore-store-2.0.0-win7-x86.xml", "build/aspnetcore-store-2.0.3.xml", "build/aspnetcore-store-2.0.5.xml", "build/netcoreapp2.0/Microsoft.AspNetCore.All.targets", "lib/netcoreapp2.0/_._", "microsoft.aspnetcore.all.2.0.5.nupkg.sha512", "microsoft.aspnetcore.all.nuspec"]
      },
      "Microsoft.AspNetCore.Antiforgery/2.0.1": {
        "sha512": "WJdyrhYlggFY5VfFCvrcfPjc5zp3TiwbldFeDZ0xhRESEnT0icus8rq86Qyc82gMb8YNtOBGkvOv6rfXSKhFwA==",
        "type": "package",
        "path": "microsoft.aspnetcore.antiforgery/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Antiforgery.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Antiforgery.xml", "microsoft.aspnetcore.antiforgery.2.0.1.nupkg.sha512", "microsoft.aspnetcore.antiforgery.nuspec"]
      },
      "Microsoft.AspNetCore.ApplicationInsights.HostingStartup/2.0.1": {
        "sha512": "nf2/CJ5O27o0oLM9vaArF1SBqM9GLEH0YL+oTmHAnfOH7wyXb63wRPxly3zJNee5k53M47K7BPYrpZIDaP6IyA==",
        "type": "package",
        "path": "microsoft.aspnetcore.applicationinsights.hostingstartup/2.0.1",
        "files": ["lib/net461/Microsoft.AspNetCore.ApplicationInsights.HostingStartup.dll", "lib/net461/Microsoft.AspNetCore.ApplicationInsights.HostingStartup.xml", "lib/netcoreapp2.0/Microsoft.AspNetCore.ApplicationInsights.HostingStartup.dll", "lib/netcoreapp2.0/Microsoft.AspNetCore.ApplicationInsights.HostingStartup.xml", "microsoft.aspnetcore.applicationinsights.hostingstartup.2.0.1.nupkg.sha512", "microsoft.aspnetcore.applicationinsights.hostingstartup.nuspec"]
      },
      "Microsoft.AspNetCore.Authentication/2.0.1": {
        "sha512": "DD+8BB3eBB+l7oqloFZLKv+mrWvcHyhiW3qrqg0pC8Qv717rJZd3iKULgwEs8i0GBupn/Qn0BGK+ohy1OBevIw==",
        "type": "package",
        "path": "microsoft.aspnetcore.authentication/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Authentication.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.xml", "microsoft.aspnetcore.authentication.2.0.1.nupkg.sha512", "microsoft.aspnetcore.authentication.nuspec"]
      },
      "Microsoft.AspNetCore.Authentication.Abstractions/2.0.1": {
        "sha512": "7PHMl0nVjaYCrypBSsS2MYZmmOm8UqJmkFRuGzfcEpkYKT/2TjEZ8z2F0QBkU7YOfDmeupanrD5vcnJvupdWJg==",
        "type": "package",
        "path": "microsoft.aspnetcore.authentication.abstractions/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Abstractions.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Abstractions.xml", "microsoft.aspnetcore.authentication.abstractions.2.0.1.nupkg.sha512", "microsoft.aspnetcore.authentication.abstractions.nuspec"]
      },
      "Microsoft.AspNetCore.Authentication.Cookies/2.0.1": {
        "sha512": "4Wsh6hfTDK9bIiNN3PS3HrZKZkv33L07qq1FqY+hIS5pYSdf7lZVjJobjIQgTTIO16e4Z+5afRbzcVXogIriWA==",
        "type": "package",
        "path": "microsoft.aspnetcore.authentication.cookies/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Cookies.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Cookies.xml", "microsoft.aspnetcore.authentication.cookies.2.0.1.nupkg.sha512", "microsoft.aspnetcore.authentication.cookies.nuspec"]
      },
      "Microsoft.AspNetCore.Authentication.Core/2.0.1": {
        "sha512": "iYr/rnoafq+pl9p4O+6GitU1iXh4FJYFsRt6oi1fcITWy7FHy5eA4N7T5ypNImsyY/MFTiIpH0g7XXUeDUVgww==",
        "type": "package",
        "path": "microsoft.aspnetcore.authentication.core/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Core.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Core.xml", "microsoft.aspnetcore.authentication.core.2.0.1.nupkg.sha512", "microsoft.aspnetcore.authentication.core.nuspec"]
      },
      "Microsoft.AspNetCore.Authentication.Facebook/2.0.1": {
        "sha512": "TPKzhxEb1KevANRtJ2ph5bM7/Y209iOnC25RUGA8OwtLHRw0A/K1tEebbbfRXOrDnOujEBkbhdcoChOK2YOHbQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.authentication.facebook/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Facebook.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Facebook.xml", "microsoft.aspnetcore.authentication.facebook.2.0.1.nupkg.sha512", "microsoft.aspnetcore.authentication.facebook.nuspec"]
      },
      "Microsoft.AspNetCore.Authentication.Google/2.0.1": {
        "sha512": "VlvpEJLbLIcXtHFzV8WI4OaivKlQ9mjX+sxRv97QipRTnOLPVZEM64o1er4saxcaoatv0WhJpkC7M8OnL1trnA==",
        "type": "package",
        "path": "microsoft.aspnetcore.authentication.google/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Google.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Google.xml", "microsoft.aspnetcore.authentication.google.2.0.1.nupkg.sha512", "microsoft.aspnetcore.authentication.google.nuspec"]
      },
      "Microsoft.AspNetCore.Authentication.JwtBearer/2.0.1": {
        "sha512": "GH1qVsm6b0JqWnlhnVKRl6JOux6t52KhjHkMV3gjEcRe0Rg6mOPjQh/TrIZuxpktfgGp8j4DYBOaMn+jjOL1wA==",
        "type": "package",
        "path": "microsoft.aspnetcore.authentication.jwtbearer/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Authentication.JwtBearer.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.JwtBearer.xml", "microsoft.aspnetcore.authentication.jwtbearer.2.0.1.nupkg.sha512", "microsoft.aspnetcore.authentication.jwtbearer.nuspec"]
      },
      "Microsoft.AspNetCore.Authentication.MicrosoftAccount/2.0.1": {
        "sha512": "vzyRuJpQs+/s0tP9Znql3DrEGP4pNJdh69oITu3gfkh0nTVUUD/KQsBQmHk9CF350HMjoBRyFkU/CbIu5kns+g==",
        "type": "package",
        "path": "microsoft.aspnetcore.authentication.microsoftaccount/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Authentication.MicrosoftAccount.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.MicrosoftAccount.xml", "microsoft.aspnetcore.authentication.microsoftaccount.2.0.1.nupkg.sha512", "microsoft.aspnetcore.authentication.microsoftaccount.nuspec"]
      },
      "Microsoft.AspNetCore.Authentication.OAuth/2.0.1": {
        "sha512": "GpPv8ojFzn3LjD6Q6aCDE8Q382ug4D7fVwjnGyZwEESLNeg6r3w/zffAN18smjKznJuTTUcsZS4lYWDmbsFoGQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.authentication.oauth/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Authentication.OAuth.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.OAuth.xml", "microsoft.aspnetcore.authentication.oauth.2.0.1.nupkg.sha512", "microsoft.aspnetcore.authentication.oauth.nuspec"]
      },
      "Microsoft.AspNetCore.Authentication.OpenIdConnect/2.0.1": {
        "sha512": "kN8wCKq1T4nV9V7G91eeHjD6d21x9nXVIcIDNXUyiN6AOZK1ow2qgaLJkUkwobFH+MU3QrU3U764OkwtknWZmQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.authentication.openidconnect/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Authentication.OpenIdConnect.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.OpenIdConnect.xml", "microsoft.aspnetcore.authentication.openidconnect.2.0.1.nupkg.sha512", "microsoft.aspnetcore.authentication.openidconnect.nuspec"]
      },
      "Microsoft.AspNetCore.Authentication.Twitter/2.0.1": {
        "sha512": "/xHqTp7vRmClyi+AC61ttAuB11Yc/Igul73vKDfe92WyfdDp6ZXe8LsiZDo32bYbDaQSmxZwcI1sLFNBvETtFw==",
        "type": "package",
        "path": "microsoft.aspnetcore.authentication.twitter/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Twitter.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Twitter.xml", "microsoft.aspnetcore.authentication.twitter.2.0.1.nupkg.sha512", "microsoft.aspnetcore.authentication.twitter.nuspec"]
      },
      "Microsoft.AspNetCore.Authorization/2.0.1": {
        "sha512": "0nZ5slZMwvtEgoR5b/T/MB4uM5qPQqVhPxbtrWb9W0QsIktB0gkAmpD6ciNj4ltZ+zRaY3rWZSS09SaFrsUTIQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.authorization/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Authorization.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Authorization.xml", "microsoft.aspnetcore.authorization.2.0.1.nupkg.sha512", "microsoft.aspnetcore.authorization.nuspec"]
      },
      "Microsoft.AspNetCore.Authorization.Policy/2.0.1": {
        "sha512": "AJEJjYkN3L9VyHuKnUsQNp4nbH2ABBePWi+5soA+9L1NHGexP5S1TnMksOef1I+4fiVhp8OhlG+Ensz56ucBcw==",
        "type": "package",
        "path": "microsoft.aspnetcore.authorization.policy/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Authorization.Policy.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Authorization.Policy.xml", "microsoft.aspnetcore.authorization.policy.2.0.1.nupkg.sha512", "microsoft.aspnetcore.authorization.policy.nuspec"]
      },
      "Microsoft.AspNetCore.AzureAppServices.HostingStartup/2.0.1": {
        "sha512": "hdneJMBdHdrlMc/NYaNS8GFWlR/3tN7TsV/jOSBuc61+gWULwu45t+I7g5IF/iCHWI9PLMLNP5VOj+d1Tv1zUA==",
        "type": "package",
        "path": "microsoft.aspnetcore.azureappservices.hostingstartup/2.0.1",
        "files": ["lib/net461/Microsoft.AspNetCore.AzureAppServices.HostingStartup.dll", "lib/net461/Microsoft.AspNetCore.AzureAppServices.HostingStartup.xml", "lib/netcoreapp2.0/Microsoft.AspNetCore.AzureAppServices.HostingStartup.dll", "lib/netcoreapp2.0/Microsoft.AspNetCore.AzureAppServices.HostingStartup.xml", "microsoft.aspnetcore.azureappservices.hostingstartup.2.0.1.nupkg.sha512", "microsoft.aspnetcore.azureappservices.hostingstartup.nuspec"]
      },
      "Microsoft.AspNetCore.AzureAppServicesIntegration/2.0.1": {
        "sha512": "r2JMiK8RB2mHGKWIc+NVViT++2ZxCAGJBbLtptINB32F/c3DrNEtKWVNs2MEldEb822llBjrRmsJ7cScCW+P7g==",
        "type": "package",
        "path": "microsoft.aspnetcore.azureappservicesintegration/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.AzureAppServicesIntegration.dll", "lib/netstandard2.0/Microsoft.AspNetCore.AzureAppServicesIntegration.xml", "microsoft.aspnetcore.azureappservicesintegration.2.0.1.nupkg.sha512", "microsoft.aspnetcore.azureappservicesintegration.nuspec"]
      },
      "Microsoft.AspNetCore.CookiePolicy/2.0.1": {
        "sha512": "KvwxvTU83usDK0amo5T4ElaixJ3wpIWUXAVrqvnJBQ1U+DXU4R0bRpMCMii/5emAqZPhi0aggYG5axkcV1kheQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.cookiepolicy/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.CookiePolicy.dll", "lib/netstandard2.0/Microsoft.AspNetCore.CookiePolicy.xml", "microsoft.aspnetcore.cookiepolicy.2.0.1.nupkg.sha512", "microsoft.aspnetcore.cookiepolicy.nuspec"]
      },
      "Microsoft.AspNetCore.Cors/2.0.1": {
        "sha512": "9CkzhCVdqV4lYDuf6jNqjUfQQ0lbnxg1npGIu8Wl7G9xsghSERgfrj7ddCmzparqZ1igD16gcTY3KyjwZczXEQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.cors/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Cors.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Cors.xml", "microsoft.aspnetcore.cors.2.0.1.nupkg.sha512", "microsoft.aspnetcore.cors.nuspec"]
      },
      "Microsoft.AspNetCore.Cryptography.Internal/2.0.1": {
        "sha512": "zmERIuyMufMcEOf0nLM9ApgH4VHhUnFGzmrgp2mkFL5unXfzDFg7Itdq4PsKMjrBZScGt3ayN0ct7F5ttdZ1eA==",
        "type": "package",
        "path": "microsoft.aspnetcore.cryptography.internal/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Cryptography.Internal.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Cryptography.Internal.xml", "microsoft.aspnetcore.cryptography.internal.2.0.1.nupkg.sha512", "microsoft.aspnetcore.cryptography.internal.nuspec"]
      },
      "Microsoft.AspNetCore.Cryptography.KeyDerivation/2.0.1": {
        "sha512": "rLj4xn0dwWslmk2LSrLUNlJ8pGDspj8MQ6EyLQO+saGobnGXhJa+k92d6X0w2qhZddHhLebXurRFlyKOpdkWNQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.cryptography.keyderivation/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Cryptography.KeyDerivation.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Cryptography.KeyDerivation.xml", "microsoft.aspnetcore.cryptography.keyderivation.2.0.1.nupkg.sha512", "microsoft.aspnetcore.cryptography.keyderivation.nuspec"]
      },
      "Microsoft.AspNetCore.DataProtection/2.0.1": {
        "sha512": "wQbnO+4xEalM/80V27UqAoRe0Hxo13W2lNNnJ3816zwDv1404tiLwE7YLPM68b6H+QYOaqvQFGqKkj4FBrN4mw==",
        "type": "package",
        "path": "microsoft.aspnetcore.dataprotection/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.dll", "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.xml", "microsoft.aspnetcore.dataprotection.2.0.1.nupkg.sha512", "microsoft.aspnetcore.dataprotection.nuspec"]
      },
      "Microsoft.AspNetCore.DataProtection.Abstractions/2.0.1": {
        "sha512": "2sXEwqRIdQsbdfuGr0G5N0G+No2ormNyAkAudtVgoFzbjdf6zbCtbLK9skoNb4bg3/ZyE0qa1iOJELfEM4GUjA==",
        "type": "package",
        "path": "microsoft.aspnetcore.dataprotection.abstractions/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.Abstractions.dll", "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.Abstractions.xml", "microsoft.aspnetcore.dataprotection.abstractions.2.0.1.nupkg.sha512", "microsoft.aspnetcore.dataprotection.abstractions.nuspec"]
      },
      "Microsoft.AspNetCore.DataProtection.AzureStorage/2.0.1": {
        "sha512": "ySkJwPJodnLvM10xkCzeAxEY79jtaZurdoznuuU5uH3ZfcjHHHOyW9/+Y0DGF+oiSjQ6FCGULnmE7bdwuIsIPw==",
        "type": "package",
        "path": "microsoft.aspnetcore.dataprotection.azurestorage/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.AzureStorage.dll", "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.AzureStorage.xml", "microsoft.aspnetcore.dataprotection.azurestorage.2.0.1.nupkg.sha512", "microsoft.aspnetcore.dataprotection.azurestorage.nuspec"]
      },
      "Microsoft.AspNetCore.DataProtection.Extensions/2.0.1": {
        "sha512": "rKkcV63GZG1+Rs5PZ6RNFV/SgbQacnVvKMcqpgey21zPos2pCM0HNffgju7RMbPTIIog6RAivoounbUkc+ZNEA==",
        "type": "package",
        "path": "microsoft.aspnetcore.dataprotection.extensions/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.Extensions.dll", "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.Extensions.xml", "microsoft.aspnetcore.dataprotection.extensions.2.0.1.nupkg.sha512", "microsoft.aspnetcore.dataprotection.extensions.nuspec"]
      },
      "Microsoft.AspNetCore.Diagnostics/2.0.1": {
        "sha512": "aYyMlv17p647mv9f3BUQdFkwVvWQ2i3hkw6jCiUhMAflRpjEOxhu4PrC1mia++Z7ZdghIgdZNzJXpDH2XMq25Q==",
        "type": "package",
        "path": "microsoft.aspnetcore.diagnostics/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.xml", "microsoft.aspnetcore.diagnostics.2.0.1.nupkg.sha512", "microsoft.aspnetcore.diagnostics.nuspec"]
      },
      "Microsoft.AspNetCore.Diagnostics.Abstractions/2.0.1": {
        "sha512": "NHBnnQYuBxcqHNoOw0+uTkHrAHAp7xA2G3P1j3oFUSGd/RhIJ2A9xE2+CAWPRGIGwsa+zY3zfogx5lUzwhFgcA==",
        "type": "package",
        "path": "microsoft.aspnetcore.diagnostics.abstractions/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.Abstractions.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.Abstractions.xml", "microsoft.aspnetcore.diagnostics.abstractions.2.0.1.nupkg.sha512", "microsoft.aspnetcore.diagnostics.abstractions.nuspec"]
      },
      "Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore/2.0.1": {
        "sha512": "VZ563Qjbgg4vaEVwsVYL1Ez6h90X4QrPfMmhECt4Eh4e8BBMTUc84bLxwuciiZpNb0G2853Py5XL6dlrDlC4Ng==",
        "type": "package",
        "path": "microsoft.aspnetcore.diagnostics.entityframeworkcore/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore.xml", "microsoft.aspnetcore.diagnostics.entityframeworkcore.2.0.1.nupkg.sha512", "microsoft.aspnetcore.diagnostics.entityframeworkcore.nuspec"]
      },
      "Microsoft.AspNetCore.Hosting/2.0.1": {
        "sha512": "vqQK+SQybdYWmkDhjbvgde7riR6DIp/oD8Voj4zJiaAB1atvEm1ZjXVFj7sAXdy6NUZlUyeU7lTwYYzmkiFqWQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.hosting/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Hosting.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.xml", "microsoft.aspnetcore.hosting.2.0.1.nupkg.sha512", "microsoft.aspnetcore.hosting.nuspec"]
      },
      "Microsoft.AspNetCore.Hosting.Abstractions/2.0.1": {
        "sha512": "1/Pifm1al6wA12UkAGpro2vsF31oF8Zw2ZCi9PphxTFGreTsJbqPzd39YcTlw3Knb9n/8F9/lTZ3l1m2RjWGXg==",
        "type": "package",
        "path": "microsoft.aspnetcore.hosting.abstractions/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Hosting.Abstractions.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.Abstractions.xml", "microsoft.aspnetcore.hosting.abstractions.2.0.1.nupkg.sha512", "microsoft.aspnetcore.hosting.abstractions.nuspec"]
      },
      "Microsoft.AspNetCore.Hosting.Server.Abstractions/2.0.1": {
        "sha512": "uVOdxjpxJdwR5C3RdByht/cm9FwyqeTEm58NnPwOxMAUPE9nqbXdVnq1Hff2VjtSlvVtPVT0NiJjHM6pDkEeKA==",
        "type": "package",
        "path": "microsoft.aspnetcore.hosting.server.abstractions/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Hosting.Server.Abstractions.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.Server.Abstractions.xml", "microsoft.aspnetcore.hosting.server.abstractions.2.0.1.nupkg.sha512", "microsoft.aspnetcore.hosting.server.abstractions.nuspec"]
      },
      "Microsoft.AspNetCore.Html.Abstractions/2.0.0": {
        "sha512": "Tdy0VkAnSeynmnbqF1JLchyPg5iQwmxTTG16byenoD2SXn/W8DR6HagZOZxvDb7gc4IerjdhIwuY8aV8nm7FAA==",
        "type": "package",
        "path": "microsoft.aspnetcore.html.abstractions/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Html.Abstractions.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Html.Abstractions.xml", "microsoft.aspnetcore.html.abstractions.2.0.0.nupkg.sha512", "microsoft.aspnetcore.html.abstractions.nuspec"]
      },
      "Microsoft.AspNetCore.Http/2.0.1": {
        "sha512": "mTXDCNF83pV6qe+IzJ166p1re2or25Xj0vjdqj5JDakz9ClNZHncSkyAk63vSpBZbgFXGHiz+PuVyYcfurs5ew==",
        "type": "package",
        "path": "microsoft.aspnetcore.http/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Http.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Http.xml", "microsoft.aspnetcore.http.2.0.1.nupkg.sha512", "microsoft.aspnetcore.http.nuspec"]
      },
      "Microsoft.AspNetCore.Http.Abstractions/2.0.1": {
        "sha512": "i3mGpHEGnMq/x9eDxdWVP4e+VdPD8DuhdVYR4sH0wxWiM6oa0tNAhwDGoOrDop548PSwLM8Qs7DGPvrZqIqjmQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.http.abstractions/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Http.Abstractions.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Http.Abstractions.xml", "microsoft.aspnetcore.http.abstractions.2.0.1.nupkg.sha512", "microsoft.aspnetcore.http.abstractions.nuspec"]
      },
      "Microsoft.AspNetCore.Http.Extensions/2.0.1": {
        "sha512": "iG6FtbPQI3AOb3LskrY23AUiaZUGSfXWxMf1cJh9lB/h309qiMTPM6Du4stGwwSvw3yR2EKNaV+O4aZWmuvfog==",
        "type": "package",
        "path": "microsoft.aspnetcore.http.extensions/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Http.Extensions.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Http.Extensions.xml", "microsoft.aspnetcore.http.extensions.2.0.1.nupkg.sha512", "microsoft.aspnetcore.http.extensions.nuspec"]
      },
      "Microsoft.AspNetCore.Http.Features/2.0.1": {
        "sha512": "J9JvFF7gC2SDJTV/4XWXQaKX4zdjR2ixlGy/KUD7Og+dkeHleD7f8+wtRUthuQV1yCU3t/gz/IrmbpmQj+Tlzg==",
        "type": "package",
        "path": "microsoft.aspnetcore.http.features/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Http.Features.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Http.Features.xml", "microsoft.aspnetcore.http.features.2.0.1.nupkg.sha512", "microsoft.aspnetcore.http.features.nuspec"]
      },
      "Microsoft.AspNetCore.HttpOverrides/2.0.1": {
        "sha512": "/F/IL5tkwF58n/CyLDsXzyhpOM0L23GWQVf1QtAyku1GVVralKVK1Y+/6SNar0btoSyqgQt83tmwdyrUNUHwjw==",
        "type": "package",
        "path": "microsoft.aspnetcore.httpoverrides/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.HttpOverrides.dll", "lib/netstandard2.0/Microsoft.AspNetCore.HttpOverrides.xml", "microsoft.aspnetcore.httpoverrides.2.0.1.nupkg.sha512", "microsoft.aspnetcore.httpoverrides.nuspec"]
      },
      "Microsoft.AspNetCore.Identity/2.0.1": {
        "sha512": "dJzQ3AhwEWFYbWNSigHc/RutA+P8xiW6eh4KnLmQaxjikRfSVfRLf4Da4tOByD6ddJsaBqfstWJnd3KBDKzJAw==",
        "type": "package",
        "path": "microsoft.aspnetcore.identity/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Identity.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Identity.xml", "microsoft.aspnetcore.identity.2.0.1.nupkg.sha512", "microsoft.aspnetcore.identity.nuspec"]
      },
      "Microsoft.AspNetCore.Identity.EntityFrameworkCore/2.0.1": {
        "sha512": "H59BaisdTVX/feI2MJ+V5wrb4P0wSxBLk10HyPrXVze8YAcpi5kGyissuRhbPzMztPyPGuiq+M+i/Wl4sk3uyA==",
        "type": "package",
        "path": "microsoft.aspnetcore.identity.entityframeworkcore/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Identity.EntityFrameworkCore.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Identity.EntityFrameworkCore.xml", "microsoft.aspnetcore.identity.entityframeworkcore.2.0.1.nupkg.sha512", "microsoft.aspnetcore.identity.entityframeworkcore.nuspec"]
      },
      "Microsoft.AspNetCore.JsonPatch/2.0.0": {
        "sha512": "US78cfi7nrPTXeONgcSWbgrUBLs1Aca4kCJTieWXDLg0G0gwmdfPbd6S3c5TdJRQdA69K3UhPAs9r9ZAMjIFAA==",
        "type": "package",
        "path": "microsoft.aspnetcore.jsonpatch/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.JsonPatch.dll", "lib/netstandard2.0/Microsoft.AspNetCore.JsonPatch.xml", "microsoft.aspnetcore.jsonpatch.2.0.0.nupkg.sha512", "microsoft.aspnetcore.jsonpatch.nuspec"]
      },
      "Microsoft.AspNetCore.Localization/2.0.1": {
        "sha512": "c2u/AU2CscYYmH1nMbkYyJp5Zy2elVuZYryEEV+M0cL/aKGFfDRnQ5iTGoa4HPNELjpqhFWTGwIneeUlpJWUDg==",
        "type": "package",
        "path": "microsoft.aspnetcore.localization/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Localization.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Localization.xml", "microsoft.aspnetcore.localization.2.0.1.nupkg.sha512", "microsoft.aspnetcore.localization.nuspec"]
      },
      "Microsoft.AspNetCore.Localization.Routing/2.0.1": {
        "sha512": "Ve5jN3Y56924iVPrd7vKeZA9vRM7aD51Md2bLLH3rrpkRdJ4nhIQNPIscqFEiRg3X41PLKj1Owdjws7ya73mmA==",
        "type": "package",
        "path": "microsoft.aspnetcore.localization.routing/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Localization.Routing.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Localization.Routing.xml", "microsoft.aspnetcore.localization.routing.2.0.1.nupkg.sha512", "microsoft.aspnetcore.localization.routing.nuspec"]
      },
      "Microsoft.AspNetCore.MiddlewareAnalysis/2.0.1": {
        "sha512": "wUs8H0rhiAHjSp20W+mynHiGEIvqhOCSPOsabOA/Qx5/EiGFKVJjfb3F0m8CJX837SCoJOZGn1NPraEiaddatA==",
        "type": "package",
        "path": "microsoft.aspnetcore.middlewareanalysis/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.MiddlewareAnalysis.dll", "lib/netstandard2.0/Microsoft.AspNetCore.MiddlewareAnalysis.xml", "microsoft.aspnetcore.middlewareanalysis.2.0.1.nupkg.sha512", "microsoft.aspnetcore.middlewareanalysis.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc/2.0.2": {
        "sha512": "SMbHiQZ/nYoaR+kR74dyot5wh4nuian+l9G7Q+zXkFJpI69ALr96Fc3ie1n/Zr1WTBVgB8cwK2ce8VKJxw2RWw==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Mvc.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.xml", "microsoft.aspnetcore.mvc.2.0.2.nupkg.sha512", "microsoft.aspnetcore.mvc.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc.Abstractions/2.0.2": {
        "sha512": "V3KadHB5zoDr4hWII666BnfzGlGy2wou1K3/gh7p//xG6CV5/oFWLdzFllFjmoIvnIy1xqdt7cfqo45sgVpwXw==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc.abstractions/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Abstractions.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Abstractions.xml", "microsoft.aspnetcore.mvc.abstractions.2.0.2.nupkg.sha512", "microsoft.aspnetcore.mvc.abstractions.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc.ApiExplorer/2.0.2": {
        "sha512": "d9+IL6Uo46B5sWvbwFQaSJSyq+1F+ncXwSP9Eenv06D2MO7MUmfTnGc96SPY5CAm+z2qYDfrz+OQ5v8679pRAw==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc.apiexplorer/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Mvc.ApiExplorer.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.ApiExplorer.xml", "microsoft.aspnetcore.mvc.apiexplorer.2.0.2.nupkg.sha512", "microsoft.aspnetcore.mvc.apiexplorer.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc.Core/2.0.2": {
        "sha512": "fFBZgOS9eImndyzpTnSUI4xCvFnqMm0MKAKNIop1LJ8wMKxbWMhyfxt1ZfMHQ8JmkSSSThiqSDOiEwgyx5+k8Q==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc.core/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Core.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Core.xml", "microsoft.aspnetcore.mvc.core.2.0.2.nupkg.sha512", "microsoft.aspnetcore.mvc.core.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc.Cors/2.0.2": {
        "sha512": "PDHskgYjMhb0aJjLrqAirtTBe8BI4vfPBBcUYBlVm49sgBzbhrPnLIaB6W4yTck47oUDnQu0po7ttf3NqzMEvg==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc.cors/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Cors.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Cors.xml", "microsoft.aspnetcore.mvc.cors.2.0.2.nupkg.sha512", "microsoft.aspnetcore.mvc.cors.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc.DataAnnotations/2.0.2": {
        "sha512": "YXEgI6RBIMKtW8rIgh9LATSw4yf06Ij6EhMiNks0XOAjjz7EkmzvdKQNBLNXS5lHAOv9173Q4/ss6BksxBcSZQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc.dataannotations/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Mvc.DataAnnotations.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.DataAnnotations.xml", "microsoft.aspnetcore.mvc.dataannotations.2.0.2.nupkg.sha512", "microsoft.aspnetcore.mvc.dataannotations.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc.Formatters.Json/2.0.2": {
        "sha512": "ROE9OaxgPSID4LcX1v85c75deLw0WEmFjGeugEMBIpSakGtOmMQwMZcJTQBJ7kVUSxJ+aTnLYqZcyL3qgREQIQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc.formatters.json/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Formatters.Json.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Formatters.Json.xml", "microsoft.aspnetcore.mvc.formatters.json.2.0.2.nupkg.sha512", "microsoft.aspnetcore.mvc.formatters.json.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc.Formatters.Xml/2.0.2": {
        "sha512": "DTHJJh/ZUS6VT9QvnAOVv2Ll2ieN79SmtJ7FoeDMwgEPEXvbl/ElxduIoKK7ZPavQsI11vHQfTYGsxtGdmvF0g==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc.formatters.xml/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Formatters.Xml.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Formatters.Xml.xml", "microsoft.aspnetcore.mvc.formatters.xml.2.0.2.nupkg.sha512", "microsoft.aspnetcore.mvc.formatters.xml.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc.Localization/2.0.2": {
        "sha512": "0q94OvzH3DjQVRB0U2qGRqbXr8UPNugXw2Mz4OXAUOxiF1cRE1/onb6dahCaNvYJbZ2Xs/F4BBIY3MJ/LGRLdw==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc.localization/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Localization.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Localization.xml", "microsoft.aspnetcore.mvc.localization.2.0.2.nupkg.sha512", "microsoft.aspnetcore.mvc.localization.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc.Razor/2.0.2": {
        "sha512": "E3yG6bAiOGq5+A6zjcJ1JYnhcRF7lbFhLCgYy/Z7cKmL8q5QRmomZm/EsjVaCbfTG0yHKOsoLEKMDKMBf8f3ng==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc.razor/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.xml", "microsoft.aspnetcore.mvc.razor.2.0.2.nupkg.sha512", "microsoft.aspnetcore.mvc.razor.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc.Razor.Extensions/2.0.1": {
        "sha512": "voxpNz4zq9RxOPnK5oYchyA1ggNVpnz34mFsqwH7G9RUJHFLhjlRaeaKXi8gGwWU3RomGF9ahhH9o8DHgdxmPA==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc.razor.extensions/2.0.1",
        "files": ["lib/net46/Microsoft.AspNetCore.Mvc.Razor.Extensions.dll", "lib/net46/Microsoft.AspNetCore.Mvc.Razor.Extensions.xml", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.Extensions.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.Extensions.xml", "microsoft.aspnetcore.mvc.razor.extensions.2.0.1.nupkg.sha512", "microsoft.aspnetcore.mvc.razor.extensions.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc.Razor.ViewCompilation/2.0.2": {
        "sha512": "umyzHhXoyc8uWWYNPXghv0CaM/kw60SofYNClDJ/gnmgBVZvx6NO8AV89ANT6PA1N9l3I8qkSK3drzUWnQnRng==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc.razor.viewcompilation/2.0.2",
        "files": ["build/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.ViewCompilation-x64.exe", "build/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.ViewCompilation-x86.exe", "build/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.ViewCompilation.Tasks.dll", "build/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.ViewCompilation.dll", "build/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.ViewCompilation.targets", "microsoft.aspnetcore.mvc.razor.viewcompilation.2.0.2.nupkg.sha512", "microsoft.aspnetcore.mvc.razor.viewcompilation.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc.RazorPages/2.0.2": {
        "sha512": "xXuo3mLHybD8j1IWVfVuBZs7DvwgngADTqOWLCcPnoNtqpxqoHIz7IlyZL+NYU/pvImQLkkJePWNm1jJvow1pw==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc.razorpages/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Mvc.RazorPages.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.RazorPages.xml", "microsoft.aspnetcore.mvc.razorpages.2.0.2.nupkg.sha512", "microsoft.aspnetcore.mvc.razorpages.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc.TagHelpers/2.0.2": {
        "sha512": "WjZZRn446ryGnC7CsTJ9QSov+NE9qa/aqtAolLTcs90/gTDb93B952Js9U5IpCr/OlzyTIk8qoqgvpA138h/mg==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc.taghelpers/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Mvc.TagHelpers.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.TagHelpers.xml", "microsoft.aspnetcore.mvc.taghelpers.2.0.2.nupkg.sha512", "microsoft.aspnetcore.mvc.taghelpers.nuspec"]
      },
      "Microsoft.AspNetCore.Mvc.ViewFeatures/2.0.2": {
        "sha512": "KANH2/5vbTI/jfwJcItbzSuPLAex6HfG9sqKus2dJc0TgWHc6Buc4BFT1qDKl6MW2JAZcQQ7/r5iNd50jtCHeg==",
        "type": "package",
        "path": "microsoft.aspnetcore.mvc.viewfeatures/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Mvc.ViewFeatures.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.ViewFeatures.xml", "microsoft.aspnetcore.mvc.viewfeatures.2.0.2.nupkg.sha512", "microsoft.aspnetcore.mvc.viewfeatures.nuspec"]
      },
      "Microsoft.AspNetCore.NodeServices/2.0.2": {
        "sha512": "HGRA2q4SNaJ3KKocrXdQYKllmPJyTa6ZvszLQRhjsBNyDQf1FsnKi2bCBBIBk6Nwk1Cp45H2NcZQvMdv59S7hQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.nodeservices/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.NodeServices.dll", "lib/netstandard2.0/Microsoft.AspNetCore.NodeServices.xml", "microsoft.aspnetcore.nodeservices.2.0.2.nupkg.sha512", "microsoft.aspnetcore.nodeservices.nuspec"]
      },
      "Microsoft.AspNetCore.Owin/2.0.1": {
        "sha512": "K54YgOdNwVQbjXg/EPucK20oRCSdJ5gS2wQsN1Twk434yLTTzaSYaipYZ3oFwHgClEdxVQvlHcDiKXii2NtJwg==",
        "type": "package",
        "path": "microsoft.aspnetcore.owin/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Owin.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Owin.xml", "microsoft.aspnetcore.owin.2.0.1.nupkg.sha512", "microsoft.aspnetcore.owin.nuspec"]
      },
      "Microsoft.AspNetCore.Razor/2.0.1": {
        "sha512": "IGtreZEfTOSKndAZcAaMEGwTa7rLnuqSRbCS3l3Mn2D68Ba9c4enuVOMACivDowMAsfAUqZju3vhiuCUAMvGHg==",
        "type": "package",
        "path": "microsoft.aspnetcore.razor/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Razor.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Razor.xml", "microsoft.aspnetcore.razor.2.0.1.nupkg.sha512", "microsoft.aspnetcore.razor.nuspec"]
      },
      "Microsoft.AspNetCore.Razor.Language/2.0.1": {
        "sha512": "zzvx4EnZoOf/1rKUcn5lEY98GOt30KJiQGS3tVhc2HihBubcvMZZT6+oqNiFi7oJoM5bnYaEUNM8C7kA8Iu8RQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.razor.language/2.0.1",
        "files": ["lib/net46/Microsoft.AspNetCore.Razor.Language.dll", "lib/net46/Microsoft.AspNetCore.Razor.Language.xml", "lib/netstandard2.0/Microsoft.AspNetCore.Razor.Language.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Razor.Language.xml", "microsoft.aspnetcore.razor.language.2.0.1.nupkg.sha512", "microsoft.aspnetcore.razor.language.nuspec"]
      },
      "Microsoft.AspNetCore.Razor.Runtime/2.0.1": {
        "sha512": "CMxOywYKmMe7knPXXaKSTvsPRtM88PHieFCf74KjWnbq7Oz9d5TuNwlQuC+V+Y65tBUpGicfTDM9IfG8engyzQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.razor.runtime/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Razor.Runtime.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Razor.Runtime.xml", "microsoft.aspnetcore.razor.runtime.2.0.1.nupkg.sha512", "microsoft.aspnetcore.razor.runtime.nuspec"]
      },
      "Microsoft.AspNetCore.ResponseCaching/2.0.1": {
        "sha512": "DME1X7TXwMLlq+i/rZ7r8TkifCMSUGahoJ7/hkulHkqlgoQJ/lYLGTBlEQy2ndWX1oc1DUJEWVlWeoptlv/A9A==",
        "type": "package",
        "path": "microsoft.aspnetcore.responsecaching/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.ResponseCaching.dll", "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCaching.xml", "microsoft.aspnetcore.responsecaching.2.0.1.nupkg.sha512", "microsoft.aspnetcore.responsecaching.nuspec"]
      },
      "Microsoft.AspNetCore.ResponseCaching.Abstractions/2.0.1": {
        "sha512": "ZIwA+KjQRd1bF5MlNA3HhvpZR4e0SMqQHyMlaTXArmTXwS86AoOR22v3xvJXrjIbyEPUC+WHeKBNa+AbReMf3w==",
        "type": "package",
        "path": "microsoft.aspnetcore.responsecaching.abstractions/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.ResponseCaching.Abstractions.dll", "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCaching.Abstractions.xml", "microsoft.aspnetcore.responsecaching.abstractions.2.0.1.nupkg.sha512", "microsoft.aspnetcore.responsecaching.abstractions.nuspec"]
      },
      "Microsoft.AspNetCore.ResponseCompression/2.0.1": {
        "sha512": "TBjky9V/d+/Bkmhmb4QEZ4jMF/MQzLBViEYMvD2/uWl73cnjvhKauIm8PjIFZqQsWBHNliHPgNWxcChY5+TsjQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.responsecompression/2.0.1",
        "files": ["lib/net461/Microsoft.AspNetCore.ResponseCompression.dll", "lib/net461/Microsoft.AspNetCore.ResponseCompression.xml", "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCompression.dll", "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCompression.xml", "microsoft.aspnetcore.responsecompression.2.0.1.nupkg.sha512", "microsoft.aspnetcore.responsecompression.nuspec"]
      },
      "Microsoft.AspNetCore.Rewrite/2.0.1": {
        "sha512": "oYyeTr6s2iTSMbriJt3eOLfdzDaiIVtP5ECFGUZx20hGF6elBabq2rhR9sAoc4vQNwBCirT03ndcCK7VZtAUVw==",
        "type": "package",
        "path": "microsoft.aspnetcore.rewrite/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Rewrite.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Rewrite.xml", "microsoft.aspnetcore.rewrite.2.0.1.nupkg.sha512", "microsoft.aspnetcore.rewrite.nuspec"]
      },
      "Microsoft.AspNetCore.Routing/2.0.1": {
        "sha512": "jfvgBuVu4qbNALj+EQJzGFz5aP/pqBdPowif1Oyube2EkmrIx1JDmCQ+LeLUygflLYdV2gYffPEeB7ifYegz0g==",
        "type": "package",
        "path": "microsoft.aspnetcore.routing/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Routing.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Routing.xml", "microsoft.aspnetcore.routing.2.0.1.nupkg.sha512", "microsoft.aspnetcore.routing.nuspec"]
      },
      "Microsoft.AspNetCore.Routing.Abstractions/2.0.1": {
        "sha512": "ZJJj11f1oClXp11KAoT2p2I/6rUrPtnKoXQBwnCa3NhpI0/WfsyXo4MvJJB87H1GWCCHNFYylAoxhhie25pC7Q==",
        "type": "package",
        "path": "microsoft.aspnetcore.routing.abstractions/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Routing.Abstractions.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Routing.Abstractions.xml", "microsoft.aspnetcore.routing.abstractions.2.0.1.nupkg.sha512", "microsoft.aspnetcore.routing.abstractions.nuspec"]
      },
      "Microsoft.AspNetCore.Server.HttpSys/2.0.1": {
        "sha512": "pbD9OCmnr/TKJdWo0uUEr2njtY41ZzpymvK3Su+07WeHmno1p2kiSPb200U9IQ5BuVxaYjShs4cExxCJc0jx1A==",
        "type": "package",
        "path": "microsoft.aspnetcore.server.httpsys/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Server.HttpSys.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Server.HttpSys.xml", "microsoft.aspnetcore.server.httpsys.2.0.1.nupkg.sha512", "microsoft.aspnetcore.server.httpsys.nuspec"]
      },
      "Microsoft.AspNetCore.Server.IISIntegration/2.0.1": {
        "sha512": "bagPgHYvSqF91M7SZv4qZ8hZZqdej3R4aclPOFNzroLxlFgbAAXwbApRbDG/1ZTCYtXFQ83QCHwUXgZ5hmmMcg==",
        "type": "package",
        "path": "microsoft.aspnetcore.server.iisintegration/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Server.IISIntegration.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Server.IISIntegration.xml", "microsoft.aspnetcore.server.iisintegration.2.0.1.nupkg.sha512", "microsoft.aspnetcore.server.iisintegration.nuspec"]
      },
      "Microsoft.AspNetCore.Server.Kestrel/2.0.1": {
        "sha512": "SX7+2E6npBQ7vO5xn8dAo1vnWnjBE3t9b+tEsLNL7ewjQTJE85TkJ9cyjIorOtOn+duUxshmgzbMzhpf7uUn3Q==",
        "type": "package",
        "path": "microsoft.aspnetcore.server.kestrel/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.xml", "microsoft.aspnetcore.server.kestrel.2.0.1.nupkg.sha512", "microsoft.aspnetcore.server.kestrel.nuspec"]
      },
      "Microsoft.AspNetCore.Server.Kestrel.Core/2.0.1": {
        "sha512": "xTteJ7Wfh9QLoeMOIsG5TjQf4eHaUvC12kinmvxZ2kzm5r1UtyC1f+07N8dxY3Co1RquvlXO4b3EuNJMamc1Pg==",
        "type": "package",
        "path": "microsoft.aspnetcore.server.kestrel.core/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Core.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Core.xml", "microsoft.aspnetcore.server.kestrel.core.2.0.1.nupkg.sha512", "microsoft.aspnetcore.server.kestrel.core.nuspec"]
      },
      "Microsoft.AspNetCore.Server.Kestrel.Https/2.0.1": {
        "sha512": "L8C0q6HHMs6Bu17QCLXwGUNlsGTOrz7d0b5gaEqIMYO94zsg+gAmv7YHYK43mGJ4dteXxWxBdoUI8WRKY+H0zg==",
        "type": "package",
        "path": "microsoft.aspnetcore.server.kestrel.https/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Https.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Https.xml", "microsoft.aspnetcore.server.kestrel.https.2.0.1.nupkg.sha512", "microsoft.aspnetcore.server.kestrel.https.nuspec"]
      },
      "Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions/2.0.1": {
        "sha512": "I0X3ZmWFv4TeH6q/FO5Pv5GsT1X0TffclbZzs/Pf69TGznVIqlfSsSambWT8tGNUx8Y1EC5ffXvvoNhN0ci0rQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.server.kestrel.transport.abstractions/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions.xml", "microsoft.aspnetcore.server.kestrel.transport.abstractions.2.0.1.nupkg.sha512", "microsoft.aspnetcore.server.kestrel.transport.abstractions.nuspec"]
      },
      "Microsoft.AspNetCore.Server.Kestrel.Transport.Libuv/2.0.1": {
        "sha512": "4GT9cQfP5arzReMTzxrbZyveHAQFbjIUaBN2xip4jwNn3rAhRKSty/6UhwrLDZ9+BSfSvb3qOjBklJPWeYFLOA==",
        "type": "package",
        "path": "microsoft.aspnetcore.server.kestrel.transport.libuv/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Transport.Libuv.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Transport.Libuv.xml", "microsoft.aspnetcore.server.kestrel.transport.libuv.2.0.1.nupkg.sha512", "microsoft.aspnetcore.server.kestrel.transport.libuv.nuspec"]
      },
      "Microsoft.AspNetCore.Session/2.0.1": {
        "sha512": "ERowmL/UQUJ5mzbEQrQcLXqSgRAN3A78SLweI1lB6ce4suQ8+dtgi9qm56mePrVLnRhdN10XTrcAkZZIje7PAA==",
        "type": "package",
        "path": "microsoft.aspnetcore.session/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.Session.dll", "lib/netstandard2.0/Microsoft.AspNetCore.Session.xml", "microsoft.aspnetcore.session.2.0.1.nupkg.sha512", "microsoft.aspnetcore.session.nuspec"]
      },
      "Microsoft.AspNetCore.SpaServices/2.0.2": {
        "sha512": "9rx4x8TH+PuZokLzYmeb6wVmgQTt4fLUzoW35rDKxTAvBW0hQCYiWsK6xfDVMzWYMLwCD36T3j0ZtOpfejy/Sw==",
        "type": "package",
        "path": "microsoft.aspnetcore.spaservices/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.SpaServices.dll", "lib/netstandard2.0/Microsoft.AspNetCore.SpaServices.xml", "microsoft.aspnetcore.spaservices.2.0.2.nupkg.sha512", "microsoft.aspnetcore.spaservices.nuspec"]
      },
      "Microsoft.AspNetCore.StaticFiles/2.0.1": {
        "sha512": "F5qVFsyKsVWKS2tgnJ8MVXkc4FNt6NMybRl7gsZw90G7rhscu4M9k2rW0sEtaUS2ZyKu0ObMU2BVu8OjPCUZjQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.staticfiles/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.StaticFiles.dll", "lib/netstandard2.0/Microsoft.AspNetCore.StaticFiles.xml", "microsoft.aspnetcore.staticfiles.2.0.1.nupkg.sha512", "microsoft.aspnetcore.staticfiles.nuspec"]
      },
      "Microsoft.AspNetCore.WebSockets/2.0.1": {
        "sha512": "J7JAWvl/q/eUm0JsJZ/FdzU6WS08L8ErVCsDiL+kYz4hLcutR84qkpi7cxbPYT0LEE8bhUWYPNCUOJ1rFSlcBQ==",
        "type": "package",
        "path": "microsoft.aspnetcore.websockets/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.WebSockets.dll", "lib/netstandard2.0/Microsoft.AspNetCore.WebSockets.xml", "microsoft.aspnetcore.websockets.2.0.1.nupkg.sha512", "microsoft.aspnetcore.websockets.nuspec"]
      },
      "Microsoft.AspNetCore.WebUtilities/2.0.1": {
        "sha512": "shzRZs574ir2Im5hJBSKnLlNbf8SKA2d5Mkcto5fv6LUcYqu0ravmVHfuRAqnAeo2Z0GpcpFW2DKmNbFjvzWRg==",
        "type": "package",
        "path": "microsoft.aspnetcore.webutilities/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.AspNetCore.WebUtilities.dll", "lib/netstandard2.0/Microsoft.AspNetCore.WebUtilities.xml", "microsoft.aspnetcore.webutilities.2.0.1.nupkg.sha512", "microsoft.aspnetcore.webutilities.nuspec"]
      },
      "Microsoft.Azure.KeyVault/2.3.2": {
        "sha512": "A82ESUdfLz2wMhYuPxrwf/fA7JVt3IARgeMCG3TsaLtxUxa9RBKX3f0zdnKmvBvJ/u1/5g03OLR26GPekqY5HQ==",
        "type": "package",
        "path": "microsoft.azure.keyvault/2.3.2",
        "files": ["lib/net452/Microsoft.Azure.KeyVault.dll", "lib/net452/Microsoft.Azure.KeyVault.runtimeconfig.json", "lib/net452/Microsoft.Azure.KeyVault.xml", "lib/netstandard1.4/Microsoft.Azure.KeyVault.dll", "lib/netstandard1.4/Microsoft.Azure.KeyVault.runtimeconfig.json", "lib/netstandard1.4/Microsoft.Azure.KeyVault.xml", "microsoft.azure.keyvault.2.3.2.nupkg.sha512", "microsoft.azure.keyvault.nuspec"]
      },
      "Microsoft.Azure.KeyVault.WebKey/2.0.7": {
        "sha512": "MVSYao62R9rwl9KF+IsJm+XBLupJj1ma2lfwNeFlSWziXGAopnYK+YkDWqABOqNIV9kpza/MvNBxITzhlJIyIw==",
        "type": "package",
        "path": "microsoft.azure.keyvault.webkey/2.0.7",
        "files": ["lib/net452/Microsoft.Azure.KeyVault.WebKey.dll", "lib/net452/Microsoft.Azure.KeyVault.WebKey.runtimeconfig.json", "lib/net452/Microsoft.Azure.KeyVault.WebKey.xml", "lib/netstandard1.4/Microsoft.Azure.KeyVault.WebKey.dll", "lib/netstandard1.4/Microsoft.Azure.KeyVault.WebKey.runtimeconfig.json", "lib/netstandard1.4/Microsoft.Azure.KeyVault.WebKey.xml", "microsoft.azure.keyvault.webkey.2.0.7.nupkg.sha512", "microsoft.azure.keyvault.webkey.nuspec"]
      },
      "Microsoft.CodeAnalysis.Analyzers/1.1.0": {
        "sha512": "HS3iRWZKcUw/8eZ/08GXKY2Bn7xNzQPzf8gRPHGSowX7u7XXu9i9YEaBeBNKUXWfI7qjvT2zXtLUvbN0hds8vg==",
        "type": "package",
        "path": "microsoft.codeanalysis.analyzers/1.1.0",
        "files": ["ThirdPartyNotices.rtf", "analyzers/dotnet/cs/Microsoft.CodeAnalysis.Analyzers.dll", "analyzers/dotnet/cs/Microsoft.CodeAnalysis.CSharp.Analyzers.dll", "analyzers/dotnet/vb/Microsoft.CodeAnalysis.Analyzers.dll", "analyzers/dotnet/vb/Microsoft.CodeAnalysis.VisualBasic.Analyzers.dll", "microsoft.codeanalysis.analyzers.1.1.0.nupkg.sha512", "microsoft.codeanalysis.analyzers.nuspec", "tools/install.ps1", "tools/uninstall.ps1"]
      },
      "Microsoft.CodeAnalysis.Common/2.3.1": {
        "sha512": "nGATpUW09zOGFLQZ3JXIObJyNlk2dvgNgC7Kh+iDpxGWgKHSgpHMXnGmXUecJa4CNi0HhUENKSnEack1aF/MwQ==",
        "type": "package",
        "path": "microsoft.codeanalysis.common/2.3.1",
        "files": ["lib/netstandard1.3/Microsoft.CodeAnalysis.dll", "lib/netstandard1.3/Microsoft.CodeAnalysis.xml", "microsoft.codeanalysis.common.2.3.1.nupkg.sha512", "microsoft.codeanalysis.common.nuspec"]
      },
      "Microsoft.CodeAnalysis.CSharp/2.3.1": {
        "sha512": "fvO7Q8FqzmWX8gzzCk4Bf34Ms06bZ6r/A9tUz1ndj3ioitAxSC2QUXbUQOJ4ExzohTtXhczJAFirgs//Nasz6A==",
        "type": "package",
        "path": "microsoft.codeanalysis.csharp/2.3.1",
        "files": ["lib/netstandard1.3/Microsoft.CodeAnalysis.CSharp.dll", "lib/netstandard1.3/Microsoft.CodeAnalysis.CSharp.xml", "microsoft.codeanalysis.csharp.2.3.1.nupkg.sha512", "microsoft.codeanalysis.csharp.nuspec"]
      },
      "Microsoft.CodeAnalysis.CSharp.Workspaces/2.3.1": {
        "sha512": "LpK7zgRU9TQ9KOZe7vDo4DEaPj6PM6HOpvTCOpBtS7GAbwOHU2IWUgnAJvFxILXKsqJDKrM0+O6zqZhG0sBYIw==",
        "type": "package",
        "path": "microsoft.codeanalysis.csharp.workspaces/2.3.1",
        "files": ["lib/netstandard1.3/Microsoft.CodeAnalysis.CSharp.Workspaces.dll", "lib/netstandard1.3/Microsoft.CodeAnalysis.CSharp.Workspaces.xml", "microsoft.codeanalysis.csharp.workspaces.2.3.1.nupkg.sha512", "microsoft.codeanalysis.csharp.workspaces.nuspec"]
      },
      "Microsoft.CodeAnalysis.Razor/2.0.1": {
        "sha512": "Ncqt6UEh5s451dZHPwTK8YDbl5t4isn0q1Xs3I2JTjUs4xdCOSo2t0KPeb1PUeNDrTJ0vKDV6xMtQf1uqiTjoQ==",
        "type": "package",
        "path": "microsoft.codeanalysis.razor/2.0.1",
        "files": ["lib/net46/Microsoft.CodeAnalysis.Razor.dll", "lib/net46/Microsoft.CodeAnalysis.Razor.xml", "lib/netstandard2.0/Microsoft.CodeAnalysis.Razor.dll", "lib/netstandard2.0/Microsoft.CodeAnalysis.Razor.xml", "microsoft.codeanalysis.razor.2.0.1.nupkg.sha512", "microsoft.codeanalysis.razor.nuspec"]
      },
      "Microsoft.CodeAnalysis.Workspaces.Common/2.3.1": {
        "sha512": "/Y9zLXlvWVvGxLyNWvLrSRRZ6c1F3L2yVwhUcmGd9un7u/TJguOyY2BEOD10uA/KBDKbA4pmnWnJFq+2n5IYPg==",
        "type": "package",
        "path": "microsoft.codeanalysis.workspaces.common/2.3.1",
        "files": ["lib/net46/Microsoft.CodeAnalysis.Workspaces.Desktop.dll", "lib/net46/Microsoft.CodeAnalysis.Workspaces.Desktop.xml", "lib/net46/Microsoft.CodeAnalysis.Workspaces.dll", "lib/net46/Microsoft.CodeAnalysis.Workspaces.xml", "lib/netstandard1.3/Microsoft.CodeAnalysis.Workspaces.dll", "lib/netstandard1.3/Microsoft.CodeAnalysis.Workspaces.xml", "microsoft.codeanalysis.workspaces.common.2.3.1.nupkg.sha512", "microsoft.codeanalysis.workspaces.common.nuspec"]
      },
      "Microsoft.CSharp/4.4.0": {
        "sha512": "vvVR/B08YVghQ4jHEloxqw2ZWzEGE1AOA5E0DioUM3ujbXz6FD3AfB/0Jl2ohJPd0nXYGwmPe1En6HTsSriq1A==",
        "type": "package",
        "path": "microsoft.csharp/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/Microsoft.CSharp.dll", "lib/netcoreapp2.0/_._", "lib/netstandard1.3/Microsoft.CSharp.dll", "lib/netstandard2.0/Microsoft.CSharp.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "microsoft.csharp.4.4.0.nupkg.sha512", "microsoft.csharp.nuspec", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/Microsoft.CSharp.dll", "ref/netcore50/Microsoft.CSharp.xml", "ref/netcore50/de/Microsoft.CSharp.xml", "ref/netcore50/es/Microsoft.CSharp.xml", "ref/netcore50/fr/Microsoft.CSharp.xml", "ref/netcore50/it/Microsoft.CSharp.xml", "ref/netcore50/ja/Microsoft.CSharp.xml", "ref/netcore50/ko/Microsoft.CSharp.xml", "ref/netcore50/ru/Microsoft.CSharp.xml", "ref/netcore50/zh-hans/Microsoft.CSharp.xml", "ref/netcore50/zh-hant/Microsoft.CSharp.xml", "ref/netcoreapp2.0/_._", "ref/netstandard1.0/Microsoft.CSharp.dll", "ref/netstandard1.0/Microsoft.CSharp.xml", "ref/netstandard1.0/de/Microsoft.CSharp.xml", "ref/netstandard1.0/es/Microsoft.CSharp.xml", "ref/netstandard1.0/fr/Microsoft.CSharp.xml", "ref/netstandard1.0/it/Microsoft.CSharp.xml", "ref/netstandard1.0/ja/Microsoft.CSharp.xml", "ref/netstandard1.0/ko/Microsoft.CSharp.xml", "ref/netstandard1.0/ru/Microsoft.CSharp.xml", "ref/netstandard1.0/zh-hans/Microsoft.CSharp.xml", "ref/netstandard1.0/zh-hant/Microsoft.CSharp.xml", "ref/netstandard2.0/Microsoft.CSharp.dll", "ref/netstandard2.0/Microsoft.CSharp.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "useSharedDesignerContext.txt", "version.txt"]
      },
      "Microsoft.Data.Edm/5.8.2": {
        "sha512": "P/d8DxA6MFHroBEn/jW0LMQSIKnsRRibrZtRCLfov2boQfrQ1R1BVgkJ5oIhcQsOm0l4POv+I2ny6RBsclNbOw==",
        "type": "package",
        "path": "microsoft.data.edm/5.8.2",
        "files": ["lib/net40/Microsoft.Data.Edm.dll", "lib/net40/Microsoft.Data.Edm.xml", "lib/net40/de/Microsoft.Data.Edm.resources.dll", "lib/net40/es/Microsoft.Data.Edm.resources.dll", "lib/net40/fr/Microsoft.Data.Edm.resources.dll", "lib/net40/it/Microsoft.Data.Edm.resources.dll", "lib/net40/ja/Microsoft.Data.Edm.resources.dll", "lib/net40/ko/Microsoft.Data.Edm.resources.dll", "lib/net40/ru/Microsoft.Data.Edm.resources.dll", "lib/net40/zh-Hans/Microsoft.Data.Edm.resources.dll", "lib/net40/zh-Hant/Microsoft.Data.Edm.resources.dll", "lib/netstandard1.1/Microsoft.Data.Edm.dll", "lib/netstandard1.1/Microsoft.Data.Edm.xml", "lib/netstandard1.1/de/Microsoft.Data.Edm.resources.dll", "lib/netstandard1.1/es/Microsoft.Data.Edm.resources.dll", "lib/netstandard1.1/fr/Microsoft.Data.Edm.resources.dll", "lib/netstandard1.1/it/Microsoft.Data.Edm.resources.dll", "lib/netstandard1.1/ja/Microsoft.Data.Edm.resources.dll", "lib/netstandard1.1/ko/Microsoft.Data.Edm.resources.dll", "lib/netstandard1.1/ru/Microsoft.Data.Edm.resources.dll", "lib/netstandard1.1/zh-Hans/Microsoft.Data.Edm.resources.dll", "lib/netstandard1.1/zh-Hant/Microsoft.Data.Edm.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/Microsoft.Data.Edm.dll", "lib/portable-net40+sl5+wp8+win8+wpa/Microsoft.Data.Edm.xml", "lib/portable-net40+sl5+wp8+win8+wpa/de/Microsoft.Data.Edm.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/es/Microsoft.Data.Edm.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/fr/Microsoft.Data.Edm.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/it/Microsoft.Data.Edm.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/ja/Microsoft.Data.Edm.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/ko/Microsoft.Data.Edm.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/ru/Microsoft.Data.Edm.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/zh-Hans/Microsoft.Data.Edm.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/zh-Hant/Microsoft.Data.Edm.resources.dll", "lib/portable-net45+wp8+win8+wpa/Microsoft.Data.Edm.dll", "lib/portable-net45+wp8+win8+wpa/Microsoft.Data.Edm.xml", "lib/portable-net45+wp8+win8+wpa/de/Microsoft.Data.Edm.resources.dll", "lib/portable-net45+wp8+win8+wpa/es/Microsoft.Data.Edm.resources.dll", "lib/portable-net45+wp8+win8+wpa/fr/Microsoft.Data.Edm.resources.dll", "lib/portable-net45+wp8+win8+wpa/it/Microsoft.Data.Edm.resources.dll", "lib/portable-net45+wp8+win8+wpa/ja/Microsoft.Data.Edm.resources.dll", "lib/portable-net45+wp8+win8+wpa/ko/Microsoft.Data.Edm.resources.dll", "lib/portable-net45+wp8+win8+wpa/ru/Microsoft.Data.Edm.resources.dll", "lib/portable-net45+wp8+win8+wpa/zh-Hans/Microsoft.Data.Edm.resources.dll", "lib/portable-net45+wp8+win8+wpa/zh-Hant/Microsoft.Data.Edm.resources.dll", "lib/sl4/Microsoft.Data.Edm.dll", "lib/sl4/Microsoft.Data.Edm.xml", "lib/sl4/de/Microsoft.Data.Edm.resources.dll", "lib/sl4/es/Microsoft.Data.Edm.resources.dll", "lib/sl4/fr/Microsoft.Data.Edm.resources.dll", "lib/sl4/it/Microsoft.Data.Edm.resources.dll", "lib/sl4/ja/Microsoft.Data.Edm.resources.dll", "lib/sl4/ko/Microsoft.Data.Edm.resources.dll", "lib/sl4/ru/Microsoft.Data.Edm.resources.dll", "lib/sl4/zh-Hans/Microsoft.Data.Edm.resources.dll", "lib/sl4/zh-Hant/Microsoft.Data.Edm.resources.dll", "microsoft.data.edm.5.8.2.nupkg.sha512", "microsoft.data.edm.nuspec"]
      },
      "Microsoft.Data.OData/5.8.2": {
        "sha512": "oEIUtXcRiKogF0yZxA+QdgxoBJ34989qL/5xOSrTfxAhzNJV5Hw6DRdWgUCpeXFMoJUQx7ptbHCN+My/LCQfsg==",
        "type": "package",
        "path": "microsoft.data.odata/5.8.2",
        "files": ["lib/net40/Microsoft.Data.OData.dll", "lib/net40/Microsoft.Data.OData.xml", "lib/net40/de/Microsoft.Data.OData.resources.dll", "lib/net40/es/Microsoft.Data.OData.resources.dll", "lib/net40/fr/Microsoft.Data.OData.resources.dll", "lib/net40/it/Microsoft.Data.OData.resources.dll", "lib/net40/ja/Microsoft.Data.OData.resources.dll", "lib/net40/ko/Microsoft.Data.OData.resources.dll", "lib/net40/ru/Microsoft.Data.OData.resources.dll", "lib/net40/zh-Hans/Microsoft.Data.OData.resources.dll", "lib/net40/zh-Hant/Microsoft.Data.OData.resources.dll", "lib/netstandard1.1/Microsoft.Data.OData.dll", "lib/netstandard1.1/Microsoft.Data.OData.xml", "lib/netstandard1.1/de/Microsoft.Data.OData.resources.dll", "lib/netstandard1.1/es/Microsoft.Data.OData.resources.dll", "lib/netstandard1.1/fr/Microsoft.Data.OData.resources.dll", "lib/netstandard1.1/it/Microsoft.Data.OData.resources.dll", "lib/netstandard1.1/ja/Microsoft.Data.OData.resources.dll", "lib/netstandard1.1/ko/Microsoft.Data.OData.resources.dll", "lib/netstandard1.1/ru/Microsoft.Data.OData.resources.dll", "lib/netstandard1.1/zh-Hans/Microsoft.Data.OData.resources.dll", "lib/netstandard1.1/zh-Hant/Microsoft.Data.OData.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/Microsoft.Data.OData.dll", "lib/portable-net40+sl5+wp8+win8+wpa/Microsoft.Data.OData.xml", "lib/portable-net40+sl5+wp8+win8+wpa/de/Microsoft.Data.OData.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/es/Microsoft.Data.OData.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/fr/Microsoft.Data.OData.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/it/Microsoft.Data.OData.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/ja/Microsoft.Data.OData.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/ko/Microsoft.Data.OData.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/ru/Microsoft.Data.OData.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/zh-Hans/Microsoft.Data.OData.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/zh-Hant/Microsoft.Data.OData.resources.dll", "lib/portable-net45+wp8+win8+wpa/Microsoft.Data.OData.dll", "lib/portable-net45+wp8+win8+wpa/Microsoft.Data.OData.xml", "lib/portable-net45+wp8+win8+wpa/de/Microsoft.Data.OData.resources.dll", "lib/portable-net45+wp8+win8+wpa/es/Microsoft.Data.OData.resources.dll", "lib/portable-net45+wp8+win8+wpa/fr/Microsoft.Data.OData.resources.dll", "lib/portable-net45+wp8+win8+wpa/it/Microsoft.Data.OData.resources.dll", "lib/portable-net45+wp8+win8+wpa/ja/Microsoft.Data.OData.resources.dll", "lib/portable-net45+wp8+win8+wpa/ko/Microsoft.Data.OData.resources.dll", "lib/portable-net45+wp8+win8+wpa/ru/Microsoft.Data.OData.resources.dll", "lib/portable-net45+wp8+win8+wpa/zh-Hans/Microsoft.Data.OData.resources.dll", "lib/portable-net45+wp8+win8+wpa/zh-Hant/Microsoft.Data.OData.resources.dll", "lib/sl4/Microsoft.Data.OData.dll", "lib/sl4/Microsoft.Data.OData.xml", "lib/sl4/de/Microsoft.Data.OData.resources.dll", "lib/sl4/es/Microsoft.Data.OData.resources.dll", "lib/sl4/fr/Microsoft.Data.OData.resources.dll", "lib/sl4/it/Microsoft.Data.OData.resources.dll", "lib/sl4/ja/Microsoft.Data.OData.resources.dll", "lib/sl4/ko/Microsoft.Data.OData.resources.dll", "lib/sl4/ru/Microsoft.Data.OData.resources.dll", "lib/sl4/zh-Hans/Microsoft.Data.OData.resources.dll", "lib/sl4/zh-Hant/Microsoft.Data.OData.resources.dll", "microsoft.data.odata.5.8.2.nupkg.sha512", "microsoft.data.odata.nuspec"]
      },
      "Microsoft.Data.Sqlite/2.0.0": {
        "sha512": "9zw3cOfLaPkskrXRik3XxVhHbjUc3lkS68pExvZ/kBRXKo5g2kH+SDyLYyJoxii4ENXaaPL0U/juGmA030lIRg==",
        "type": "package",
        "path": "microsoft.data.sqlite/2.0.0",
        "files": ["microsoft.data.sqlite.2.0.0.nupkg.sha512", "microsoft.data.sqlite.nuspec"]
      },
      "Microsoft.Data.Sqlite.Core/2.0.0": {
        "sha512": "PBA2ay1gc4mMzLuBU4VfpZ2mjQOMaqCzwmwj+15FWNC33tFuOS6pSfH7MlV/Ql8wRKXBi/7yH6PqK9jm8JkvfA==",
        "type": "package",
        "path": "microsoft.data.sqlite.core/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Data.Sqlite.dll", "lib/netstandard2.0/Microsoft.Data.Sqlite.xml", "microsoft.data.sqlite.core.2.0.0.nupkg.sha512", "microsoft.data.sqlite.core.nuspec"]
      },
      "Microsoft.DotNet.PlatformAbstractions/2.0.3": {
        "sha512": "cXgVdJmW3fLwmSxsv0RlTe4BIKs6slVXV5xRvsO4CV4aUeY67GelaujxY/lP5yVlaMjMM22pXKbKtUY9x050Mw==",
        "type": "package",
        "path": "microsoft.dotnet.platformabstractions/2.0.3",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/net45/Microsoft.DotNet.PlatformAbstractions.dll", "lib/netstandard1.3/Microsoft.DotNet.PlatformAbstractions.dll", "microsoft.dotnet.platformabstractions.2.0.3.nupkg.sha512", "microsoft.dotnet.platformabstractions.nuspec"]
      },
      "Microsoft.EntityFrameworkCore/2.0.1": {
        "sha512": "RlwInZHfIUWwFgQJCpUMKrLeE8QJ64MA/GxD881oTMFa9j7iiGKCtI0xK4J1NNgRKvgVDPJbh9CIGJiu0KEdeA==",
        "type": "package",
        "path": "microsoft.entityframeworkcore/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.EntityFrameworkCore.dll", "lib/netstandard2.0/Microsoft.EntityFrameworkCore.xml", "microsoft.entityframeworkcore.2.0.1.nupkg.sha512", "microsoft.entityframeworkcore.nuspec"]
      },
      "Microsoft.EntityFrameworkCore.Design/2.0.1": {
        "sha512": "gEdT/YSI/buO15X/UN+gQY6D7qeozRYU80WuesZCj33jJBw4wCHHn8SYcp38k2BPOBDC4I2AfsOFH6Vaf8CeLQ==",
        "type": "package",
        "path": "microsoft.entityframeworkcore.design/2.0.1",
        "files": ["lib/net461/Microsoft.EntityFrameworkCore.Design.dll", "lib/net461/Microsoft.EntityFrameworkCore.Design.xml", "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Design.dll", "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Design.xml", "microsoft.entityframeworkcore.design.2.0.1.nupkg.sha512", "microsoft.entityframeworkcore.design.nuspec"]
      },
      "Microsoft.EntityFrameworkCore.InMemory/2.0.1": {
        "sha512": "PIkjqb3gqli8d86OX2HeQpPv5vGXareCuf2IBrVf1+GoIyveZlwLSmsRtqgR3yXPbdeDZzqjCq4X/BDocvYrPg==",
        "type": "package",
        "path": "microsoft.entityframeworkcore.inmemory/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.EntityFrameworkCore.InMemory.dll", "lib/netstandard2.0/Microsoft.EntityFrameworkCore.InMemory.xml", "microsoft.entityframeworkcore.inmemory.2.0.1.nupkg.sha512", "microsoft.entityframeworkcore.inmemory.nuspec"]
      },
      "Microsoft.EntityFrameworkCore.Relational/2.0.1": {
        "sha512": "aZgfEDEzub+n9Kmsz/l4iiUHfB+R2iDDAFtW55OLpT7ANj7mS8k/bq8mqd60rVPgWKKy1l0+BK26ao4el/07lA==",
        "type": "package",
        "path": "microsoft.entityframeworkcore.relational/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.EntityFrameworkCore.Relational.dll", "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Relational.xml", "microsoft.entityframeworkcore.relational.2.0.1.nupkg.sha512", "microsoft.entityframeworkcore.relational.nuspec"]
      },
      "Microsoft.EntityFrameworkCore.Sqlite/2.0.1": {
        "sha512": "DviCFjsYHkLHQMRKUFEG/rx65NbaP0NGFskBnw1t9lPdkkLG8KoAzxOs4KvTHnuykPHs6V7qR9f703dH6WCwkQ==",
        "type": "package",
        "path": "microsoft.entityframeworkcore.sqlite/2.0.1",
        "files": ["microsoft.entityframeworkcore.sqlite.2.0.1.nupkg.sha512", "microsoft.entityframeworkcore.sqlite.nuspec"]
      },
      "Microsoft.EntityFrameworkCore.Sqlite.Core/2.0.1": {
        "sha512": "TOmLflU7sD3QLLRgPPPadUsouAG2XSKxgpIPnLKIr1GoAYwl7t80HtYMd6402Mkg3MuN3fz1s3lXZLeNj6wfpg==",
        "type": "package",
        "path": "microsoft.entityframeworkcore.sqlite.core/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.EntityFrameworkCore.Sqlite.dll", "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Sqlite.xml", "microsoft.entityframeworkcore.sqlite.core.2.0.1.nupkg.sha512", "microsoft.entityframeworkcore.sqlite.core.nuspec"]
      },
      "Microsoft.EntityFrameworkCore.SqlServer/2.0.1": {
        "sha512": "+UnKJpkVpuNWRjF3BWSzbkQLL7gxY18Hnh5uXmlagO4Ua8BstqWIJaIUV+Ps2rw/2n62UPTQQV9RQWggV7OH9Q==",
        "type": "package",
        "path": "microsoft.entityframeworkcore.sqlserver/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.EntityFrameworkCore.SqlServer.dll", "lib/netstandard2.0/Microsoft.EntityFrameworkCore.SqlServer.xml", "microsoft.entityframeworkcore.sqlserver.2.0.1.nupkg.sha512", "microsoft.entityframeworkcore.sqlserver.nuspec"]
      },
      "Microsoft.EntityFrameworkCore.Tools/2.0.1": {
        "sha512": "/z1xawAD0oL5AyFd3vn9E7L6mE2UfEU91KwMDWEp8o0+AOrP4ZocJS5Kot5VYJMfDUeAzDBBZPmJs+r6/YUEiA==",
        "type": "package",
        "path": "microsoft.entityframeworkcore.tools/2.0.1",
        "files": ["lib/netstandard2.0/_._", "microsoft.entityframeworkcore.tools.2.0.1.nupkg.sha512", "microsoft.entityframeworkcore.tools.nuspec", "tools/EntityFrameworkCore.PowerShell2.psd1", "tools/EntityFrameworkCore.PowerShell2.psm1", "tools/EntityFrameworkCore.psd1", "tools/EntityFrameworkCore.psm1", "tools/about_EntityFrameworkCore.help.txt", "tools/init.ps1", "tools/install.ps1", "tools/net461/ef.exe", "tools/net461/ef.exe.config", "tools/net461/ef.x86.exe", "tools/net461/ef.x86.exe.config", "tools/netcoreapp2.0/ef.dll", "tools/netcoreapp2.0/ef.runtimeconfig.json"]
      },
      "Microsoft.Extensions.Caching.Abstractions/2.0.0": {
        "sha512": "kGMEV53Od1ES0BDh7OOKbTW9Zu5dbbQ72yI936dvvbHlde3puuq/WRKAccFgcB2PuRjox1HFhA9+t53RYqfuEA==",
        "type": "package",
        "path": "microsoft.extensions.caching.abstractions/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Caching.Abstractions.dll", "lib/netstandard2.0/Microsoft.Extensions.Caching.Abstractions.xml", "microsoft.extensions.caching.abstractions.2.0.0.nupkg.sha512", "microsoft.extensions.caching.abstractions.nuspec"]
      },
      "Microsoft.Extensions.Caching.Memory/2.0.0": {
        "sha512": "NqvVdYLbX7N2J2Wz9y3zjhE66JRdROiZZsGhA2u4a9IcIq/jzINC/cLM96BHA+TSOZFPxVdWneqB6/yt9u846A==",
        "type": "package",
        "path": "microsoft.extensions.caching.memory/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Caching.Memory.dll", "lib/netstandard2.0/Microsoft.Extensions.Caching.Memory.xml", "microsoft.extensions.caching.memory.2.0.0.nupkg.sha512", "microsoft.extensions.caching.memory.nuspec"]
      },
      "Microsoft.Extensions.Caching.Redis/2.0.0": {
        "sha512": "FWKu406Tb/muSY6y9Zy9G2IwKOkN/8gsLhz/iUUyovY6t/6iK+IOza5enKPv7KgaY1kgSuxPD22tWlXLV5GmIQ==",
        "type": "package",
        "path": "microsoft.extensions.caching.redis/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Caching.Redis.dll", "lib/netstandard2.0/Microsoft.Extensions.Caching.Redis.xml", "microsoft.extensions.caching.redis.2.0.0.nupkg.sha512", "microsoft.extensions.caching.redis.nuspec"]
      },
      "Microsoft.Extensions.Caching.SqlServer/2.0.0": {
        "sha512": "ZPZZHu3LC43wNKvfjp/lDu5Qn1T/iLlOeEJcKoeafBQnMbGph8BR639o5XX/V1D5wMkK7RjQF5iosu9RMf9mmw==",
        "type": "package",
        "path": "microsoft.extensions.caching.sqlserver/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Caching.SqlServer.dll", "lib/netstandard2.0/Microsoft.Extensions.Caching.SqlServer.xml", "microsoft.extensions.caching.sqlserver.2.0.0.nupkg.sha512", "microsoft.extensions.caching.sqlserver.nuspec"]
      },
      "Microsoft.Extensions.Configuration/2.0.0": {
        "sha512": "SsI4RqI8EH00+cYO96tbftlh87sNUv1eeyuBU1XZdQkG0RrHAOjWgl7P0FoLeTSMXJpOnfweeOWj2d1/5H3FxA==",
        "type": "package",
        "path": "microsoft.extensions.configuration/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Configuration.dll", "lib/netstandard2.0/Microsoft.Extensions.Configuration.xml", "microsoft.extensions.configuration.2.0.0.nupkg.sha512", "microsoft.extensions.configuration.nuspec"]
      },
      "Microsoft.Extensions.Configuration.Abstractions/2.0.0": {
        "sha512": "rHFrXqMIvQNq51H8RYTO4IWmDOYh8NUzyqGlh0xHWTP6XYnKk7Ryinys2uDs+Vu88b3AMlM3gBBSs78m6OQpYQ==",
        "type": "package",
        "path": "microsoft.extensions.configuration.abstractions/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Configuration.Abstractions.dll", "lib/netstandard2.0/Microsoft.Extensions.Configuration.Abstractions.xml", "microsoft.extensions.configuration.abstractions.2.0.0.nupkg.sha512", "microsoft.extensions.configuration.abstractions.nuspec"]
      },
      "Microsoft.Extensions.Configuration.AzureKeyVault/2.0.0": {
        "sha512": "HjuOFvIz9xtzfg9AddX9pjFvghpYKxDwUleLfPORT5Pm7YO1RTq2uN9uc1TxhMglDabkpSuwlfWG1BN64fOHQQ==",
        "type": "package",
        "path": "microsoft.extensions.configuration.azurekeyvault/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Configuration.AzureKeyVault.dll", "lib/netstandard2.0/Microsoft.Extensions.Configuration.AzureKeyVault.xml", "microsoft.extensions.configuration.azurekeyvault.2.0.0.nupkg.sha512", "microsoft.extensions.configuration.azurekeyvault.nuspec"]
      },
      "Microsoft.Extensions.Configuration.Binder/2.0.0": {
        "sha512": "IznHHzGUtrdpuQqIUdmzF6TYPcsYHONhHh3o9dGp39sX/9Zfmt476UnhvU0UhXgJnXXAikt/MpN6AuSLCCMdEQ==",
        "type": "package",
        "path": "microsoft.extensions.configuration.binder/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Configuration.Binder.dll", "lib/netstandard2.0/Microsoft.Extensions.Configuration.Binder.xml", "microsoft.extensions.configuration.binder.2.0.0.nupkg.sha512", "microsoft.extensions.configuration.binder.nuspec"]
      },
      "Microsoft.Extensions.Configuration.CommandLine/2.0.0": {
        "sha512": "Vf2YKZFLx0lZjgGLhliYyhXzZOkpgrcF5RhpgjPsvdbxJ97jD/kPNXP0wmYnaF3IPzP/ro6z2zph6QzUophrkA==",
        "type": "package",
        "path": "microsoft.extensions.configuration.commandline/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Configuration.CommandLine.dll", "lib/netstandard2.0/Microsoft.Extensions.Configuration.CommandLine.xml", "microsoft.extensions.configuration.commandline.2.0.0.nupkg.sha512", "microsoft.extensions.configuration.commandline.nuspec"]
      },
      "Microsoft.Extensions.Configuration.EnvironmentVariables/2.0.0": {
        "sha512": "islcwe05LWFtAxGaJxoDbl4pj2nmG8nuW6dqYMZkPWIuHK7/46YELCbL+3Frl6X89qzDh5sj2PHgyWXTOAmwdA==",
        "type": "package",
        "path": "microsoft.extensions.configuration.environmentvariables/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Configuration.EnvironmentVariables.dll", "lib/netstandard2.0/Microsoft.Extensions.Configuration.EnvironmentVariables.xml", "microsoft.extensions.configuration.environmentvariables.2.0.0.nupkg.sha512", "microsoft.extensions.configuration.environmentvariables.nuspec"]
      },
      "Microsoft.Extensions.Configuration.FileExtensions/2.0.0": {
        "sha512": "ebFbu+vsz4rzeAICWavk9a0FutWVs7aNZap5k/IVxVhu2CnnhOp/H/gNtpzplrqjYDaNYdmv9a/DoUvH2ynVEQ==",
        "type": "package",
        "path": "microsoft.extensions.configuration.fileextensions/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Configuration.FileExtensions.dll", "lib/netstandard2.0/Microsoft.Extensions.Configuration.FileExtensions.xml", "microsoft.extensions.configuration.fileextensions.2.0.0.nupkg.sha512", "microsoft.extensions.configuration.fileextensions.nuspec"]
      },
      "Microsoft.Extensions.Configuration.Ini/2.0.0": {
        "sha512": "9nYhMNBO9zASwLrAR1xosrnf4SamRI2TQwXHn+DOZ5PpjzGtu7XNQ0PMmGZ6WjFbD/6iIQfbuxzd7tM7+Ziz2A==",
        "type": "package",
        "path": "microsoft.extensions.configuration.ini/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Configuration.Ini.dll", "lib/netstandard2.0/Microsoft.Extensions.Configuration.Ini.xml", "microsoft.extensions.configuration.ini.2.0.0.nupkg.sha512", "microsoft.extensions.configuration.ini.nuspec"]
      },
      "Microsoft.Extensions.Configuration.Json/2.0.0": {
        "sha512": "thPz4SckRGNqeLbdvJ619YxRFSkWuL1K5QqTMb3TVdEwjQj4O39yfUtjtI/XlWJiY7JKK4MUKAiQZVYc8ohKKg==",
        "type": "package",
        "path": "microsoft.extensions.configuration.json/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Configuration.Json.dll", "lib/netstandard2.0/Microsoft.Extensions.Configuration.Json.xml", "microsoft.extensions.configuration.json.2.0.0.nupkg.sha512", "microsoft.extensions.configuration.json.nuspec"]
      },
      "Microsoft.Extensions.Configuration.UserSecrets/2.0.0": {
        "sha512": "Nn9Gd4MsMKAzIwXhoz/pzPlngbgZDPlbWKWLSyL4nMFAnlQ8EubbealF69JvGBcK7DwdsMV5pz7a9EZFZQF6ww==",
        "type": "package",
        "path": "microsoft.extensions.configuration.usersecrets/2.0.0",
        "files": ["build/netstandard2.0/Microsoft.Extensions.Configuration.UserSecrets.targets", "lib/netstandard2.0/Microsoft.Extensions.Configuration.UserSecrets.dll", "lib/netstandard2.0/Microsoft.Extensions.Configuration.UserSecrets.xml", "microsoft.extensions.configuration.usersecrets.2.0.0.nupkg.sha512", "microsoft.extensions.configuration.usersecrets.nuspec"]
      },
      "Microsoft.Extensions.Configuration.Xml/2.0.0": {
        "sha512": "MxH2kk0846Og65bDiOoi+5u9GcnUF55qCBj2wo1r3rQcea53rFhHiGNEQyDaKFbsis8lPP8kq3Zaol1ZsZI4XQ==",
        "type": "package",
        "path": "microsoft.extensions.configuration.xml/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Configuration.Xml.dll", "lib/netstandard2.0/Microsoft.Extensions.Configuration.Xml.xml", "microsoft.extensions.configuration.xml.2.0.0.nupkg.sha512", "microsoft.extensions.configuration.xml.nuspec"]
      },
      "Microsoft.Extensions.DependencyInjection/2.0.0": {
        "sha512": "wakg18gHYiUL1pcjjyZuYk6OvDpbSw1E7IWxm78TMepsr+gQ8W0tWzuRm0q/9RFblngwPwo15rrgZSUV51W5Iw==",
        "type": "package",
        "path": "microsoft.extensions.dependencyinjection/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.DependencyInjection.dll", "lib/netstandard2.0/Microsoft.Extensions.DependencyInjection.xml", "microsoft.extensions.dependencyinjection.2.0.0.nupkg.sha512", "microsoft.extensions.dependencyinjection.nuspec"]
      },
      "Microsoft.Extensions.DependencyInjection.Abstractions/2.0.0": {
        "sha512": "eUdJ0Q/GfVyUJc0Jal5L1QZLceL78pvEM9wEKcHeI24KorqMDoVX+gWsMGLulQMfOwsUaPtkpQM2pFERTzSfSg==",
        "type": "package",
        "path": "microsoft.extensions.dependencyinjection.abstractions/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.DependencyInjection.Abstractions.dll", "lib/netstandard2.0/Microsoft.Extensions.DependencyInjection.Abstractions.xml", "microsoft.extensions.dependencyinjection.abstractions.2.0.0.nupkg.sha512", "microsoft.extensions.dependencyinjection.abstractions.nuspec"]
      },
      "Microsoft.Extensions.DependencyModel/2.0.3": {
        "sha512": "OiNYN/QeZLuYcn4CvYrOmYgODPB1Jpqft+cT4F3Hkq5poj+1DLfbIBftMI/Pn8J7DyHhYeBMLxJUuugjvk/Fuw==",
        "type": "package",
        "path": "microsoft.extensions.dependencymodel/2.0.3",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/net451/Microsoft.Extensions.DependencyModel.dll", "lib/netstandard1.3/Microsoft.Extensions.DependencyModel.dll", "lib/netstandard1.6/Microsoft.Extensions.DependencyModel.dll", "microsoft.extensions.dependencymodel.2.0.3.nupkg.sha512", "microsoft.extensions.dependencymodel.nuspec"]
      },
      "Microsoft.Extensions.DiagnosticAdapter/2.0.0": {
        "sha512": "b+LG3hhpIrNOAG+5Fxdt25wynlzawteFEuSUblM4a7flLpQpiZ0mAJMBuA+bIluGAfcJnFDTghF8MfE57fR6Hg==",
        "type": "package",
        "path": "microsoft.extensions.diagnosticadapter/2.0.0",
        "files": ["lib/net461/Microsoft.Extensions.DiagnosticAdapter.dll", "lib/net461/Microsoft.Extensions.DiagnosticAdapter.xml", "lib/netcoreapp2.0/Microsoft.Extensions.DiagnosticAdapter.dll", "lib/netcoreapp2.0/Microsoft.Extensions.DiagnosticAdapter.xml", "microsoft.extensions.diagnosticadapter.2.0.0.nupkg.sha512", "microsoft.extensions.diagnosticadapter.nuspec"]
      },
      "Microsoft.Extensions.FileProviders.Abstractions/2.0.0": {
        "sha512": "Z0AK+hmLO33WAXQ5P1uPzhH7z5yjDHX/XnUefXxE//SyvCb9x4cVjND24dT5566t/yzGp8/WLD7EG9KQKZZklQ==",
        "type": "package",
        "path": "microsoft.extensions.fileproviders.abstractions/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.FileProviders.Abstractions.dll", "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Abstractions.xml", "microsoft.extensions.fileproviders.abstractions.2.0.0.nupkg.sha512", "microsoft.extensions.fileproviders.abstractions.nuspec"]
      },
      "Microsoft.Extensions.FileProviders.Composite/2.0.0": {
        "sha512": "/Q95H1pFJuss7np9Pp6mKxg4ornSrBnrYwNkgHnW+YRqhjfaQLVgL+X+LN95M9YeGPNA4QHJDkbrqQ/n+jYc9g==",
        "type": "package",
        "path": "microsoft.extensions.fileproviders.composite/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.FileProviders.Composite.dll", "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Composite.xml", "microsoft.extensions.fileproviders.composite.2.0.0.nupkg.sha512", "microsoft.extensions.fileproviders.composite.nuspec"]
      },
      "Microsoft.Extensions.FileProviders.Embedded/2.0.0": {
        "sha512": "A1pniIZjS/8z8HQWIzm/datI6J0X4R9wngmVLGbfZ1LIj78oOR+sdqNHo5yvAwJz38TR9fG2E3b410wuoGxBKw==",
        "type": "package",
        "path": "microsoft.extensions.fileproviders.embedded/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.FileProviders.Embedded.dll", "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Embedded.xml", "microsoft.extensions.fileproviders.embedded.2.0.0.nupkg.sha512", "microsoft.extensions.fileproviders.embedded.nuspec"]
      },
      "Microsoft.Extensions.FileProviders.Physical/2.0.0": {
        "sha512": "DKO2j2socZbHNCCVEWsLVpB3AQIIzKYFNyITVeWdA1jQ829GJIQf4MUD04+1c+Q2kbK03pIKQZmEy4CGIfgDZw==",
        "type": "package",
        "path": "microsoft.extensions.fileproviders.physical/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.FileProviders.Physical.dll", "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Physical.xml", "microsoft.extensions.fileproviders.physical.2.0.0.nupkg.sha512", "microsoft.extensions.fileproviders.physical.nuspec"]
      },
      "Microsoft.Extensions.FileSystemGlobbing/2.0.0": {
        "sha512": "UC87vRDUB7/vSaNY/FVhbdAyRkfFBTkYmcUoglxk6TyTojhSqYaG5pZsoP4e1ZuXktFXJXJBTvK8U/QwCo0z3g==",
        "type": "package",
        "path": "microsoft.extensions.filesystemglobbing/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.FileSystemGlobbing.dll", "lib/netstandard2.0/Microsoft.Extensions.FileSystemGlobbing.xml", "microsoft.extensions.filesystemglobbing.2.0.0.nupkg.sha512", "microsoft.extensions.filesystemglobbing.nuspec"]
      },
      "Microsoft.Extensions.Hosting.Abstractions/2.0.1": {
        "sha512": "A43O0JzdTE+u5t2pFeraN+3fjlV6jcX3Ra5wIscCX1cM2RHDoOLDQmoDpvDti0ct5TsBEDHVTycbyFqtu0fm+Q==",
        "type": "package",
        "path": "microsoft.extensions.hosting.abstractions/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Hosting.Abstractions.dll", "lib/netstandard2.0/Microsoft.Extensions.Hosting.Abstractions.xml", "microsoft.extensions.hosting.abstractions.2.0.1.nupkg.sha512", "microsoft.extensions.hosting.abstractions.nuspec"]
      },
      "Microsoft.Extensions.Identity.Core/2.0.1": {
        "sha512": "2VEghVORmv8FFE1utIcw/7ct8pyzvzst8uELnftf+xKVFiTPYFThlTFzq+ZuVCGgI7r9YayUUdZGuoDFvmJfFA==",
        "type": "package",
        "path": "microsoft.extensions.identity.core/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Identity.Core.dll", "lib/netstandard2.0/Microsoft.Extensions.Identity.Core.xml", "microsoft.extensions.identity.core.2.0.1.nupkg.sha512", "microsoft.extensions.identity.core.nuspec"]
      },
      "Microsoft.Extensions.Identity.Stores/2.0.1": {
        "sha512": "A/sig+Oq5wQ2dUHawd2oH4QMqZVT9LLDZhsWCd+lfLavxEUJ7Lv2KI2wUeP84SQyeJjirsOAet0zkwVMS0nkMw==",
        "type": "package",
        "path": "microsoft.extensions.identity.stores/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Identity.Stores.dll", "lib/netstandard2.0/Microsoft.Extensions.Identity.Stores.xml", "microsoft.extensions.identity.stores.2.0.1.nupkg.sha512", "microsoft.extensions.identity.stores.nuspec"]
      },
      "Microsoft.Extensions.Localization/2.0.1": {
        "sha512": "47oTU1KBYU4xzJZlhQPJRbDCmjokjEtq5Iroy59nAGbPOfUrhBTgp7ALsoba/PVR/gURnosCg0YjHORyijhzUA==",
        "type": "package",
        "path": "microsoft.extensions.localization/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Localization.dll", "lib/netstandard2.0/Microsoft.Extensions.Localization.xml", "microsoft.extensions.localization.2.0.1.nupkg.sha512", "microsoft.extensions.localization.nuspec"]
      },
      "Microsoft.Extensions.Localization.Abstractions/2.0.1": {
        "sha512": "A5uClthpWrEtqiK9tqwm8LIW449FLhSPIBs4hU/pINGXGgxqQC4dr2ZW0JmbGe/xL3riU7Me3jYJDR4uznzN7g==",
        "type": "package",
        "path": "microsoft.extensions.localization.abstractions/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Localization.Abstractions.dll", "lib/netstandard2.0/Microsoft.Extensions.Localization.Abstractions.xml", "microsoft.extensions.localization.abstractions.2.0.1.nupkg.sha512", "microsoft.extensions.localization.abstractions.nuspec"]
      },
      "Microsoft.Extensions.Logging/2.0.0": {
        "sha512": "VP10syWV/vxYYMKgZ2eDESmUsz3gPxvBn5J6tkVN8lI4M+dF43RN8fWsEPbcAneDmZrHl3Pv23z05nmyGkJlpg==",
        "type": "package",
        "path": "microsoft.extensions.logging/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Logging.dll", "lib/netstandard2.0/Microsoft.Extensions.Logging.xml", "microsoft.extensions.logging.2.0.0.nupkg.sha512", "microsoft.extensions.logging.nuspec"]
      },
      "Microsoft.Extensions.Logging.Abstractions/2.0.0": {
        "sha512": "6ZCllUYGFukkymSTx3Yr0G/ajRxoNJp7/FqSxSB4fGISST54ifBhgu4Nc0ItGi3i6DqwuNd8SUyObmiC++AO2Q==",
        "type": "package",
        "path": "microsoft.extensions.logging.abstractions/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Logging.Abstractions.dll", "lib/netstandard2.0/Microsoft.Extensions.Logging.Abstractions.xml", "microsoft.extensions.logging.abstractions.2.0.0.nupkg.sha512", "microsoft.extensions.logging.abstractions.nuspec"]
      },
      "Microsoft.Extensions.Logging.AzureAppServices/2.0.0": {
        "sha512": "cxfmUAnNsETcGHlGFpaihN/wILPDD+4p4VrFzcskvOquwMSxt6O6SmPLybnbbvUvs26SCmP7Y4eptjO2ehfduA==",
        "type": "package",
        "path": "microsoft.extensions.logging.azureappservices/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Logging.AzureAppServices.dll", "lib/netstandard2.0/Microsoft.Extensions.Logging.AzureAppServices.xml", "microsoft.extensions.logging.azureappservices.2.0.0.nupkg.sha512", "microsoft.extensions.logging.azureappservices.nuspec"]
      },
      "Microsoft.Extensions.Logging.Configuration/2.0.0": {
        "sha512": "jUjA+ROjh1R1TggLh4aw6PZFxHce4UYeTsX3NUjdrOd9RbuDSzJ8bkNhcPgYjLvoTNIRIlHUSByw3PjBTbxExA==",
        "type": "package",
        "path": "microsoft.extensions.logging.configuration/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Logging.Configuration.dll", "lib/netstandard2.0/Microsoft.Extensions.Logging.Configuration.xml", "microsoft.extensions.logging.configuration.2.0.0.nupkg.sha512", "microsoft.extensions.logging.configuration.nuspec"]
      },
      "Microsoft.Extensions.Logging.Console/2.0.0": {
        "sha512": "NBjNp899FW7byDsex2ch/CkwNd2GbuHQIXCbvUVqOzSbnIsYrxOaR//BY2h2apJhnqm10IPLGkcjXxUyfAcIKA==",
        "type": "package",
        "path": "microsoft.extensions.logging.console/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Logging.Console.dll", "lib/netstandard2.0/Microsoft.Extensions.Logging.Console.xml", "microsoft.extensions.logging.console.2.0.0.nupkg.sha512", "microsoft.extensions.logging.console.nuspec"]
      },
      "Microsoft.Extensions.Logging.Debug/2.0.0": {
        "sha512": "29Zn5m9yb4NEP+qbeLl+7F2lDskDfrs8NbrM8eJ+k/pYE8JksRUEFxHp1bcpGSfGP9w0pMQMOKrVcwD3u5sPog==",
        "type": "package",
        "path": "microsoft.extensions.logging.debug/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Logging.Debug.dll", "lib/netstandard2.0/Microsoft.Extensions.Logging.Debug.xml", "microsoft.extensions.logging.debug.2.0.0.nupkg.sha512", "microsoft.extensions.logging.debug.nuspec"]
      },
      "Microsoft.Extensions.Logging.EventSource/2.0.0": {
        "sha512": "dsEyjnChr3F0rJZFAgfJC6aoIPLHfpBBTw3CYfEMEc7Pv7h0u6RaFO9gAq6dhfeBLhLfn0hyUrGmYIRDpSxs3w==",
        "type": "package",
        "path": "microsoft.extensions.logging.eventsource/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Logging.EventSource.dll", "lib/netstandard2.0/Microsoft.Extensions.Logging.EventSource.xml", "microsoft.extensions.logging.eventsource.2.0.0.nupkg.sha512", "microsoft.extensions.logging.eventsource.nuspec"]
      },
      "Microsoft.Extensions.Logging.TraceSource/2.0.0": {
        "sha512": "lbNYFjLU4RJvhYtO5jLa+d+T8OC495SkSfXFwFDeR9qtFqhrrCHe8Htjx4wR8HmFqugaJ2Yhzw9AqdvZbEy3Eg==",
        "type": "package",
        "path": "microsoft.extensions.logging.tracesource/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Logging.TraceSource.dll", "lib/netstandard2.0/Microsoft.Extensions.Logging.TraceSource.xml", "microsoft.extensions.logging.tracesource.2.0.0.nupkg.sha512", "microsoft.extensions.logging.tracesource.nuspec"]
      },
      "Microsoft.Extensions.ObjectPool/2.0.0": {
        "sha512": "drOmgNZCJiNEqFM/TvyqwtogS8wqoWGQCW5KB/CVGKL6VXHw8OOMdaHyspp8HPstP9UDnrnuq+8eaCaAcQg6tA==",
        "type": "package",
        "path": "microsoft.extensions.objectpool/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.ObjectPool.dll", "lib/netstandard2.0/Microsoft.Extensions.ObjectPool.xml", "microsoft.extensions.objectpool.2.0.0.nupkg.sha512", "microsoft.extensions.objectpool.nuspec"]
      },
      "Microsoft.Extensions.Options/2.0.0": {
        "sha512": "sAKBgjl2gWsECBLLR9K54T7/uZaP2n9GhMYHay/oOLfvpvX0+iNAlQ2NJgVE352C9Fs5CDV3VbNTK8T2aNKQFA==",
        "type": "package",
        "path": "microsoft.extensions.options/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Options.dll", "lib/netstandard2.0/Microsoft.Extensions.Options.xml", "microsoft.extensions.options.2.0.0.nupkg.sha512", "microsoft.extensions.options.nuspec"]
      },
      "Microsoft.Extensions.Options.ConfigurationExtensions/2.0.0": {
        "sha512": "Y/lGICwO27fCkQRK3tZseVzFjZaxfGmui990E67sB4MuiPzdJHnJDS/BeYWrHShSSBgCl4KyKRx4ux686fftPg==",
        "type": "package",
        "path": "microsoft.extensions.options.configurationextensions/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Options.ConfigurationExtensions.dll", "lib/netstandard2.0/Microsoft.Extensions.Options.ConfigurationExtensions.xml", "microsoft.extensions.options.configurationextensions.2.0.0.nupkg.sha512", "microsoft.extensions.options.configurationextensions.nuspec"]
      },
      "Microsoft.Extensions.PlatformAbstractions/1.1.0": {
        "sha512": "H6ZsQzxYw/6k2DfEQRXdC+vQ6obd6Uba3uGJrnJ2vG4PRXjQZ7seB13JdCfE72abp8E6Fk3gGgDzfJiLZi5ZpQ==",
        "type": "package",
        "path": "microsoft.extensions.platformabstractions/1.1.0",
        "files": ["lib/net451/Microsoft.Extensions.PlatformAbstractions.dll", "lib/net451/Microsoft.Extensions.PlatformAbstractions.xml", "lib/netstandard1.3/Microsoft.Extensions.PlatformAbstractions.dll", "lib/netstandard1.3/Microsoft.Extensions.PlatformAbstractions.xml", "microsoft.extensions.platformabstractions.1.1.0.nupkg.sha512", "microsoft.extensions.platformabstractions.nuspec"]
      },
      "Microsoft.Extensions.Primitives/2.0.0": {
        "sha512": "ukg53qNlqTrK38WA30b5qhw0GD7y3jdI9PHHASjdKyTcBHTevFM2o23tyk3pWCgAV27Bbkm+CPQ2zUe1ZOuYSA==",
        "type": "package",
        "path": "microsoft.extensions.primitives/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.Primitives.dll", "lib/netstandard2.0/Microsoft.Extensions.Primitives.xml", "microsoft.extensions.primitives.2.0.0.nupkg.sha512", "microsoft.extensions.primitives.nuspec"]
      },
      "Microsoft.Extensions.WebEncoders/2.0.0": {
        "sha512": "5lXmAmfMaVssZwruaPM5hgk7QfzL1dfAaPEw9Ex24wt/D3EPRt7kOqsZoJP3IhVBoccjsTj8DsFJHtQ8bZIFkA==",
        "type": "package",
        "path": "microsoft.extensions.webencoders/2.0.0",
        "files": ["lib/netstandard2.0/Microsoft.Extensions.WebEncoders.dll", "lib/netstandard2.0/Microsoft.Extensions.WebEncoders.xml", "microsoft.extensions.webencoders.2.0.0.nupkg.sha512", "microsoft.extensions.webencoders.nuspec"]
      },
      "Microsoft.IdentityModel.Clients.ActiveDirectory/3.14.1": {
        "sha512": "GlyzF4FWsn3LXC6rrzw6Yg2nMbGLx+7JS9a6Z8n7jhqPa5cMiNEX01tBUO1v3A9p1mk+gQzHWJheAsSpOLp/ew==",
        "type": "package",
        "path": "microsoft.identitymodel.clients.activedirectory/3.14.1",
        "files": ["lib/MonoAndroid10/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.XML", "lib/MonoAndroid10/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.dll", "lib/MonoAndroid10/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.pdb", "lib/MonoAndroid10/Microsoft.IdentityModel.Clients.ActiveDirectory.dll", "lib/MonoAndroid10/Microsoft.IdentityModel.Clients.ActiveDirectory.pdb", "lib/MonoAndroid10/Microsoft.IdentityModel.Clients.ActiveDirectory.xml", "lib/Xamarin.iOS10/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.XML", "lib/Xamarin.iOS10/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.dll", "lib/Xamarin.iOS10/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.pdb", "lib/Xamarin.iOS10/Microsoft.IdentityModel.Clients.ActiveDirectory.dll", "lib/Xamarin.iOS10/Microsoft.IdentityModel.Clients.ActiveDirectory.pdb", "lib/Xamarin.iOS10/Microsoft.IdentityModel.Clients.ActiveDirectory.xml", "lib/net45/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.XML", "lib/net45/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.dll", "lib/net45/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.pdb", "lib/net45/Microsoft.IdentityModel.Clients.ActiveDirectory.dll", "lib/net45/Microsoft.IdentityModel.Clients.ActiveDirectory.pdb", "lib/net45/Microsoft.IdentityModel.Clients.ActiveDirectory.xml", "lib/netcore45/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.XML", "lib/netcore45/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.dll", "lib/netcore45/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.pdb", "lib/netcore45/Microsoft.IdentityModel.Clients.ActiveDirectory.dll", "lib/netcore45/Microsoft.IdentityModel.Clients.ActiveDirectory.pdb", "lib/netcore45/Microsoft.IdentityModel.Clients.ActiveDirectory.xml", "lib/netstandard1.3/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.dll", "lib/netstandard1.3/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.pdb", "lib/netstandard1.3/Microsoft.IdentityModel.Clients.ActiveDirectory.dll", "lib/netstandard1.3/Microsoft.IdentityModel.Clients.ActiveDirectory.pdb", "lib/netstandard1.3/Microsoft.IdentityModel.Clients.ActiveDirectory.xml", "lib/portable-net45+win/Microsoft.IdentityModel.Clients.ActiveDirectory.dll", "lib/portable-net45+win/Microsoft.IdentityModel.Clients.ActiveDirectory.pdb", "lib/portable-net45+win/Microsoft.IdentityModel.Clients.ActiveDirectory.xml", "microsoft.identitymodel.clients.activedirectory.3.14.1.nupkg.sha512", "microsoft.identitymodel.clients.activedirectory.nuspec", "src/src/ADAL.Common/AdalEventSource.cs", "src/src/ADAL.Common/AuthenticationContextIntegratedAuthExtensions.cs", "src/src/ADAL.Common/AuthenticationResult.cs", "src/src/ADAL.Common/ClientAssertionCertificate.cs", "src/src/ADAL.Common/CommonAssemblyInfo.cs", "src/src/ADAL.Common/Constants.cs", "src/src/ADAL.Common/CryptographyHelper.cs", "src/src/ADAL.Common/EncodingHelper.cs", "src/src/ADAL.Common/LocalSettingsHelper.cs", "src/src/ADAL.Common/Logger.cs", "src/src/ADAL.Common/PromptBehavior.cs", "src/src/ADAL.Common/TokenCache.cs", "src/src/ADAL.Common/WebProxyProvider.cs", "src/src/ADAL.PCL.Android/ADAL.PCL.Android.csproj", "src/src/ADAL.PCL.Android/AuthenticationAgentActivity.cs", "src/src/ADAL.PCL.Android/AuthenticationAgentContinuationHelper.cs", "src/src/ADAL.PCL.Android/AuthenticationRequest.cs", "src/src/ADAL.PCL.Android/BrokerConstants.cs", "src/src/ADAL.PCL.Android/BrokerHelper.cs", "src/src/ADAL.PCL.Android/BrokerProxy.cs", "src/src/ADAL.PCL.Android/Constants.cs", "src/src/ADAL.PCL.Android/CryptographyHelper.cs", "src/src/ADAL.PCL.Android/DeviceAuthHelper.cs", "src/src/ADAL.PCL.Android/Logger.cs", "src/src/ADAL.PCL.Android/PlatformInformation.cs", "src/src/ADAL.PCL.Android/PlatformParameters.cs", "src/src/ADAL.PCL.Android/Properties/AssemblyInfo.cs", "src/src/ADAL.PCL.Android/Resources/AboutResources.txt", "src/src/ADAL.PCL.Android/Resources/Resource.Designer.cs", "src/src/ADAL.PCL.Android/Resources/Values/Strings.xml", "src/src/ADAL.PCL.Android/Resources/layout/WebAuthenticationBroker.axml", "src/src/ADAL.PCL.Android/TokenCachePlugin.cs", "src/src/ADAL.PCL.Android/WebProxyProvider.cs", "src/src/ADAL.PCL.Android/WebUI.cs", "src/src/ADAL.PCL.Android/WebUIFactory.cs", "src/src/ADAL.PCL.CoreCLR/ADAL.PCL.CoreCLR.csproj", "src/src/ADAL.PCL.CoreCLR/BrokerHelper.cs", "src/src/ADAL.PCL.CoreCLR/ClientAssertionCertificate.cs", "src/src/ADAL.PCL.CoreCLR/CryptographyHelper.cs", "src/src/ADAL.PCL.CoreCLR/DeviceAuthHelper.cs", "src/src/ADAL.PCL.CoreCLR/PlatformInformation.cs", "src/src/ADAL.PCL.CoreCLR/PlatformParameters.cs", "src/src/ADAL.PCL.CoreCLR/Properties/AssemblyInfo.cs", "src/src/ADAL.PCL.CoreCLR/TokenCachePlugin.cs", "src/src/ADAL.PCL.CoreCLR/WebProxyProvider.cs", "src/src/ADAL.PCL.CoreCLR/WebUIFactory.cs", "src/src/ADAL.PCL.Desktop/ADAL.PCL.Desktop.csproj", "src/src/ADAL.PCL.Desktop/BrokerHelper.cs", "src/src/ADAL.PCL.Desktop/CryptographyHelper.cs", "src/src/ADAL.PCL.Desktop/CustomWebBrowser.CustomWebBrowserEvent.cs", "src/src/ADAL.PCL.Desktop/CustomWebBrowser.cs", "src/src/ADAL.PCL.Desktop/DeviceAuthHelper.cs", "src/src/ADAL.PCL.Desktop/InteractiveWebUI.cs", "src/src/ADAL.PCL.Desktop/Native/BCryptNative.cs", "src/src/ADAL.PCL.Desktop/Native/ICngAlgorithm.cs", "src/src/ADAL.PCL.Desktop/Native/ICngAsymmetricAlgorithm.cs", "src/src/ADAL.PCL.Desktop/Native/NCryptNative.cs", "src/src/ADAL.PCL.Desktop/Native/RSACng.cs", "src/src/ADAL.PCL.Desktop/Native/Win32Native.cs", "src/src/ADAL.PCL.Desktop/Native/X509Native.cs", "src/src/ADAL.PCL.Desktop/NavigateErrorStatus.cs", "src/src/ADAL.PCL.Desktop/PlatformInformation.cs", "src/src/ADAL.PCL.Desktop/PlatformParameters.cs", "src/src/ADAL.PCL.Desktop/Properties/AssemblyInfo.cs", "src/src/ADAL.PCL.Desktop/SecureClientSecret.cs", "src/src/ADAL.PCL.Desktop/SilentWebUI.cs", "src/src/ADAL.PCL.Desktop/SilentWebUIDoneEventArgs.cs", "src/src/ADAL.PCL.Desktop/SilentWindowsFormsAuthenticationDialog.cs", "src/src/ADAL.PCL.Desktop/StaTaskScheduler.cs", "src/src/ADAL.PCL.Desktop/TokenCachePlugin.cs", "src/src/ADAL.PCL.Desktop/UserPasswordCredential.cs", "src/src/ADAL.PCL.Desktop/WebBrowserInterfaces.cs", "src/src/ADAL.PCL.Desktop/WebBrowserNavigateErrorEventArgs.cs", "src/src/ADAL.PCL.Desktop/WebUI.cs", "src/src/ADAL.PCL.Desktop/WebUIFactory.cs", "src/src/ADAL.PCL.Desktop/WinFormWebAuthenticationDialog.cs", "src/src/ADAL.PCL.Desktop/WindowsFormsWebAuthenticationDialogBase.cs", "src/src/ADAL.PCL.WinRT/ADAL.PCL.WinRT.csproj", "src/src/ADAL.PCL.WinRT/BrokerHelper.cs", "src/src/ADAL.PCL.WinRT/CryptographyHelper.cs", "src/src/ADAL.PCL.WinRT/DeviceAuthHelper.cs", "src/src/ADAL.PCL.WinRT/PlatformInformation.cs", "src/src/ADAL.PCL.WinRT/PlatformParameters.cs", "src/src/ADAL.PCL.WinRT/Properties/AssemblyInfo.cs", "src/src/ADAL.PCL.WinRT/TokenCachePlugin.cs", "src/src/ADAL.PCL.WinRT/WebUI.cs", "src/src/ADAL.PCL.WinRT/WebUIFactory.cs", "src/src/ADAL.PCL.iOS/ADAL.PCL.iOS.csproj", "src/src/ADAL.PCL.iOS/AdalCustomUrlProtocol.cs", "src/src/ADAL.PCL.iOS/AdalInitializer.cs", "src/src/ADAL.PCL.iOS/AuthenticationAgentUINavigationController.cs", "src/src/ADAL.PCL.iOS/AuthenticationAgentUIViewController.cs", "src/src/ADAL.PCL.iOS/AuthenticationContinuationHelper.cs", "src/src/ADAL.PCL.iOS/BrokerConstants.cs", "src/src/ADAL.PCL.iOS/BrokerHelper.cs", "src/src/ADAL.PCL.iOS/BrokerKeyHelper.cs", "src/src/ADAL.PCL.iOS/Constants.cs", "src/src/ADAL.PCL.iOS/CryptographyHelper.cs", "src/src/ADAL.PCL.iOS/DeviceAuthHelper.cs", "src/src/ADAL.PCL.iOS/GlobalSuppressions.cs", "src/src/ADAL.PCL.iOS/Logger.cs", "src/src/ADAL.PCL.iOS/PlatformInformation.cs", "src/src/ADAL.PCL.iOS/PlatformParameters.cs", "src/src/ADAL.PCL.iOS/Properties/AssemblyInfo.cs", "src/src/ADAL.PCL.iOS/TokenCachePlugin.cs", "src/src/ADAL.PCL.iOS/WebUI.cs", "src/src/ADAL.PCL.iOS/WebUIFactory.cs", "src/src/ADAL.PCL/ADAL.PCL.csproj", "src/src/ADAL.PCL/AdalOption.cs", "src/src/ADAL.PCL/AuthenticationContext.cs", "src/src/ADAL.PCL/AuthenticationParameters.cs", "src/src/ADAL.PCL/AuthenticationResult.cs", "src/src/ADAL.PCL/Authority/Authenticator.cs", "src/src/ADAL.PCL/Authority/AuthenticatorTemplate.cs", "src/src/ADAL.PCL/Authority/AuthenticatorTemplateList.cs", "src/src/ADAL.PCL/Authority/AuthorizationResult.cs", "src/src/ADAL.PCL/Authority/DeviceAuthJWTResponse.cs", "src/src/ADAL.PCL/Authority/IdToken.cs", "src/src/ADAL.PCL/Authority/RequestData.cs", "src/src/ADAL.PCL/Authority/RequestParameters.cs", "src/src/ADAL.PCL/Authority/TokenResponse.cs", "src/src/ADAL.PCL/Cache/CacheQueryData.cs", "src/src/ADAL.PCL/Cache/TokenCacheKey.cs", "src/src/ADAL.PCL/ClientAssertion.cs", "src/src/ADAL.PCL/ClientCredential.cs", "src/src/ADAL.PCL/ClientCreds/ClientKey.cs", "src/src/ADAL.PCL/ClientCreds/JsonWebToken.cs", "src/src/ADAL.PCL/DeviceCodeResult.cs", "src/src/ADAL.PCL/Exceptions/AdalException.cs", "src/src/ADAL.PCL/Exceptions/AdalServiceException.cs", "src/src/ADAL.PCL/Exceptions/AdalSilentTokenAcquisitionException.cs", "src/src/ADAL.PCL/Exceptions/AdalUserMismatchException.cs", "src/src/ADAL.PCL/Exceptions/HttpRequestWrapperException.cs", "src/src/ADAL.PCL/Flows/AcquireTokenByAuthorizationCodeHandler.cs", "src/src/ADAL.PCL/Flows/AcquireTokenForClientHandler.cs", "src/src/ADAL.PCL/Flows/AcquireTokenHandlerBase.cs", "src/src/ADAL.PCL/Flows/AcquireTokenInteractiveHandler.cs", "src/src/ADAL.PCL/Flows/AcquireTokenOnBehalfHandler.cs", "src/src/ADAL.PCL/Flows/AcquireTokenSilentHandler.cs", "src/src/ADAL.PCL/Flows/AuthenticationResultEx.cs", "src/src/ADAL.PCL/Flows/CallState.cs", "src/src/ADAL.PCL/Flows/DeviceCode/AcquireDeviceCodeHandler.cs", "src/src/ADAL.PCL/Flows/DeviceCode/AcquireTokenByDeviceCodeHandler.cs", "src/src/ADAL.PCL/Flows/DeviceCode/DeviceCodeResponse.cs", "src/src/ADAL.PCL/Flows/NonInteractive/AcquireTokenNonInteractiveHandler.cs", "src/src/ADAL.PCL/Flows/NonInteractive/MexParser.cs", "src/src/ADAL.PCL/Flows/NonInteractive/UserRealmDiscoveryResponse.cs", "src/src/ADAL.PCL/Flows/NonInteractive/WsTrustRequest.cs", "src/src/ADAL.PCL/Flows/NonInteractive/WsTrustResponse.cs", "src/src/ADAL.PCL/Http/AdalHttpClient.cs", "src/src/ADAL.PCL/Http/HttpClientFactory.cs", "src/src/ADAL.PCL/Http/HttpClientWrapper.cs", "src/src/ADAL.PCL/Http/HttpMessageHandlerFactory.cs", "src/src/ADAL.PCL/Http/HttpWebResponseWrapper.cs", "src/src/ADAL.PCL/Http/IHttpWebResponse.cs", "src/src/ADAL.PCL/IAdalLogCallback.cs", "src/src/ADAL.PCL/IClientAssertionCertificate.cs", "src/src/ADAL.PCL/IPlatformParameters.cs", "src/src/ADAL.PCL/ISecureClientSecret.cs", "src/src/ADAL.PCL/Platform/IBrokerHelper.cs", "src/src/ADAL.PCL/Platform/ICryptographyHelper.cs", "src/src/ADAL.PCL/Platform/IDeviceAuthHelper.cs", "src/src/ADAL.PCL/Platform/IHttpClient.cs", "src/src/ADAL.PCL/Platform/IHttpClientFactory.cs", "src/src/ADAL.PCL/Platform/ITokenCachePlugin.cs", "src/src/ADAL.PCL/Platform/IWebProxyProvider.cs", "src/src/ADAL.PCL/Platform/IWebUI.cs", "src/src/ADAL.PCL/Platform/IWebUIFactory.cs", "src/src/ADAL.PCL/Platform/LoggerBase.cs", "src/src/ADAL.PCL/Platform/PlatformInformationBase.cs", "src/src/ADAL.PCL/Platform/PlatformPlugin.cs", "src/src/ADAL.PCL/Properties/AssemblyInfo.cs", "src/src/ADAL.PCL/TokenCache.cs", "src/src/ADAL.PCL/TokenCacheItem.cs", "src/src/ADAL.PCL/TokenCacheNotificationArgs.cs", "src/src/ADAL.PCL/UserAssertion.cs", "src/src/ADAL.PCL/UserCredential.cs", "src/src/ADAL.PCL/UserIdentifier.cs", "src/src/ADAL.PCL/UserInfo.cs", "src/src/ADAL.PCL/Utilities/AdalIdHelper.cs", "src/src/ADAL.PCL/Utilities/Base64UrlEncoder.cs", "src/src/ADAL.PCL/Utilities/Constants.cs", "src/src/ADAL.PCL/Utilities/EncodingHelper.cs", "src/src/ADAL.PCL/Utilities/JsonHelper.cs", "src/src/ADAL.PCL/Utilities/OAuthConstants.cs"]
      },
      "Microsoft.IdentityModel.Logging/1.1.4": {
        "sha512": "j7t22EsDOuo0IXqAbp6ijdB1GuaY8cu3YoPNZpymOhUMTVC+wRTV0IHqxL31HacCnJHU/igsqe70fDKZgZu3oA==",
        "type": "package",
        "path": "microsoft.identitymodel.logging/1.1.4",
        "files": ["lib/net45/Microsoft.IdentityModel.Logging.dll", "lib/net45/Microsoft.IdentityModel.Logging.xml", "lib/net451/Microsoft.IdentityModel.Logging.dll", "lib/net451/Microsoft.IdentityModel.Logging.xml", "lib/netstandard1.4/Microsoft.IdentityModel.Logging.dll", "lib/netstandard1.4/Microsoft.IdentityModel.Logging.xml", "microsoft.identitymodel.logging.1.1.4.nupkg.sha512", "microsoft.identitymodel.logging.nuspec"]
      },
      "Microsoft.IdentityModel.Protocols/2.1.4": {
        "sha512": "9aefRN9sL8XZo90Aix88IHHpAvfBl6UOiYpcKHiXbCYE2nB+zA3B8dZdNMOUH4pqXdnpYrHRDQZ2k7A4/CUgTQ==",
        "type": "package",
        "path": "microsoft.identitymodel.protocols/2.1.4",
        "files": ["lib/net45/Microsoft.IdentityModel.Protocols.dll", "lib/net45/Microsoft.IdentityModel.Protocols.xml", "lib/net451/Microsoft.IdentityModel.Protocols.dll", "lib/net451/Microsoft.IdentityModel.Protocols.xml", "lib/netstandard1.4/Microsoft.IdentityModel.Protocols.dll", "lib/netstandard1.4/Microsoft.IdentityModel.Protocols.xml", "microsoft.identitymodel.protocols.2.1.4.nupkg.sha512", "microsoft.identitymodel.protocols.nuspec"]
      },
      "Microsoft.IdentityModel.Protocols.OpenIdConnect/2.1.4": {
        "sha512": "LF8JcG9BqGRwVjhu/IebuZQer6TJGDv2uxNnmg2Zkzh/d+MIC1ShsC1U3U7pVaw03SKyXmCgYm+JG0WM0mcOUw==",
        "type": "package",
        "path": "microsoft.identitymodel.protocols.openidconnect/2.1.4",
        "files": ["lib/net45/Microsoft.IdentityModel.Protocols.OpenIdConnect.dll", "lib/net45/Microsoft.IdentityModel.Protocols.OpenIdConnect.xml", "lib/net451/Microsoft.IdentityModel.Protocols.OpenIdConnect.dll", "lib/net451/Microsoft.IdentityModel.Protocols.OpenIdConnect.xml", "lib/netstandard1.4/Microsoft.IdentityModel.Protocols.OpenIdConnect.dll", "lib/netstandard1.4/Microsoft.IdentityModel.Protocols.OpenIdConnect.xml", "microsoft.identitymodel.protocols.openidconnect.2.1.4.nupkg.sha512", "microsoft.identitymodel.protocols.openidconnect.nuspec"]
      },
      "Microsoft.IdentityModel.Tokens/5.1.4": {
        "sha512": "SsJbZVPvjSlKFDAQmR2wpL6ZD/vCFlIsf0jxRlBJwyzKXZy3Wi/Xo+fE2MzAerLsJgG1UCdtplRwqDyq1euayw==",
        "type": "package",
        "path": "microsoft.identitymodel.tokens/5.1.4",
        "files": ["lib/net45/Microsoft.IdentityModel.Tokens.dll", "lib/net45/Microsoft.IdentityModel.Tokens.xml", "lib/net451/Microsoft.IdentityModel.Tokens.dll", "lib/net451/Microsoft.IdentityModel.Tokens.xml", "lib/netstandard1.4/Microsoft.IdentityModel.Tokens.dll", "lib/netstandard1.4/Microsoft.IdentityModel.Tokens.xml", "microsoft.identitymodel.tokens.5.1.4.nupkg.sha512", "microsoft.identitymodel.tokens.nuspec"]
      },
      "Microsoft.Net.Http.Headers/2.0.1": {
        "sha512": "A61ddihPbPy9764AtCysy73oj/PA/9hsv21mXLX5QJYp9lkeyygTufTSGUmh9hz/SiZKy5GBreSlgD2Tm2ab9w==",
        "type": "package",
        "path": "microsoft.net.http.headers/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.Net.Http.Headers.dll", "lib/netstandard2.0/Microsoft.Net.Http.Headers.xml", "microsoft.net.http.headers.2.0.1.nupkg.sha512", "microsoft.net.http.headers.nuspec"]
      },
      "Microsoft.NETCore.App/2.0.0": {
        "sha512": "/mzXF+UtZef+VpzzN88EpvFq5U6z4rj54ZMq/J968H6pcvyLOmcupmTRpJ3CJm8ILoCGh9WI7qpDdiKtuzswrQ==",
        "type": "package",
        "path": "microsoft.netcore.app/2.0.0",
        "files": ["LICENSE.TXT", "Microsoft.NETCore.App.versions.txt", "THIRD-PARTY-NOTICES.TXT", "build/netcoreapp2.0/Microsoft.NETCore.App.PlatformManifest.txt", "build/netcoreapp2.0/Microsoft.NETCore.App.props", "build/netcoreapp2.0/Microsoft.NETCore.App.targets", "microsoft.netcore.app.2.0.0.nupkg.sha512", "microsoft.netcore.app.nuspec", "ref/netcoreapp/_._", "ref/netcoreapp2.0/Microsoft.CSharp.dll", "ref/netcoreapp2.0/Microsoft.CSharp.xml", "ref/netcoreapp2.0/Microsoft.VisualBasic.dll", "ref/netcoreapp2.0/Microsoft.VisualBasic.xml", "ref/netcoreapp2.0/Microsoft.Win32.Primitives.dll", "ref/netcoreapp2.0/Microsoft.Win32.Primitives.xml", "ref/netcoreapp2.0/System.AppContext.dll", "ref/netcoreapp2.0/System.AppContext.xml", "ref/netcoreapp2.0/System.Buffers.dll", "ref/netcoreapp2.0/System.Buffers.xml", "ref/netcoreapp2.0/System.Collections.Concurrent.dll", "ref/netcoreapp2.0/System.Collections.Concurrent.xml", "ref/netcoreapp2.0/System.Collections.Immutable.dll", "ref/netcoreapp2.0/System.Collections.Immutable.xml", "ref/netcoreapp2.0/System.Collections.NonGeneric.dll", "ref/netcoreapp2.0/System.Collections.NonGeneric.xml", "ref/netcoreapp2.0/System.Collections.Specialized.dll", "ref/netcoreapp2.0/System.Collections.Specialized.xml", "ref/netcoreapp2.0/System.Collections.dll", "ref/netcoreapp2.0/System.Collections.xml", "ref/netcoreapp2.0/System.ComponentModel.Annotations.dll", "ref/netcoreapp2.0/System.ComponentModel.Annotations.xml", "ref/netcoreapp2.0/System.ComponentModel.Composition.dll", "ref/netcoreapp2.0/System.ComponentModel.DataAnnotations.dll", "ref/netcoreapp2.0/System.ComponentModel.EventBasedAsync.dll", "ref/netcoreapp2.0/System.ComponentModel.EventBasedAsync.xml", "ref/netcoreapp2.0/System.ComponentModel.Primitives.dll", "ref/netcoreapp2.0/System.ComponentModel.Primitives.xml", "ref/netcoreapp2.0/System.ComponentModel.TypeConverter.dll", "ref/netcoreapp2.0/System.ComponentModel.TypeConverter.xml", "ref/netcoreapp2.0/System.ComponentModel.dll", "ref/netcoreapp2.0/System.ComponentModel.xml", "ref/netcoreapp2.0/System.Configuration.dll", "ref/netcoreapp2.0/System.Console.dll", "ref/netcoreapp2.0/System.Console.xml", "ref/netcoreapp2.0/System.Core.dll", "ref/netcoreapp2.0/System.Data.Common.dll", "ref/netcoreapp2.0/System.Data.Common.xml", "ref/netcoreapp2.0/System.Data.dll", "ref/netcoreapp2.0/System.Diagnostics.Contracts.dll", "ref/netcoreapp2.0/System.Diagnostics.Contracts.xml", "ref/netcoreapp2.0/System.Diagnostics.Debug.dll", "ref/netcoreapp2.0/System.Diagnostics.Debug.xml", "ref/netcoreapp2.0/System.Diagnostics.DiagnosticSource.dll", "ref/netcoreapp2.0/System.Diagnostics.DiagnosticSource.xml", "ref/netcoreapp2.0/System.Diagnostics.FileVersionInfo.dll", "ref/netcoreapp2.0/System.Diagnostics.FileVersionInfo.xml", "ref/netcoreapp2.0/System.Diagnostics.Process.dll", "ref/netcoreapp2.0/System.Diagnostics.Process.xml", "ref/netcoreapp2.0/System.Diagnostics.StackTrace.dll", "ref/netcoreapp2.0/System.Diagnostics.StackTrace.xml", "ref/netcoreapp2.0/System.Diagnostics.TextWriterTraceListener.dll", "ref/netcoreapp2.0/System.Diagnostics.TextWriterTraceListener.xml", "ref/netcoreapp2.0/System.Diagnostics.Tools.dll", "ref/netcoreapp2.0/System.Diagnostics.Tools.xml", "ref/netcoreapp2.0/System.Diagnostics.TraceSource.dll", "ref/netcoreapp2.0/System.Diagnostics.TraceSource.xml", "ref/netcoreapp2.0/System.Diagnostics.Tracing.dll", "ref/netcoreapp2.0/System.Diagnostics.Tracing.xml", "ref/netcoreapp2.0/System.Drawing.Primitives.dll", "ref/netcoreapp2.0/System.Drawing.Primitives.xml", "ref/netcoreapp2.0/System.Drawing.dll", "ref/netcoreapp2.0/System.Dynamic.Runtime.dll", "ref/netcoreapp2.0/System.Dynamic.Runtime.xml", "ref/netcoreapp2.0/System.Globalization.Calendars.dll", "ref/netcoreapp2.0/System.Globalization.Calendars.xml", "ref/netcoreapp2.0/System.Globalization.Extensions.dll", "ref/netcoreapp2.0/System.Globalization.Extensions.xml", "ref/netcoreapp2.0/System.Globalization.dll", "ref/netcoreapp2.0/System.Globalization.xml", "ref/netcoreapp2.0/System.IO.Compression.FileSystem.dll", "ref/netcoreapp2.0/System.IO.Compression.ZipFile.dll", "ref/netcoreapp2.0/System.IO.Compression.ZipFile.xml", "ref/netcoreapp2.0/System.IO.Compression.dll", "ref/netcoreapp2.0/System.IO.Compression.xml", "ref/netcoreapp2.0/System.IO.FileSystem.DriveInfo.dll", "ref/netcoreapp2.0/System.IO.FileSystem.DriveInfo.xml", "ref/netcoreapp2.0/System.IO.FileSystem.Primitives.dll", "ref/netcoreapp2.0/System.IO.FileSystem.Primitives.xml", "ref/netcoreapp2.0/System.IO.FileSystem.Watcher.dll", "ref/netcoreapp2.0/System.IO.FileSystem.Watcher.xml", "ref/netcoreapp2.0/System.IO.FileSystem.dll", "ref/netcoreapp2.0/System.IO.FileSystem.xml", "ref/netcoreapp2.0/System.IO.IsolatedStorage.dll", "ref/netcoreapp2.0/System.IO.IsolatedStorage.xml", "ref/netcoreapp2.0/System.IO.MemoryMappedFiles.dll", "ref/netcoreapp2.0/System.IO.MemoryMappedFiles.xml", "ref/netcoreapp2.0/System.IO.Pipes.dll", "ref/netcoreapp2.0/System.IO.Pipes.xml", "ref/netcoreapp2.0/System.IO.UnmanagedMemoryStream.dll", "ref/netcoreapp2.0/System.IO.UnmanagedMemoryStream.xml", "ref/netcoreapp2.0/System.IO.dll", "ref/netcoreapp2.0/System.IO.xml", "ref/netcoreapp2.0/System.Linq.Expressions.dll", "ref/netcoreapp2.0/System.Linq.Expressions.xml", "ref/netcoreapp2.0/System.Linq.Parallel.dll", "ref/netcoreapp2.0/System.Linq.Parallel.xml", "ref/netcoreapp2.0/System.Linq.Queryable.dll", "ref/netcoreapp2.0/System.Linq.Queryable.xml", "ref/netcoreapp2.0/System.Linq.dll", "ref/netcoreapp2.0/System.Linq.xml", "ref/netcoreapp2.0/System.Net.Http.dll", "ref/netcoreapp2.0/System.Net.Http.xml", "ref/netcoreapp2.0/System.Net.HttpListener.dll", "ref/netcoreapp2.0/System.Net.HttpListener.xml", "ref/netcoreapp2.0/System.Net.Mail.dll", "ref/netcoreapp2.0/System.Net.Mail.xml", "ref/netcoreapp2.0/System.Net.NameResolution.dll", "ref/netcoreapp2.0/System.Net.NameResolution.xml", "ref/netcoreapp2.0/System.Net.NetworkInformation.dll", "ref/netcoreapp2.0/System.Net.NetworkInformation.xml", "ref/netcoreapp2.0/System.Net.Ping.dll", "ref/netcoreapp2.0/System.Net.Ping.xml", "ref/netcoreapp2.0/System.Net.Primitives.dll", "ref/netcoreapp2.0/System.Net.Primitives.xml", "ref/netcoreapp2.0/System.Net.Requests.dll", "ref/netcoreapp2.0/System.Net.Requests.xml", "ref/netcoreapp2.0/System.Net.Security.dll", "ref/netcoreapp2.0/System.Net.Security.xml", "ref/netcoreapp2.0/System.Net.ServicePoint.dll", "ref/netcoreapp2.0/System.Net.ServicePoint.xml", "ref/netcoreapp2.0/System.Net.Sockets.dll", "ref/netcoreapp2.0/System.Net.Sockets.xml", "ref/netcoreapp2.0/System.Net.WebClient.dll", "ref/netcoreapp2.0/System.Net.WebClient.xml", "ref/netcoreapp2.0/System.Net.WebHeaderCollection.dll", "ref/netcoreapp2.0/System.Net.WebHeaderCollection.xml", "ref/netcoreapp2.0/System.Net.WebProxy.dll", "ref/netcoreapp2.0/System.Net.WebProxy.xml", "ref/netcoreapp2.0/System.Net.WebSockets.Client.dll", "ref/netcoreapp2.0/System.Net.WebSockets.Client.xml", "ref/netcoreapp2.0/System.Net.WebSockets.dll", "ref/netcoreapp2.0/System.Net.WebSockets.xml", "ref/netcoreapp2.0/System.Net.dll", "ref/netcoreapp2.0/System.Numerics.Vectors.dll", "ref/netcoreapp2.0/System.Numerics.Vectors.xml", "ref/netcoreapp2.0/System.Numerics.dll", "ref/netcoreapp2.0/System.ObjectModel.dll", "ref/netcoreapp2.0/System.ObjectModel.xml", "ref/netcoreapp2.0/System.Reflection.DispatchProxy.dll", "ref/netcoreapp2.0/System.Reflection.DispatchProxy.xml", "ref/netcoreapp2.0/System.Reflection.Emit.ILGeneration.dll", "ref/netcoreapp2.0/System.Reflection.Emit.ILGeneration.xml", "ref/netcoreapp2.0/System.Reflection.Emit.Lightweight.dll", "ref/netcoreapp2.0/System.Reflection.Emit.Lightweight.xml", "ref/netcoreapp2.0/System.Reflection.Emit.dll", "ref/netcoreapp2.0/System.Reflection.Emit.xml", "ref/netcoreapp2.0/System.Reflection.Extensions.dll", "ref/netcoreapp2.0/System.Reflection.Extensions.xml", "ref/netcoreapp2.0/System.Reflection.Metadata.dll", "ref/netcoreapp2.0/System.Reflection.Metadata.xml", "ref/netcoreapp2.0/System.Reflection.Primitives.dll", "ref/netcoreapp2.0/System.Reflection.Primitives.xml", "ref/netcoreapp2.0/System.Reflection.TypeExtensions.dll", "ref/netcoreapp2.0/System.Reflection.TypeExtensions.xml", "ref/netcoreapp2.0/System.Reflection.dll", "ref/netcoreapp2.0/System.Reflection.xml", "ref/netcoreapp2.0/System.Resources.Reader.dll", "ref/netcoreapp2.0/System.Resources.Reader.xml", "ref/netcoreapp2.0/System.Resources.ResourceManager.dll", "ref/netcoreapp2.0/System.Resources.ResourceManager.xml", "ref/netcoreapp2.0/System.Resources.Writer.dll", "ref/netcoreapp2.0/System.Resources.Writer.xml", "ref/netcoreapp2.0/System.Runtime.CompilerServices.VisualC.dll", "ref/netcoreapp2.0/System.Runtime.CompilerServices.VisualC.xml", "ref/netcoreapp2.0/System.Runtime.Extensions.dll", "ref/netcoreapp2.0/System.Runtime.Extensions.xml", "ref/netcoreapp2.0/System.Runtime.Handles.dll", "ref/netcoreapp2.0/System.Runtime.Handles.xml", "ref/netcoreapp2.0/System.Runtime.InteropServices.RuntimeInformation.dll", "ref/netcoreapp2.0/System.Runtime.InteropServices.RuntimeInformation.xml", "ref/netcoreapp2.0/System.Runtime.InteropServices.WindowsRuntime.dll", "ref/netcoreapp2.0/System.Runtime.InteropServices.WindowsRuntime.xml", "ref/netcoreapp2.0/System.Runtime.InteropServices.dll", "ref/netcoreapp2.0/System.Runtime.InteropServices.xml", "ref/netcoreapp2.0/System.Runtime.Loader.dll", "ref/netcoreapp2.0/System.Runtime.Loader.xml", "ref/netcoreapp2.0/System.Runtime.Numerics.dll", "ref/netcoreapp2.0/System.Runtime.Numerics.xml", "ref/netcoreapp2.0/System.Runtime.Serialization.Formatters.dll", "ref/netcoreapp2.0/System.Runtime.Serialization.Formatters.xml", "ref/netcoreapp2.0/System.Runtime.Serialization.Json.dll", "ref/netcoreapp2.0/System.Runtime.Serialization.Json.xml", "ref/netcoreapp2.0/System.Runtime.Serialization.Primitives.dll", "ref/netcoreapp2.0/System.Runtime.Serialization.Primitives.xml", "ref/netcoreapp2.0/System.Runtime.Serialization.Xml.dll", "ref/netcoreapp2.0/System.Runtime.Serialization.Xml.xml", "ref/netcoreapp2.0/System.Runtime.Serialization.dll", "ref/netcoreapp2.0/System.Runtime.dll", "ref/netcoreapp2.0/System.Runtime.xml", "ref/netcoreapp2.0/System.Security.Claims.dll", "ref/netcoreapp2.0/System.Security.Claims.xml", "ref/netcoreapp2.0/System.Security.Cryptography.Algorithms.dll", "ref/netcoreapp2.0/System.Security.Cryptography.Algorithms.xml", "ref/netcoreapp2.0/System.Security.Cryptography.Csp.dll", "ref/netcoreapp2.0/System.Security.Cryptography.Csp.xml", "ref/netcoreapp2.0/System.Security.Cryptography.Encoding.dll", "ref/netcoreapp2.0/System.Security.Cryptography.Encoding.xml", "ref/netcoreapp2.0/System.Security.Cryptography.Primitives.dll", "ref/netcoreapp2.0/System.Security.Cryptography.Primitives.xml", "ref/netcoreapp2.0/System.Security.Cryptography.X509Certificates.dll", "ref/netcoreapp2.0/System.Security.Cryptography.X509Certificates.xml", "ref/netcoreapp2.0/System.Security.Principal.dll", "ref/netcoreapp2.0/System.Security.Principal.xml", "ref/netcoreapp2.0/System.Security.SecureString.dll", "ref/netcoreapp2.0/System.Security.SecureString.xml", "ref/netcoreapp2.0/System.Security.dll", "ref/netcoreapp2.0/System.ServiceModel.Web.dll", "ref/netcoreapp2.0/System.ServiceProcess.dll", "ref/netcoreapp2.0/System.Text.Encoding.Extensions.dll", "ref/netcoreapp2.0/System.Text.Encoding.Extensions.xml", "ref/netcoreapp2.0/System.Text.Encoding.dll", "ref/netcoreapp2.0/System.Text.Encoding.xml", "ref/netcoreapp2.0/System.Text.RegularExpressions.dll", "ref/netcoreapp2.0/System.Text.RegularExpressions.xml", "ref/netcoreapp2.0/System.Threading.Overlapped.dll", "ref/netcoreapp2.0/System.Threading.Overlapped.xml", "ref/netcoreapp2.0/System.Threading.Tasks.Dataflow.dll", "ref/netcoreapp2.0/System.Threading.Tasks.Dataflow.xml", "ref/netcoreapp2.0/System.Threading.Tasks.Extensions.dll", "ref/netcoreapp2.0/System.Threading.Tasks.Extensions.xml", "ref/netcoreapp2.0/System.Threading.Tasks.Parallel.dll", "ref/netcoreapp2.0/System.Threading.Tasks.Parallel.xml", "ref/netcoreapp2.0/System.Threading.Tasks.dll", "ref/netcoreapp2.0/System.Threading.Tasks.xml", "ref/netcoreapp2.0/System.Threading.Thread.dll", "ref/netcoreapp2.0/System.Threading.Thread.xml", "ref/netcoreapp2.0/System.Threading.ThreadPool.dll", "ref/netcoreapp2.0/System.Threading.ThreadPool.xml", "ref/netcoreapp2.0/System.Threading.Timer.dll", "ref/netcoreapp2.0/System.Threading.Timer.xml", "ref/netcoreapp2.0/System.Threading.dll", "ref/netcoreapp2.0/System.Threading.xml", "ref/netcoreapp2.0/System.Transactions.Local.dll", "ref/netcoreapp2.0/System.Transactions.Local.xml", "ref/netcoreapp2.0/System.Transactions.dll", "ref/netcoreapp2.0/System.ValueTuple.dll", "ref/netcoreapp2.0/System.ValueTuple.xml", "ref/netcoreapp2.0/System.Web.HttpUtility.dll", "ref/netcoreapp2.0/System.Web.HttpUtility.xml", "ref/netcoreapp2.0/System.Web.dll", "ref/netcoreapp2.0/System.Windows.dll", "ref/netcoreapp2.0/System.Xml.Linq.dll", "ref/netcoreapp2.0/System.Xml.ReaderWriter.dll", "ref/netcoreapp2.0/System.Xml.ReaderWriter.xml", "ref/netcoreapp2.0/System.Xml.Serialization.dll", "ref/netcoreapp2.0/System.Xml.XDocument.dll", "ref/netcoreapp2.0/System.Xml.XDocument.xml", "ref/netcoreapp2.0/System.Xml.XPath.XDocument.dll", "ref/netcoreapp2.0/System.Xml.XPath.XDocument.xml", "ref/netcoreapp2.0/System.Xml.XPath.dll", "ref/netcoreapp2.0/System.Xml.XPath.xml", "ref/netcoreapp2.0/System.Xml.XmlDocument.dll", "ref/netcoreapp2.0/System.Xml.XmlDocument.xml", "ref/netcoreapp2.0/System.Xml.XmlSerializer.dll", "ref/netcoreapp2.0/System.Xml.XmlSerializer.xml", "ref/netcoreapp2.0/System.Xml.dll", "ref/netcoreapp2.0/System.dll", "ref/netcoreapp2.0/WindowsBase.dll", "ref/netcoreapp2.0/mscorlib.dll", "ref/netcoreapp2.0/netstandard.dll", "runtime.json"]
      },
      "Microsoft.NETCore.DotNetAppHost/2.0.0": {
        "sha512": "L4GGkcI/Mxl8PKLRpFdGmLb5oI8sGIR05bDTGkzCoamAjdUl1Zhkov2swjEsZvKYT8kkdiz39LtwyGYuCJxm1A==",
        "type": "package",
        "path": "microsoft.netcore.dotnetapphost/2.0.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "microsoft.netcore.dotnetapphost.2.0.0.nupkg.sha512", "microsoft.netcore.dotnetapphost.nuspec", "runtime.json"]
      },
      "Microsoft.NETCore.DotNetHostPolicy/2.0.0": {
        "sha512": "rm7mMn0A93fwyAwVhbyOCcPuu2hZNL0A0dAur9sNG9pEkONPfCEQeF7m2mC8KpqZO0Ol6tpV5J0AF3HTXT3GXA==",
        "type": "package",
        "path": "microsoft.netcore.dotnethostpolicy/2.0.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "microsoft.netcore.dotnethostpolicy.2.0.0.nupkg.sha512", "microsoft.netcore.dotnethostpolicy.nuspec", "runtime.json"]
      },
      "Microsoft.NETCore.DotNetHostResolver/2.0.0": {
        "sha512": "uBbjpeSrwsaTCADZCzRk+3aBzNnMqkC4zftJWBsL+Zk+8u+W+/lMb2thM5Y4hiVrv1YQg9t6dKldXzOKkY+pQw==",
        "type": "package",
        "path": "microsoft.netcore.dotnethostresolver/2.0.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "microsoft.netcore.dotnethostresolver.2.0.0.nupkg.sha512", "microsoft.netcore.dotnethostresolver.nuspec", "runtime.json"]
      },
      "Microsoft.NETCore.Platforms/2.0.0": {
        "sha512": "VdLJOCXhZaEMY7Hm2GKiULmn7IEPFE4XC5LPSfBVCUIA8YLZVh846gtfBJalsPQF2PlzdD7ecX7DZEulJ402ZQ==",
        "type": "package",
        "path": "microsoft.netcore.platforms/2.0.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/netstandard1.0/_._", "microsoft.netcore.platforms.2.0.0.nupkg.sha512", "microsoft.netcore.platforms.nuspec", "runtime.json", "useSharedDesignerContext.txt", "version.txt"]
      },
      "Microsoft.NETCore.Targets/1.1.0": {
        "sha512": "aOZA3BWfz9RXjpzt0sRJJMjAscAUm3Hoa4UWAfceV9UTYxgwZ1lZt5nO2myFf+/jetYQo4uTP7zS8sJY67BBxg==",
        "type": "package",
        "path": "microsoft.netcore.targets/1.1.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/netstandard1.0/_._", "microsoft.netcore.targets.1.1.0.nupkg.sha512", "microsoft.netcore.targets.nuspec", "runtime.json"]
      },
      "Microsoft.Rest.ClientRuntime/2.3.8": {
        "sha512": "Hj96LBoCwKY2VQKfSCVGGPV1sSumVjuYnrlpBwL4JSTnSK4b6ZxjLtXj8LgmKav8xJ2gps+UN7eI3hHVFKvBFw==",
        "type": "package",
        "path": "microsoft.rest.clientruntime/2.3.8",
        "files": ["lib/net452/Microsoft.Rest.ClientRuntime.dll", "lib/net452/Microsoft.Rest.ClientRuntime.runtimeconfig.json", "lib/net452/Microsoft.Rest.ClientRuntime.xml", "lib/netstandard1.4/Microsoft.Rest.ClientRuntime.dll", "lib/netstandard1.4/Microsoft.Rest.ClientRuntime.runtimeconfig.json", "lib/netstandard1.4/Microsoft.Rest.ClientRuntime.xml", "microsoft.rest.clientruntime.2.3.8.nupkg.sha512", "microsoft.rest.clientruntime.nuspec"]
      },
      "Microsoft.Rest.ClientRuntime.Azure/3.3.7": {
        "sha512": "6u8JIuvrztse4tPOcvNzAJuzGBP0uY+Ijggk8ZYhp0siGEZ1XfZylf1vpNGUicvwcrhhoIgDW73Z1L6QGssr2g==",
        "type": "package",
        "path": "microsoft.rest.clientruntime.azure/3.3.7",
        "files": ["lib/net452/Microsoft.Rest.ClientRuntime.Azure.dll", "lib/net452/Microsoft.Rest.ClientRuntime.Azure.runtimeconfig.json", "lib/net452/Microsoft.Rest.ClientRuntime.Azure.xml", "lib/netstandard1.4/Microsoft.Rest.ClientRuntime.Azure.dll", "lib/netstandard1.4/Microsoft.Rest.ClientRuntime.Azure.runtimeconfig.json", "lib/netstandard1.4/Microsoft.Rest.ClientRuntime.Azure.xml", "microsoft.rest.clientruntime.azure.3.3.7.nupkg.sha512", "microsoft.rest.clientruntime.azure.nuspec"]
      },
      "Microsoft.VisualStudio.Web.BrowserLink/2.0.1": {
        "sha512": "StbHXXY9tIPdcr6VbZRtn3nyZaBSMZnOVqJqjrXcTYjn3jdjLkgK+I67jNm4yREoKpjK+j71XQOS8sc8+tN8hQ==",
        "type": "package",
        "path": "microsoft.visualstudio.web.browserlink/2.0.1",
        "files": ["lib/netstandard2.0/Microsoft.VisualStudio.Web.BrowserLink.dll", "lib/netstandard2.0/Microsoft.VisualStudio.Web.BrowserLink.xml", "microsoft.visualstudio.web.browserlink.2.0.1.nupkg.sha512", "microsoft.visualstudio.web.browserlink.nuspec"]
      },
      "Microsoft.VisualStudio.Web.CodeGeneration/2.0.2": {
        "sha512": "hyPNYu/jZIXfH/ymxQHRxkB2qb8qpQnb9R+sajyxCBA66XjYJsh+2zROmR0ZOgIXawNuEVcjFnq+CAtGLdO/GQ==",
        "type": "package",
        "path": "microsoft.visualstudio.web.codegeneration/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.dll", "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.xml", "microsoft.visualstudio.web.codegeneration.2.0.2.nupkg.sha512", "microsoft.visualstudio.web.codegeneration.nuspec"]
      },
      "Microsoft.VisualStudio.Web.CodeGeneration.Contracts/2.0.2": {
        "sha512": "AJfxuwaqbTl2ITFR99y8PZx08ErXCPDjJLLzr0uNnq9MOIIvDcfLQgbaxOgae05RL/xTl936LHQFXAAJchArbw==",
        "type": "package",
        "path": "microsoft.visualstudio.web.codegeneration.contracts/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Contracts.dll", "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Contracts.xml", "microsoft.visualstudio.web.codegeneration.contracts.2.0.2.nupkg.sha512", "microsoft.visualstudio.web.codegeneration.contracts.nuspec"]
      },
      "Microsoft.VisualStudio.Web.CodeGeneration.Core/2.0.2": {
        "sha512": "of36Gj6SaoQ3qvrt+VQsycOUGSW+WZtpvJH1yvDaolXdWiNW254yC4Gd1AM0x3+bKQqrkJYoVu2LaloWvYYa8A==",
        "type": "package",
        "path": "microsoft.visualstudio.web.codegeneration.core/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Core.dll", "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Core.xml", "microsoft.visualstudio.web.codegeneration.core.2.0.2.nupkg.sha512", "microsoft.visualstudio.web.codegeneration.core.nuspec"]
      },
      "Microsoft.VisualStudio.Web.CodeGeneration.Design/2.0.2": {
        "sha512": "jhtIx2Qj9muaoLnYSkry4imTHCLvQ2wQTXVWf+l7YaneFkowcqAzdWnqXwYnART4UhWxlXbQtCxrGcyJgaL4hg==",
        "type": "package",
        "path": "microsoft.visualstudio.web.codegeneration.design/2.0.2",
        "files": ["lib/net461/dotnet-aspnet-codegenerator-design.exe", "lib/net461/dotnet-aspnet-codegenerator-design.xml", "lib/netcoreapp2.0/dotnet-aspnet-codegenerator-design.dll", "lib/netcoreapp2.0/dotnet-aspnet-codegenerator-design.xml", "microsoft.visualstudio.web.codegeneration.design.2.0.2.nupkg.sha512", "microsoft.visualstudio.web.codegeneration.design.nuspec", "runtimes/win-arm/lib/net461/dotnet-aspnet-codegenerator-design.exe", "runtimes/win-arm/lib/net461/dotnet-aspnet-codegenerator-design.xml", "runtimes/win-arm64/lib/net461/dotnet-aspnet-codegenerator-design.exe", "runtimes/win-arm64/lib/net461/dotnet-aspnet-codegenerator-design.xml", "runtimes/win7-x64/lib/net461/dotnet-aspnet-codegenerator-design.exe", "runtimes/win7-x64/lib/net461/dotnet-aspnet-codegenerator-design.xml", "runtimes/win7-x86/lib/net461/dotnet-aspnet-codegenerator-design.exe", "runtimes/win7-x86/lib/net461/dotnet-aspnet-codegenerator-design.xml"]
      },
      "Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore/2.0.2": {
        "sha512": "xMGyLe+IvlVZMwrcaZd2ztZUDq4OAB5pu1JhV0hnqXae7Rg9SFp8XqqVgvEbeXv37UWDrAJ3aaiDEQP/jPO0Yg==",
        "type": "package",
        "path": "microsoft.visualstudio.web.codegeneration.entityframeworkcore/2.0.2",
        "files": ["Templates/DbContext/NewLocalDbContext.cshtml", "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore.dll", "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore.xml", "microsoft.visualstudio.web.codegeneration.entityframeworkcore.2.0.2.nupkg.sha512", "microsoft.visualstudio.web.codegeneration.entityframeworkcore.nuspec"]
      },
      "Microsoft.VisualStudio.Web.CodeGeneration.Templating/2.0.2": {
        "sha512": "XGBMEv0Co6Cs7Axoow9AlMWZtqH5WCJQwQyFgNCgxo2QysDdLur6M2WHsvuShA8zAIjJu0+JQzOzeDd6jlP4fA==",
        "type": "package",
        "path": "microsoft.visualstudio.web.codegeneration.templating/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Templating.dll", "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Templating.xml", "microsoft.visualstudio.web.codegeneration.templating.2.0.2.nupkg.sha512", "microsoft.visualstudio.web.codegeneration.templating.nuspec"]
      },
      "Microsoft.VisualStudio.Web.CodeGeneration.Utils/2.0.2": {
        "sha512": "iHFv23BBc2+PDu2hHf7PMIedeZn9l8azlnrew0TgDj6eBp5yRd//1PSlhp81gYyPKJoi8BfJYhqVH6ZIuMCN8g==",
        "type": "package",
        "path": "microsoft.visualstudio.web.codegeneration.utils/2.0.2",
        "files": ["lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Utils.dll", "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Utils.xml", "microsoft.visualstudio.web.codegeneration.utils.2.0.2.nupkg.sha512", "microsoft.visualstudio.web.codegeneration.utils.nuspec"]
      },
      "Microsoft.VisualStudio.Web.CodeGenerators.Mvc/2.0.2": {
        "sha512": "+H5eqw+SiEZvTzKDJXSUVSQvH/wYN0iSfftA0UL6OgJw+zLfPt6HQ5BZNSrCOBBobDSD/6eBC6PTMzZgsZTUmA==",
        "type": "package",
        "path": "microsoft.visualstudio.web.codegenerators.mvc/2.0.2",
        "files": ["Generators/ParameterDefinitions/area.json", "Generators/ParameterDefinitions/controller.json", "Generators/ParameterDefinitions/razorpage.json", "Generators/ParameterDefinitions/view.json", "Templates/ControllerGenerator/ApiControllerWIthActions.cshtml", "Templates/ControllerGenerator/ApiControllerWithContext.cshtml", "Templates/ControllerGenerator/ApiEmptyController.cshtml", "Templates/ControllerGenerator/ControllerWithActions.cshtml", "Templates/ControllerGenerator/EmptyController.cshtml", "Templates/ControllerGenerator/MvcControllerWithContext.cshtml", "Templates/MvcLayout/Error.cshtml", "Templates/MvcLayout/_Layout.cshtml", "Templates/RazorPageGenerator/Create.cshtml", "Templates/RazorPageGenerator/CreatePageModel.cshtml", "Templates/RazorPageGenerator/Delete.cshtml", "Templates/RazorPageGenerator/DeletePageModel.cshtml", "Templates/RazorPageGenerator/Details.cshtml", "Templates/RazorPageGenerator/DetailsPageModel.cshtml", "Templates/RazorPageGenerator/Edit.cshtml", "Templates/RazorPageGenerator/EditPageModel.cshtml", "Templates/RazorPageGenerator/Empty.cshtml", "Templates/RazorPageGenerator/EmptyPageModel.cshtml", "Templates/RazorPageGenerator/List.cshtml", "Templates/RazorPageGenerator/ListPageModel.cshtml", "Templates/RazorPageGenerator/_ValidationScriptsPartial.cshtml", "Templates/Startup/ReadMe.cshtml", "Templates/Startup/Startup.cshtml", "Templates/ViewGenerator/Create.cshtml", "Templates/ViewGenerator/Delete.cshtml", "Templates/ViewGenerator/Details.cshtml", "Templates/ViewGenerator/Edit.cshtml", "Templates/ViewGenerator/Empty.cshtml", "Templates/ViewGenerator/List.cshtml", "Templates/ViewGenerator/_ValidationScriptsPartial.cshtml", "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGenerators.Mvc.dll", "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGenerators.Mvc.xml", "microsoft.visualstudio.web.codegenerators.mvc.2.0.2.nupkg.sha512", "microsoft.visualstudio.web.codegenerators.mvc.nuspec"]
      },
      "Microsoft.Win32.Primitives/4.3.0": {
        "sha512": "9ZQKCWxH7Ijp9BfahvL2Zyf1cJIk8XYLF6Yjzr2yi0b2cOut/HQ31qf1ThHAgCc3WiZMdnWcfJCgN82/0UunxA==",
        "type": "package",
        "path": "microsoft.win32.primitives/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/Microsoft.Win32.Primitives.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "microsoft.win32.primitives.4.3.0.nupkg.sha512", "microsoft.win32.primitives.nuspec", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/Microsoft.Win32.Primitives.dll", "ref/netstandard1.3/Microsoft.Win32.Primitives.dll", "ref/netstandard1.3/Microsoft.Win32.Primitives.xml", "ref/netstandard1.3/de/Microsoft.Win32.Primitives.xml", "ref/netstandard1.3/es/Microsoft.Win32.Primitives.xml", "ref/netstandard1.3/fr/Microsoft.Win32.Primitives.xml", "ref/netstandard1.3/it/Microsoft.Win32.Primitives.xml", "ref/netstandard1.3/ja/Microsoft.Win32.Primitives.xml", "ref/netstandard1.3/ko/Microsoft.Win32.Primitives.xml", "ref/netstandard1.3/ru/Microsoft.Win32.Primitives.xml", "ref/netstandard1.3/zh-hans/Microsoft.Win32.Primitives.xml", "ref/netstandard1.3/zh-hant/Microsoft.Win32.Primitives.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._"]
      },
      "Microsoft.Win32.Registry/4.4.0": {
        "sha512": "dA36TlNVn/XfrZtmf0fiI/z1nd3Wfp2QVzTdj26pqgP9LFWq0i1hYEUAW50xUjGFYn1+/cP3KGuxT2Yn1OUNBQ==",
        "type": "package",
        "path": "microsoft.win32.registry/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/net46/Microsoft.Win32.Registry.dll", "lib/net461/Microsoft.Win32.Registry.dll", "lib/netstandard1.3/Microsoft.Win32.Registry.dll", "lib/netstandard2.0/Microsoft.Win32.Registry.dll", "microsoft.win32.registry.4.4.0.nupkg.sha512", "microsoft.win32.registry.nuspec", "ref/net46/Microsoft.Win32.Registry.dll", "ref/net461/Microsoft.Win32.Registry.dll", "ref/net461/Microsoft.Win32.Registry.xml", "ref/netstandard1.3/Microsoft.Win32.Registry.dll", "ref/netstandard1.3/Microsoft.Win32.Registry.xml", "ref/netstandard1.3/de/Microsoft.Win32.Registry.xml", "ref/netstandard1.3/es/Microsoft.Win32.Registry.xml", "ref/netstandard1.3/fr/Microsoft.Win32.Registry.xml", "ref/netstandard1.3/it/Microsoft.Win32.Registry.xml", "ref/netstandard1.3/ja/Microsoft.Win32.Registry.xml", "ref/netstandard1.3/ko/Microsoft.Win32.Registry.xml", "ref/netstandard1.3/ru/Microsoft.Win32.Registry.xml", "ref/netstandard1.3/zh-hans/Microsoft.Win32.Registry.xml", "ref/netstandard1.3/zh-hant/Microsoft.Win32.Registry.xml", "ref/netstandard2.0/Microsoft.Win32.Registry.dll", "ref/netstandard2.0/Microsoft.Win32.Registry.xml", "runtimes/unix/lib/netcoreapp2.0/Microsoft.Win32.Registry.dll", "runtimes/win/lib/net46/Microsoft.Win32.Registry.dll", "runtimes/win/lib/net461/Microsoft.Win32.Registry.dll", "runtimes/win/lib/netcoreapp2.0/Microsoft.Win32.Registry.dll", "runtimes/win/lib/netstandard1.3/Microsoft.Win32.Registry.dll", "useSharedDesignerContext.txt", "version.txt"]
      },
      "NETStandard.Library/2.0.0": {
        "sha512": "7jnbRU+L08FXKMxqUflxEXtVymWvNOrS8yHgu9s6EM8Anr6T/wIX4nZ08j/u3Asz+tCufp3YVwFSEvFTPYmBPA==",
        "type": "package",
        "path": "netstandard.library/2.0.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "build/NETStandard.Library.targets", "build/netstandard2.0/NETStandard.Library.targets", "build/netstandard2.0/ref/Microsoft.Win32.Primitives.dll", "build/netstandard2.0/ref/System.AppContext.dll", "build/netstandard2.0/ref/System.Collections.Concurrent.dll", "build/netstandard2.0/ref/System.Collections.NonGeneric.dll", "build/netstandard2.0/ref/System.Collections.Specialized.dll", "build/netstandard2.0/ref/System.Collections.dll", "build/netstandard2.0/ref/System.ComponentModel.Composition.dll", "build/netstandard2.0/ref/System.ComponentModel.EventBasedAsync.dll", "build/netstandard2.0/ref/System.ComponentModel.Primitives.dll", "build/netstandard2.0/ref/System.ComponentModel.TypeConverter.dll", "build/netstandard2.0/ref/System.ComponentModel.dll", "build/netstandard2.0/ref/System.Console.dll", "build/netstandard2.0/ref/System.Core.dll", "build/netstandard2.0/ref/System.Data.Common.dll", "build/netstandard2.0/ref/System.Data.dll", "build/netstandard2.0/ref/System.Diagnostics.Contracts.dll", "build/netstandard2.0/ref/System.Diagnostics.Debug.dll", "build/netstandard2.0/ref/System.Diagnostics.FileVersionInfo.dll", "build/netstandard2.0/ref/System.Diagnostics.Process.dll", "build/netstandard2.0/ref/System.Diagnostics.StackTrace.dll", "build/netstandard2.0/ref/System.Diagnostics.TextWriterTraceListener.dll", "build/netstandard2.0/ref/System.Diagnostics.Tools.dll", "build/netstandard2.0/ref/System.Diagnostics.TraceSource.dll", "build/netstandard2.0/ref/System.Diagnostics.Tracing.dll", "build/netstandard2.0/ref/System.Drawing.Primitives.dll", "build/netstandard2.0/ref/System.Drawing.dll", "build/netstandard2.0/ref/System.Dynamic.Runtime.dll", "build/netstandard2.0/ref/System.Globalization.Calendars.dll", "build/netstandard2.0/ref/System.Globalization.Extensions.dll", "build/netstandard2.0/ref/System.Globalization.dll", "build/netstandard2.0/ref/System.IO.Compression.FileSystem.dll", "build/netstandard2.0/ref/System.IO.Compression.ZipFile.dll", "build/netstandard2.0/ref/System.IO.Compression.dll", "build/netstandard2.0/ref/System.IO.FileSystem.DriveInfo.dll", "build/netstandard2.0/ref/System.IO.FileSystem.Primitives.dll", "build/netstandard2.0/ref/System.IO.FileSystem.Watcher.dll", "build/netstandard2.0/ref/System.IO.FileSystem.dll", "build/netstandard2.0/ref/System.IO.IsolatedStorage.dll", "build/netstandard2.0/ref/System.IO.MemoryMappedFiles.dll", "build/netstandard2.0/ref/System.IO.Pipes.dll", "build/netstandard2.0/ref/System.IO.UnmanagedMemoryStream.dll", "build/netstandard2.0/ref/System.IO.dll", "build/netstandard2.0/ref/System.Linq.Expressions.dll", "build/netstandard2.0/ref/System.Linq.Parallel.dll", "build/netstandard2.0/ref/System.Linq.Queryable.dll", "build/netstandard2.0/ref/System.Linq.dll", "build/netstandard2.0/ref/System.Net.Http.dll", "build/netstandard2.0/ref/System.Net.NameResolution.dll", "build/netstandard2.0/ref/System.Net.NetworkInformation.dll", "build/netstandard2.0/ref/System.Net.Ping.dll", "build/netstandard2.0/ref/System.Net.Primitives.dll", "build/netstandard2.0/ref/System.Net.Requests.dll", "build/netstandard2.0/ref/System.Net.Security.dll", "build/netstandard2.0/ref/System.Net.Sockets.dll", "build/netstandard2.0/ref/System.Net.WebHeaderCollection.dll", "build/netstandard2.0/ref/System.Net.WebSockets.Client.dll", "build/netstandard2.0/ref/System.Net.WebSockets.dll", "build/netstandard2.0/ref/System.Net.dll", "build/netstandard2.0/ref/System.Numerics.dll", "build/netstandard2.0/ref/System.ObjectModel.dll", "build/netstandard2.0/ref/System.Reflection.Extensions.dll", "build/netstandard2.0/ref/System.Reflection.Primitives.dll", "build/netstandard2.0/ref/System.Reflection.dll", "build/netstandard2.0/ref/System.Resources.Reader.dll", "build/netstandard2.0/ref/System.Resources.ResourceManager.dll", "build/netstandard2.0/ref/System.Resources.Writer.dll", "build/netstandard2.0/ref/System.Runtime.CompilerServices.VisualC.dll", "build/netstandard2.0/ref/System.Runtime.Extensions.dll", "build/netstandard2.0/ref/System.Runtime.Handles.dll", "build/netstandard2.0/ref/System.Runtime.InteropServices.RuntimeInformation.dll", "build/netstandard2.0/ref/System.Runtime.InteropServices.dll", "build/netstandard2.0/ref/System.Runtime.Numerics.dll", "build/netstandard2.0/ref/System.Runtime.Serialization.Formatters.dll", "build/netstandard2.0/ref/System.Runtime.Serialization.Json.dll", "build/netstandard2.0/ref/System.Runtime.Serialization.Primitives.dll", "build/netstandard2.0/ref/System.Runtime.Serialization.Xml.dll", "build/netstandard2.0/ref/System.Runtime.Serialization.dll", "build/netstandard2.0/ref/System.Runtime.dll", "build/netstandard2.0/ref/System.Security.Claims.dll", "build/netstandard2.0/ref/System.Security.Cryptography.Algorithms.dll", "build/netstandard2.0/ref/System.Security.Cryptography.Csp.dll", "build/netstandard2.0/ref/System.Security.Cryptography.Encoding.dll", "build/netstandard2.0/ref/System.Security.Cryptography.Primitives.dll", "build/netstandard2.0/ref/System.Security.Cryptography.X509Certificates.dll", "build/netstandard2.0/ref/System.Security.Principal.dll", "build/netstandard2.0/ref/System.Security.SecureString.dll", "build/netstandard2.0/ref/System.ServiceModel.Web.dll", "build/netstandard2.0/ref/System.Text.Encoding.Extensions.dll", "build/netstandard2.0/ref/System.Text.Encoding.dll", "build/netstandard2.0/ref/System.Text.RegularExpressions.dll", "build/netstandard2.0/ref/System.Threading.Overlapped.dll", "build/netstandard2.0/ref/System.Threading.Tasks.Parallel.dll", "build/netstandard2.0/ref/System.Threading.Tasks.dll", "build/netstandard2.0/ref/System.Threading.Thread.dll", "build/netstandard2.0/ref/System.Threading.ThreadPool.dll", "build/netstandard2.0/ref/System.Threading.Timer.dll", "build/netstandard2.0/ref/System.Threading.dll", "build/netstandard2.0/ref/System.Transactions.dll", "build/netstandard2.0/ref/System.ValueTuple.dll", "build/netstandard2.0/ref/System.Web.dll", "build/netstandard2.0/ref/System.Windows.dll", "build/netstandard2.0/ref/System.Xml.Linq.dll", "build/netstandard2.0/ref/System.Xml.ReaderWriter.dll", "build/netstandard2.0/ref/System.Xml.Serialization.dll", "build/netstandard2.0/ref/System.Xml.XDocument.dll", "build/netstandard2.0/ref/System.Xml.XPath.XDocument.dll", "build/netstandard2.0/ref/System.Xml.XPath.dll", "build/netstandard2.0/ref/System.Xml.XmlDocument.dll", "build/netstandard2.0/ref/System.Xml.XmlSerializer.dll", "build/netstandard2.0/ref/System.Xml.dll", "build/netstandard2.0/ref/System.dll", "build/netstandard2.0/ref/mscorlib.dll", "build/netstandard2.0/ref/netstandard.dll", "build/netstandard2.0/ref/netstandard.xml", "lib/netstandard1.0/_._", "netstandard.library.2.0.0.nupkg.sha512", "netstandard.library.nuspec"]
      },
      "Newtonsoft.Json/10.0.1": {
        "sha512": "ebWzW9j2nwxQeBo59As2TYn7nYr9BHicqqCwHOD1Vdo+50HBtLPuqdiCYJcLdTRknpYis/DSEOQz5KmZxwrIAg==",
        "type": "package",
        "path": "newtonsoft.json/10.0.1",
        "files": ["lib/net20/Newtonsoft.Json.dll", "lib/net20/Newtonsoft.Json.xml", "lib/net35/Newtonsoft.Json.dll", "lib/net35/Newtonsoft.Json.xml", "lib/net40/Newtonsoft.Json.dll", "lib/net40/Newtonsoft.Json.xml", "lib/net45/Newtonsoft.Json.dll", "lib/net45/Newtonsoft.Json.xml", "lib/netstandard1.0/Newtonsoft.Json.dll", "lib/netstandard1.0/Newtonsoft.Json.xml", "lib/netstandard1.3/Newtonsoft.Json.dll", "lib/netstandard1.3/Newtonsoft.Json.xml", "lib/portable-net45+win8+wpa81+wp8/Newtonsoft.Json.dll", "lib/portable-net45+win8+wpa81+wp8/Newtonsoft.Json.xml", "newtonsoft.json.10.0.1.nupkg.sha512", "newtonsoft.json.nuspec", "tools/install.ps1"]
      },
      "Newtonsoft.Json.Bson/1.0.1": {
        "sha512": "5PYT/IqQ+UK31AmZiSS102R6EsTo+LGTSI8bp7WAUqDKaF4wHXD8U9u4WxTI1vc64tYi++8p3dk3WWNqPFgldw==",
        "type": "package",
        "path": "newtonsoft.json.bson/1.0.1",
        "files": ["lib/net45/Newtonsoft.Json.Bson.dll", "lib/net45/Newtonsoft.Json.Bson.xml", "lib/netstandard1.3/Newtonsoft.Json.Bson.dll", "lib/netstandard1.3/Newtonsoft.Json.Bson.xml", "newtonsoft.json.bson.1.0.1.nupkg.sha512", "newtonsoft.json.bson.nuspec"]
      },
      "NuGet.Frameworks/4.0.0": {
        "sha512": "WCkN68c8q+USG+Ot1MmBDH+9DUo5dk7UB0QDMiwCYhrH7ZoFLKFGGNzJ8C3LTR1DvB1LW9BOxKeznnZznKiCTA==",
        "type": "package",
        "path": "nuget.frameworks/4.0.0",
        "files": ["lib/net40-client/NuGet.Frameworks.dll", "lib/net40-client/NuGet.Frameworks.xml", "lib/net45/NuGet.Frameworks.dll", "lib/net45/NuGet.Frameworks.xml", "lib/netstandard1.3/NuGet.Frameworks.dll", "lib/netstandard1.3/NuGet.Frameworks.xml", "nuget.frameworks.4.0.0.nupkg.sha512", "nuget.frameworks.nuspec"]
      },
      "popper.js/1.12.9": {
        "sha512": "WfoI8YXFx31zr8w6AvYMmqKihR3a/wLc5wBhu41ApgBukTM8C2UHNSRFrO6485SDQ/HKoSn9yiEMgfBx1LVNNw==",
        "type": "package",
        "path": "popper.js/1.12.9",
        "files": ["content/Scripts/README.md", "content/Scripts/esm/popper-utils.js", "content/Scripts/esm/popper-utils.js.map", "content/Scripts/esm/popper-utils.min.js", "content/Scripts/esm/popper-utils.min.js.map", "content/Scripts/esm/popper.js", "content/Scripts/esm/popper.js.map", "content/Scripts/esm/popper.min.js", "content/Scripts/esm/popper.min.js.map", "content/Scripts/index.d.ts", "content/Scripts/popper-utils.js", "content/Scripts/popper-utils.js.map", "content/Scripts/popper-utils.min.js", "content/Scripts/popper-utils.min.js.map", "content/Scripts/popper.js", "content/Scripts/popper.js.map", "content/Scripts/popper.min.js", "content/Scripts/popper.min.js.map", "content/Scripts/umd/popper-utils.js", "content/Scripts/umd/popper-utils.js.map", "content/Scripts/umd/popper-utils.min.js", "content/Scripts/umd/popper-utils.min.js.map", "content/Scripts/umd/popper.js", "content/Scripts/umd/popper.js.map", "content/Scripts/umd/popper.min.js", "content/Scripts/umd/popper.min.js.map", "popper.js.1.12.9.nupkg.sha512", "popper.js.nuspec"]
      },
      "Remotion.Linq/2.1.1": {
        "sha512": "IJn0BqkvwEDpP+2qjvci7n4/a9f7DhKESLWb2/uG4xQh3rTkGTBUz69bI4IivCoKkTFAqjXxYDZw2K/npohjsw==",
        "type": "package",
        "path": "remotion.linq/2.1.1",
        "files": ["lib/net35/Remotion.Linq.XML", "lib/net35/Remotion.Linq.dll", "lib/net40/Remotion.Linq.XML", "lib/net40/Remotion.Linq.dll", "lib/net45/Remotion.Linq.XML", "lib/net45/Remotion.Linq.dll", "lib/netstandard1.0/Remotion.Linq.dll", "lib/netstandard1.0/Remotion.Linq.xml", "lib/portable-net45+win+wpa81+wp80/Remotion.Linq.dll", "lib/portable-net45+win+wpa81+wp80/Remotion.Linq.xml", "remotion.linq.2.1.1.nupkg.sha512", "remotion.linq.nuspec"]
      },
      "runtime.debian.8-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "sha512": "HdSSp5MnJSsg08KMfZThpuLPJpPwE5hBXvHwoKWosyHHfe8Mh5WKT0ylEOf6yNzX6Ngjxe4Whkafh5q7Ymac4Q==",
        "type": "package",
        "path": "runtime.debian.8-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "runtime.debian.8-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512", "runtime.debian.8-x64.runtime.native.system.security.cryptography.openssl.nuspec", "runtimes/debian.8-x64/native/System.Security.Cryptography.Native.OpenSsl.so"]
      },
      "runtime.fedora.23-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "sha512": "+yH1a49wJMy8Zt4yx5RhJrxO/DBDByAiCzNwiETI+1S4mPdCu0OY4djdciC7Vssk0l22wQaDLrXxXkp+3+7bVA==",
        "type": "package",
        "path": "runtime.fedora.23-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "runtime.fedora.23-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512", "runtime.fedora.23-x64.runtime.native.system.security.cryptography.openssl.nuspec", "runtimes/fedora.23-x64/native/System.Security.Cryptography.Native.OpenSsl.so"]
      },
      "runtime.fedora.24-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "sha512": "c3YNH1GQJbfIPJeCnr4avseugSqPrxwIqzthYyZDN6EuOyNOzq+y2KSUfRcXauya1sF4foESTgwM5e1A8arAKw==",
        "type": "package",
        "path": "runtime.fedora.24-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "runtime.fedora.24-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512", "runtime.fedora.24-x64.runtime.native.system.security.cryptography.openssl.nuspec", "runtimes/fedora.24-x64/native/System.Security.Cryptography.Native.OpenSsl.so"]
      },
      "runtime.native.System/4.3.0": {
        "sha512": "c/qWt2LieNZIj1jGnVNsE2Kl23Ya2aSTBuXMD6V7k9KWr6l16Tqdwq+hJScEpWER9753NWC8h96PaVNY5Ld7Jw==",
        "type": "package",
        "path": "runtime.native.system/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/netstandard1.0/_._", "runtime.native.system.4.3.0.nupkg.sha512", "runtime.native.system.nuspec"]
      },
      "runtime.native.System.Data.SqlClient.sni/4.4.0": {
        "sha512": "A8v6PGmk+UGbfWo5Ixup0lPM4swuSwOiayJExZwKIOjTlFFQIsu3QnDXECosBEyrWSPryxBVrdqtJyhK3BaupQ==",
        "type": "package",
        "path": "runtime.native.system.data.sqlclient.sni/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "runtime.native.system.data.sqlclient.sni.4.4.0.nupkg.sha512", "runtime.native.system.data.sqlclient.sni.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "runtime.native.System.IO.Compression/4.3.0": {
        "sha512": "INBPonS5QPEgn7naufQFXJEp3zX6L4bwHgJ/ZH78aBTpeNfQMtf7C6VrAFhlq2xxWBveIOWyFzQjJ8XzHMhdOQ==",
        "type": "package",
        "path": "runtime.native.system.io.compression/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/netstandard1.0/_._", "runtime.native.system.io.compression.4.3.0.nupkg.sha512", "runtime.native.system.io.compression.nuspec"]
      },
      "runtime.native.System.Net.Http/4.3.0": {
        "sha512": "ZVuZJqnnegJhd2k/PtAbbIcZ3aZeITq3sj06oKfMBSfphW3HDmk/t4ObvbOk/JA/swGR0LNqMksAh/f7gpTROg==",
        "type": "package",
        "path": "runtime.native.system.net.http/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/netstandard1.0/_._", "runtime.native.system.net.http.4.3.0.nupkg.sha512", "runtime.native.system.net.http.nuspec"]
      },
      "runtime.native.System.Net.Security/4.3.0": {
        "sha512": "M2nN92ePS8BgQ2oi6Jj3PlTUzadYSIWLdZrHY1n1ZcW9o4wAQQ6W+aQ2lfq1ysZQfVCgDwY58alUdowrzezztg==",
        "type": "package",
        "path": "runtime.native.system.net.security/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/netstandard1.0/_._", "runtime.native.system.net.security.4.3.0.nupkg.sha512", "runtime.native.system.net.security.nuspec"]
      },
      "runtime.native.System.Security.Cryptography.Apple/4.3.0": {
        "sha512": "DloMk88juo0OuOWr56QG7MNchmafTLYWvABy36izkrLI5VledI0rq28KGs1i9wbpeT9NPQrx/wTf8U2vazqQ3Q==",
        "type": "package",
        "path": "runtime.native.system.security.cryptography.apple/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/netstandard1.0/_._", "runtime.native.system.security.cryptography.apple.4.3.0.nupkg.sha512", "runtime.native.system.security.cryptography.apple.nuspec"]
      },
      "runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "sha512": "NS1U+700m4KFRHR5o4vo9DSlTmlCKu/u7dtE5sUHVIPB+xpXxYQvgBgA6wEIeCz6Yfn0Z52/72WYsToCEPJnrw==",
        "type": "package",
        "path": "runtime.native.system.security.cryptography.openssl/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/netstandard1.0/_._", "runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512", "runtime.native.system.security.cryptography.openssl.nuspec"]
      },
      "runtime.opensuse.13.2-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "sha512": "b3pthNgxxFcD+Pc0WSEoC0+md3MyhRS6aCEeenvNE3Fdw1HyJ18ZhRFVJJzIeR/O/jpxPboB805Ho0T3Ul7w8A==",
        "type": "package",
        "path": "runtime.opensuse.13.2-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "runtime.opensuse.13.2-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512", "runtime.opensuse.13.2-x64.runtime.native.system.security.cryptography.openssl.nuspec", "runtimes/opensuse.13.2-x64/native/System.Security.Cryptography.Native.OpenSsl.so"]
      },
      "runtime.opensuse.42.1-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "sha512": "KeLz4HClKf+nFS7p/6Fi/CqyLXh81FpiGzcmuS8DGi9lUqSnZ6Es23/gv2O+1XVGfrbNmviF7CckBpavkBoIFQ==",
        "type": "package",
        "path": "runtime.opensuse.42.1-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "runtime.opensuse.42.1-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512", "runtime.opensuse.42.1-x64.runtime.native.system.security.cryptography.openssl.nuspec", "runtimes/opensuse.42.1-x64/native/System.Security.Cryptography.Native.OpenSsl.so"]
      },
      "runtime.osx.10.10-x64.runtime.native.System.Security.Cryptography.Apple/4.3.0": {
        "sha512": "kVXCuMTrTlxq4XOOMAysuNwsXWpYeboGddNGpIgNSZmv1b6r/s/DPk0fYMB7Q5Qo4bY68o48jt4T4y5BVecbCQ==",
        "type": "package",
        "path": "runtime.osx.10.10-x64.runtime.native.system.security.cryptography.apple/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "runtime.osx.10.10-x64.runtime.native.system.security.cryptography.apple.4.3.0.nupkg.sha512", "runtime.osx.10.10-x64.runtime.native.system.security.cryptography.apple.nuspec", "runtimes/osx.10.10-x64/native/System.Security.Cryptography.Native.Apple.dylib"]
      },
      "runtime.osx.10.10-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "sha512": "X7IdhILzr4ROXd8mI1BUCQMSHSQwelUlBjF1JyTKCjXaOGn2fB4EKBxQbCK2VjO3WaWIdlXZL3W6TiIVnrhX4g==",
        "type": "package",
        "path": "runtime.osx.10.10-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "runtime.osx.10.10-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512", "runtime.osx.10.10-x64.runtime.native.system.security.cryptography.openssl.nuspec", "runtimes/osx.10.10-x64/native/System.Security.Cryptography.Native.OpenSsl.dylib"]
      },
      "runtime.rhel.7-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "sha512": "nyFNiCk/r+VOiIqreLix8yN+q3Wga9+SE8BCgkf+2BwEKiNx6DyvFjCgkfV743/grxv8jHJ8gUK4XEQw7yzRYg==",
        "type": "package",
        "path": "runtime.rhel.7-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "runtime.rhel.7-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512", "runtime.rhel.7-x64.runtime.native.system.security.cryptography.openssl.nuspec", "runtimes/rhel.7-x64/native/System.Security.Cryptography.Native.OpenSsl.so"]
      },
      "runtime.ubuntu.14.04-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "sha512": "ytoewC6wGorL7KoCAvRfsgoJPJbNq+64k2SqW6JcOAebWsFUvCCYgfzQMrnpvPiEl4OrblUlhF2ji+Q1+SVLrQ==",
        "type": "package",
        "path": "runtime.ubuntu.14.04-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "runtime.ubuntu.14.04-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512", "runtime.ubuntu.14.04-x64.runtime.native.system.security.cryptography.openssl.nuspec", "runtimes/ubuntu.14.04-x64/native/System.Security.Cryptography.Native.OpenSsl.so"]
      },
      "runtime.ubuntu.16.04-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "sha512": "I8bKw2I8k58Wx7fMKQJn2R8lamboCAiHfHeV/pS65ScKWMMI0+wJkLYlEKvgW1D/XvSl/221clBoR2q9QNNM7A==",
        "type": "package",
        "path": "runtime.ubuntu.16.04-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "runtime.ubuntu.16.04-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512", "runtime.ubuntu.16.04-x64.runtime.native.system.security.cryptography.openssl.nuspec", "runtimes/ubuntu.16.04-x64/native/System.Security.Cryptography.Native.OpenSsl.so"]
      },
      "runtime.ubuntu.16.10-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "sha512": "VB5cn/7OzUfzdnC8tqAIMQciVLiq2epm2NrAm1E9OjNRyG4lVhfR61SMcLizejzQP8R8Uf/0l5qOIbUEi+RdEg==",
        "type": "package",
        "path": "runtime.ubuntu.16.10-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "runtime.ubuntu.16.10-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512", "runtime.ubuntu.16.10-x64.runtime.native.system.security.cryptography.openssl.nuspec", "runtimes/ubuntu.16.10-x64/native/System.Security.Cryptography.Native.OpenSsl.so"]
      },
      "runtime.win-arm64.runtime.native.System.Data.SqlClient.sni/4.4.0": {
        "sha512": "LbrynESTp3bm5O/+jGL8v0Qg5SJlTV08lpIpFesXjF6uGNMWqFnUQbYBJwZTeua6E/Y7FIM1C54Ey1btLWupdg==",
        "type": "package",
        "path": "runtime.win-arm64.runtime.native.system.data.sqlclient.sni/4.4.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "runtime.win-arm64.runtime.native.system.data.sqlclient.sni.4.4.0.nupkg.sha512", "runtime.win-arm64.runtime.native.system.data.sqlclient.sni.nuspec", "runtimes/win-arm64/native/sni.dll", "useSharedDesignerContext.txt", "version.txt"]
      },
      "runtime.win-x64.runtime.native.System.Data.SqlClient.sni/4.4.0": {
        "sha512": "38ugOfkYJqJoX9g6EYRlZB5U2ZJH51UP8ptxZgdpS07FgOEToV+lS11ouNK2PM12Pr6X/PpT5jK82G3DwH/SxQ==",
        "type": "package",
        "path": "runtime.win-x64.runtime.native.system.data.sqlclient.sni/4.4.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "runtime.win-x64.runtime.native.system.data.sqlclient.sni.4.4.0.nupkg.sha512", "runtime.win-x64.runtime.native.system.data.sqlclient.sni.nuspec", "runtimes/win-x64/native/sni.dll", "useSharedDesignerContext.txt", "version.txt"]
      },
      "runtime.win-x86.runtime.native.System.Data.SqlClient.sni/4.4.0": {
        "sha512": "YhEdSQUsTx+C8m8Bw7ar5/VesXvCFMItyZF7G1AUY+OM0VPZUOeAVpJ4Wl6fydBGUYZxojTDR3I6Bj/+BPkJNA==",
        "type": "package",
        "path": "runtime.win-x86.runtime.native.system.data.sqlclient.sni/4.4.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "runtime.win-x86.runtime.native.system.data.sqlclient.sni.4.4.0.nupkg.sha512", "runtime.win-x86.runtime.native.system.data.sqlclient.sni.nuspec", "runtimes/win-x86/native/sni.dll", "useSharedDesignerContext.txt", "version.txt"]
      },
      "SQLitePCLRaw.bundle_green/1.1.7": {
        "sha512": "Kw+n4CUhQ8S4YAPmpRUldO8S7c4LU7HHukJF0v5Sfggf8Ia9YVdIh0dYkMvKvS+DTX+OBORSMqPM0CGfAzFtVA==",
        "type": "package",
        "path": "sqlitepclraw.bundle_green/1.1.7",
        "files": ["build/wp8/SQLitePCLRaw.bundle_green.targets", "build/wp80/arm/SQLitePCLRaw.batteries_green.dll", "build/wp80/arm/SQLitePCLRaw.batteries_v2.dll", "build/wp80/x86/SQLitePCLRaw.batteries_green.dll", "build/wp80/x86/SQLitePCLRaw.batteries_v2.dll", "lib/MonoAndroid/SQLitePCLRaw.batteries_green.dll", "lib/MonoAndroid/SQLitePCLRaw.batteries_v2.dll", "lib/Xamarin.Mac20/SQLitePCLRaw.batteries_green.dll", "lib/Xamarin.Mac20/SQLitePCLRaw.batteries_v2.dll", "lib/Xamarin.iOS10/SQLitePCLRaw.batteries_green.dll", "lib/Xamarin.iOS10/SQLitePCLRaw.batteries_v2.dll", "lib/net35/SQLitePCLRaw.batteries_green.dll", "lib/net35/SQLitePCLRaw.batteries_v2.dll", "lib/net40/SQLitePCLRaw.batteries_green.dll", "lib/net40/SQLitePCLRaw.batteries_v2.dll", "lib/net45/SQLitePCLRaw.batteries_green.dll", "lib/net45/SQLitePCLRaw.batteries_v2.dll", "lib/netcoreapp/SQLitePCLRaw.batteries_green.dll", "lib/netcoreapp/SQLitePCLRaw.batteries_v2.dll", "lib/netstandard1.1/SQLitePCLRaw.batteries_green.dll", "lib/netstandard1.1/SQLitePCLRaw.batteries_v2.dll", "lib/portable-net40+sl5+netcore45+wp8+MonoAndroid10+MonoTouch10+Xamarin.iOS10/SQLitePCLRaw.batteries_green.dll", "lib/portable-net40+sl5+netcore45+wp8+MonoAndroid10+MonoTouch10+Xamarin.iOS10/SQLitePCLRaw.batteries_v2.dll", "lib/portable-net45+netcore45+wpa81+MonoAndroid10+MonoTouch10+Xamarin.iOS10/SQLitePCLRaw.batteries_green.dll", "lib/portable-net45+netcore45+wpa81+MonoAndroid10+MonoTouch10+Xamarin.iOS10/SQLitePCLRaw.batteries_v2.dll", "lib/portable-net45+netcore45+wpa81+wp8+MonoAndroid10+MonoTouch10+Xamarin.iOS10/SQLitePCLRaw.batteries_green.dll", "lib/portable-net45+netcore45+wpa81+wp8+MonoAndroid10+MonoTouch10+Xamarin.iOS10/SQLitePCLRaw.batteries_v2.dll", "lib/uap10.0/SQLitePCLRaw.batteries_green.dll", "lib/uap10.0/SQLitePCLRaw.batteries_v2.dll", "lib/win8/SQLitePCLRaw.batteries_green.dll", "lib/win8/SQLitePCLRaw.batteries_v2.dll", "lib/win81/SQLitePCLRaw.batteries_green.dll", "lib/win81/SQLitePCLRaw.batteries_v2.dll", "lib/wp8/_._", "lib/wpa81/SQLitePCLRaw.batteries_green.dll", "lib/wpa81/SQLitePCLRaw.batteries_v2.dll", "sqlitepclraw.bundle_green.1.1.7.nupkg.sha512", "sqlitepclraw.bundle_green.nuspec"]
      },
      "SQLitePCLRaw.core/1.1.7": {
        "sha512": "u9k9ZFkyTU6CVyXWpRuuXOvKi/cy/xt1oGKVSW8aUKcTL4RdH34yFNtVykEeiR68ojIEvmoZfL51h/xx2IQk5g==",
        "type": "package",
        "path": "sqlitepclraw.core/1.1.7",
        "files": ["lib/MonoAndroid/SQLitePCLRaw.core.dll", "lib/Xamarin.Mac20/SQLitePCLRaw.core.dll", "lib/Xamarin.iOS10/SQLitePCLRaw.core.dll", "lib/net35/SQLitePCLRaw.core.dll", "lib/net40/SQLitePCLRaw.core.dll", "lib/net45/SQLitePCLRaw.core.dll", "lib/netstandard1.0/SQLitePCLRaw.core.dll", "lib/netstandard1.1/SQLitePCLRaw.core.dll", "lib/portable-net40+sl5+netcore45+wp8+MonoAndroid10+MonoTouch10+Xamarin.iOS10/SQLitePCLRaw.core.dll", "lib/portable-net45+netcore45+wpa81+MonoAndroid10+MonoTouch10+Xamarin.iOS10/SQLitePCLRaw.core.dll", "lib/portable-net45+netcore45+wpa81+wp8+MonoAndroid10+MonoTouch10+Xamarin.iOS10/SQLitePCLRaw.core.dll", "lib/uap10.0/SQLitePCLRaw.core.dll", "lib/win8/SQLitePCLRaw.core.dll", "lib/win81/SQLitePCLRaw.core.dll", "lib/wpa81/SQLitePCLRaw.core.dll", "sqlitepclraw.core.1.1.7.nupkg.sha512", "sqlitepclraw.core.nuspec"]
      },
      "SQLitePCLRaw.lib.e_sqlite3.linux/1.1.7": {
        "sha512": "KRqMd1qLwJ4pzPybj8q95s+wV6jby5F0O/rp0vw3wa2Z2wHxRm0VqxS2Sejlr7Ctz+LxSr8DpNg1l1u6n/PAPA==",
        "type": "package",
        "path": "sqlitepclraw.lib.e_sqlite3.linux/1.1.7",
        "files": ["build/net35/SQLitePCLRaw.lib.e_sqlite3.linux.targets", "lib/net35/_._", "lib/netstandard1.0/_._", "lib/netstandard2.0/_._", "runtimes/linux-x64/native/libe_sqlite3.so", "runtimes/linux-x86/native/libe_sqlite3.so", "sqlitepclraw.lib.e_sqlite3.linux.1.1.7.nupkg.sha512", "sqlitepclraw.lib.e_sqlite3.linux.nuspec"]
      },
      "SQLitePCLRaw.lib.e_sqlite3.osx/1.1.7": {
        "sha512": "hdZx1DKHbDi4li6abmJ+A29mxY8D6BcM0s8VMT8p4MWEyrj54CZFUm402jTV6OgZCsFGkbRFnuFdBXf4vSDO7g==",
        "type": "package",
        "path": "sqlitepclraw.lib.e_sqlite3.osx/1.1.7",
        "files": ["build/net35/SQLitePCLRaw.lib.e_sqlite3.osx.targets", "lib/net35/_._", "lib/netstandard1.0/_._", "lib/netstandard2.0/_._", "runtimes/osx-x64/native/libe_sqlite3.dylib", "sqlitepclraw.lib.e_sqlite3.osx.1.1.7.nupkg.sha512", "sqlitepclraw.lib.e_sqlite3.osx.nuspec"]
      },
      "SQLitePCLRaw.lib.e_sqlite3.v110_xp/1.1.7": {
        "sha512": "roIdTH4a4iFa08HOwTWnzj2QYBIpSZRYfLSvHjtbH67I4DSWregrd4jkSnoOuwC5GHG08FNahBfEx3HAsVqW+g==",
        "type": "package",
        "path": "sqlitepclraw.lib.e_sqlite3.v110_xp/1.1.7",
        "files": ["build/net35/SQLitePCLRaw.lib.e_sqlite3.v110_xp.targets", "lib/net35/_._", "lib/netstandard1.0/_._", "lib/netstandard2.0/_._", "runtimes/win7-x64/native/e_sqlite3.dll", "runtimes/win7-x86/native/e_sqlite3.dll", "sqlitepclraw.lib.e_sqlite3.v110_xp.1.1.7.nupkg.sha512", "sqlitepclraw.lib.e_sqlite3.v110_xp.nuspec"]
      },
      "SQLitePCLRaw.provider.e_sqlite3.netstandard11/1.1.7": {
        "sha512": "Zdug2wETm6847337EtD8MoCAtOdwM6prEXL/UsJ97Zxvoeyk/gUpdtuFNBxgJzceuty0jymjxm5yur5QajdApg==",
        "type": "package",
        "path": "sqlitepclraw.provider.e_sqlite3.netstandard11/1.1.7",
        "files": ["lib/netstandard1.1/SQLitePCLRaw.provider.e_sqlite3.dll", "sqlitepclraw.provider.e_sqlite3.netstandard11.1.1.7.nupkg.sha512", "sqlitepclraw.provider.e_sqlite3.netstandard11.nuspec"]
      },
      "StackExchange.Redis.StrongName/1.2.4": {
        "sha512": "qrfSB1BnmM17V20A4yvvNA0HNiDgnBd/CcjaeMKMA4qtup1uuBUMyhl20oj31fRVo71E/fXTbmQCuM9ytBJs6w==",
        "type": "package",
        "path": "stackexchange.redis.strongname/1.2.4",
        "files": ["lib/net45/StackExchange.Redis.StrongName.dll", "lib/net45/StackExchange.Redis.StrongName.xml", "lib/net46/StackExchange.Redis.StrongName.dll", "lib/net46/StackExchange.Redis.StrongName.xml", "lib/netstandard1.5/StackExchange.Redis.StrongName.dll", "lib/netstandard1.5/StackExchange.Redis.StrongName.xml", "stackexchange.redis.strongname.1.2.4.nupkg.sha512", "stackexchange.redis.strongname.nuspec"]
      },
      "System.AppContext/4.3.0": {
        "sha512": "fKC+rmaLfeIzUhagxY17Q9siv/sPrjjKcfNg1Ic8IlQkZLipo8ljcaZQu4VtI4Jqbzjc2VTjzGLF6WmsRXAEgA==",
        "type": "package",
        "path": "system.appcontext/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.AppContext.dll", "lib/net463/System.AppContext.dll", "lib/netcore50/System.AppContext.dll", "lib/netstandard1.6/System.AppContext.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.AppContext.dll", "ref/net463/System.AppContext.dll", "ref/netstandard/_._", "ref/netstandard1.3/System.AppContext.dll", "ref/netstandard1.3/System.AppContext.xml", "ref/netstandard1.3/de/System.AppContext.xml", "ref/netstandard1.3/es/System.AppContext.xml", "ref/netstandard1.3/fr/System.AppContext.xml", "ref/netstandard1.3/it/System.AppContext.xml", "ref/netstandard1.3/ja/System.AppContext.xml", "ref/netstandard1.3/ko/System.AppContext.xml", "ref/netstandard1.3/ru/System.AppContext.xml", "ref/netstandard1.3/zh-hans/System.AppContext.xml", "ref/netstandard1.3/zh-hant/System.AppContext.xml", "ref/netstandard1.6/System.AppContext.dll", "ref/netstandard1.6/System.AppContext.xml", "ref/netstandard1.6/de/System.AppContext.xml", "ref/netstandard1.6/es/System.AppContext.xml", "ref/netstandard1.6/fr/System.AppContext.xml", "ref/netstandard1.6/it/System.AppContext.xml", "ref/netstandard1.6/ja/System.AppContext.xml", "ref/netstandard1.6/ko/System.AppContext.xml", "ref/netstandard1.6/ru/System.AppContext.xml", "ref/netstandard1.6/zh-hans/System.AppContext.xml", "ref/netstandard1.6/zh-hant/System.AppContext.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/aot/lib/netcore50/System.AppContext.dll", "system.appcontext.4.3.0.nupkg.sha512", "system.appcontext.nuspec"]
      },
      "System.Buffers/4.4.0": {
        "sha512": "AwarXzzoDwX6BgrhjoJsk6tUezZEozOT5Y9QKF94Gl4JK91I4PIIBkBco9068Y9/Dra8Dkbie99kXB8+1BaYKw==",
        "type": "package",
        "path": "system.buffers/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/netcoreapp2.0/_._", "lib/netstandard1.1/System.Buffers.dll", "lib/netstandard1.1/System.Buffers.xml", "lib/netstandard2.0/System.Buffers.dll", "lib/netstandard2.0/System.Buffers.xml", "ref/netcoreapp2.0/_._", "ref/netstandard1.1/System.Buffers.dll", "ref/netstandard1.1/System.Buffers.xml", "ref/netstandard2.0/System.Buffers.dll", "ref/netstandard2.0/System.Buffers.xml", "system.buffers.4.4.0.nupkg.sha512", "system.buffers.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.Collections/4.3.0": {
        "sha512": "3Dcj85/TBdVpL5Zr+gEEBUuFe2icOnLalmEh9hfck1PTYbbyWuZgh4fmm2ysCLTrqLQw6t3TgTyJ+VLp+Qb+Lw==",
        "type": "package",
        "path": "system.collections/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Collections.dll", "ref/netcore50/System.Collections.xml", "ref/netcore50/de/System.Collections.xml", "ref/netcore50/es/System.Collections.xml", "ref/netcore50/fr/System.Collections.xml", "ref/netcore50/it/System.Collections.xml", "ref/netcore50/ja/System.Collections.xml", "ref/netcore50/ko/System.Collections.xml", "ref/netcore50/ru/System.Collections.xml", "ref/netcore50/zh-hans/System.Collections.xml", "ref/netcore50/zh-hant/System.Collections.xml", "ref/netstandard1.0/System.Collections.dll", "ref/netstandard1.0/System.Collections.xml", "ref/netstandard1.0/de/System.Collections.xml", "ref/netstandard1.0/es/System.Collections.xml", "ref/netstandard1.0/fr/System.Collections.xml", "ref/netstandard1.0/it/System.Collections.xml", "ref/netstandard1.0/ja/System.Collections.xml", "ref/netstandard1.0/ko/System.Collections.xml", "ref/netstandard1.0/ru/System.Collections.xml", "ref/netstandard1.0/zh-hans/System.Collections.xml", "ref/netstandard1.0/zh-hant/System.Collections.xml", "ref/netstandard1.3/System.Collections.dll", "ref/netstandard1.3/System.Collections.xml", "ref/netstandard1.3/de/System.Collections.xml", "ref/netstandard1.3/es/System.Collections.xml", "ref/netstandard1.3/fr/System.Collections.xml", "ref/netstandard1.3/it/System.Collections.xml", "ref/netstandard1.3/ja/System.Collections.xml", "ref/netstandard1.3/ko/System.Collections.xml", "ref/netstandard1.3/ru/System.Collections.xml", "ref/netstandard1.3/zh-hans/System.Collections.xml", "ref/netstandard1.3/zh-hant/System.Collections.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.collections.4.3.0.nupkg.sha512", "system.collections.nuspec"]
      },
      "System.Collections.Concurrent/4.3.0": {
        "sha512": "ztl69Xp0Y/UXCL+3v3tEU+lIy+bvjKNUmopn1wep/a291pVPK7dxBd6T7WnlQqRog+d1a/hSsgRsmFnIBKTPLQ==",
        "type": "package",
        "path": "system.collections.concurrent/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.Collections.Concurrent.dll", "lib/netstandard1.3/System.Collections.Concurrent.dll", "lib/portable-net45+win8+wpa81/_._", "lib/win8/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Collections.Concurrent.dll", "ref/netcore50/System.Collections.Concurrent.xml", "ref/netcore50/de/System.Collections.Concurrent.xml", "ref/netcore50/es/System.Collections.Concurrent.xml", "ref/netcore50/fr/System.Collections.Concurrent.xml", "ref/netcore50/it/System.Collections.Concurrent.xml", "ref/netcore50/ja/System.Collections.Concurrent.xml", "ref/netcore50/ko/System.Collections.Concurrent.xml", "ref/netcore50/ru/System.Collections.Concurrent.xml", "ref/netcore50/zh-hans/System.Collections.Concurrent.xml", "ref/netcore50/zh-hant/System.Collections.Concurrent.xml", "ref/netstandard1.1/System.Collections.Concurrent.dll", "ref/netstandard1.1/System.Collections.Concurrent.xml", "ref/netstandard1.1/de/System.Collections.Concurrent.xml", "ref/netstandard1.1/es/System.Collections.Concurrent.xml", "ref/netstandard1.1/fr/System.Collections.Concurrent.xml", "ref/netstandard1.1/it/System.Collections.Concurrent.xml", "ref/netstandard1.1/ja/System.Collections.Concurrent.xml", "ref/netstandard1.1/ko/System.Collections.Concurrent.xml", "ref/netstandard1.1/ru/System.Collections.Concurrent.xml", "ref/netstandard1.1/zh-hans/System.Collections.Concurrent.xml", "ref/netstandard1.1/zh-hant/System.Collections.Concurrent.xml", "ref/netstandard1.3/System.Collections.Concurrent.dll", "ref/netstandard1.3/System.Collections.Concurrent.xml", "ref/netstandard1.3/de/System.Collections.Concurrent.xml", "ref/netstandard1.3/es/System.Collections.Concurrent.xml", "ref/netstandard1.3/fr/System.Collections.Concurrent.xml", "ref/netstandard1.3/it/System.Collections.Concurrent.xml", "ref/netstandard1.3/ja/System.Collections.Concurrent.xml", "ref/netstandard1.3/ko/System.Collections.Concurrent.xml", "ref/netstandard1.3/ru/System.Collections.Concurrent.xml", "ref/netstandard1.3/zh-hans/System.Collections.Concurrent.xml", "ref/netstandard1.3/zh-hant/System.Collections.Concurrent.xml", "ref/portable-net45+win8+wpa81/_._", "ref/win8/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.collections.concurrent.4.3.0.nupkg.sha512", "system.collections.concurrent.nuspec"]
      },
      "System.Collections.Immutable/1.4.0": {
        "sha512": "71hw5RUJRu5+q/geUY69gpXD8Upd12cH+F3MwpXV2zle7Bqqkrmc1JblOTuvUcgmdnUtQvBlV5e1d6RH+H2lvA==",
        "type": "package",
        "path": "system.collections.immutable/1.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/netcoreapp2.0/_._", "lib/netstandard1.0/System.Collections.Immutable.dll", "lib/netstandard1.0/System.Collections.Immutable.xml", "lib/netstandard2.0/System.Collections.Immutable.dll", "lib/netstandard2.0/System.Collections.Immutable.xml", "lib/portable-net45+win8+wp8+wpa81/System.Collections.Immutable.dll", "lib/portable-net45+win8+wp8+wpa81/System.Collections.Immutable.xml", "ref/netcoreapp2.0/_._", "system.collections.immutable.1.4.0.nupkg.sha512", "system.collections.immutable.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.Collections.NonGeneric/4.3.0": {
        "sha512": "prtjIEMhGUnQq6RnPEYLpFt8AtLbp9yq2zxOSrY7KJJZrw25Fi97IzBqY7iqssbM61Ek5b8f3MG/sG1N2sN5KA==",
        "type": "package",
        "path": "system.collections.nongeneric/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Collections.NonGeneric.dll", "lib/netstandard1.3/System.Collections.NonGeneric.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Collections.NonGeneric.dll", "ref/netstandard1.3/System.Collections.NonGeneric.dll", "ref/netstandard1.3/System.Collections.NonGeneric.xml", "ref/netstandard1.3/de/System.Collections.NonGeneric.xml", "ref/netstandard1.3/es/System.Collections.NonGeneric.xml", "ref/netstandard1.3/fr/System.Collections.NonGeneric.xml", "ref/netstandard1.3/it/System.Collections.NonGeneric.xml", "ref/netstandard1.3/ja/System.Collections.NonGeneric.xml", "ref/netstandard1.3/ko/System.Collections.NonGeneric.xml", "ref/netstandard1.3/ru/System.Collections.NonGeneric.xml", "ref/netstandard1.3/zh-hans/System.Collections.NonGeneric.xml", "ref/netstandard1.3/zh-hant/System.Collections.NonGeneric.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.collections.nongeneric.4.3.0.nupkg.sha512", "system.collections.nongeneric.nuspec"]
      },
      "System.Collections.Specialized/4.3.0": {
        "sha512": "Epx8PoVZR0iuOnJJDzp7pWvdfMMOAvpUo95pC4ScH2mJuXkKA2Y4aR3cG9qt2klHgSons1WFh4kcGW7cSXvrxg==",
        "type": "package",
        "path": "system.collections.specialized/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Collections.Specialized.dll", "lib/netstandard1.3/System.Collections.Specialized.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Collections.Specialized.dll", "ref/netstandard1.3/System.Collections.Specialized.dll", "ref/netstandard1.3/System.Collections.Specialized.xml", "ref/netstandard1.3/de/System.Collections.Specialized.xml", "ref/netstandard1.3/es/System.Collections.Specialized.xml", "ref/netstandard1.3/fr/System.Collections.Specialized.xml", "ref/netstandard1.3/it/System.Collections.Specialized.xml", "ref/netstandard1.3/ja/System.Collections.Specialized.xml", "ref/netstandard1.3/ko/System.Collections.Specialized.xml", "ref/netstandard1.3/ru/System.Collections.Specialized.xml", "ref/netstandard1.3/zh-hans/System.Collections.Specialized.xml", "ref/netstandard1.3/zh-hant/System.Collections.Specialized.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.collections.specialized.4.3.0.nupkg.sha512", "system.collections.specialized.nuspec"]
      },
      "System.ComponentModel/4.3.0": {
        "sha512": "VyGn1jGRZVfxnh8EdvDCi71v3bMXrsu8aYJOwoV7SNDLVhiEqwP86pPMyRGsDsxhXAm2b3o9OIqeETfN5qfezw==",
        "type": "package",
        "path": "system.componentmodel/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.ComponentModel.dll", "lib/netstandard1.3/System.ComponentModel.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.ComponentModel.dll", "ref/netcore50/System.ComponentModel.xml", "ref/netcore50/de/System.ComponentModel.xml", "ref/netcore50/es/System.ComponentModel.xml", "ref/netcore50/fr/System.ComponentModel.xml", "ref/netcore50/it/System.ComponentModel.xml", "ref/netcore50/ja/System.ComponentModel.xml", "ref/netcore50/ko/System.ComponentModel.xml", "ref/netcore50/ru/System.ComponentModel.xml", "ref/netcore50/zh-hans/System.ComponentModel.xml", "ref/netcore50/zh-hant/System.ComponentModel.xml", "ref/netstandard1.0/System.ComponentModel.dll", "ref/netstandard1.0/System.ComponentModel.xml", "ref/netstandard1.0/de/System.ComponentModel.xml", "ref/netstandard1.0/es/System.ComponentModel.xml", "ref/netstandard1.0/fr/System.ComponentModel.xml", "ref/netstandard1.0/it/System.ComponentModel.xml", "ref/netstandard1.0/ja/System.ComponentModel.xml", "ref/netstandard1.0/ko/System.ComponentModel.xml", "ref/netstandard1.0/ru/System.ComponentModel.xml", "ref/netstandard1.0/zh-hans/System.ComponentModel.xml", "ref/netstandard1.0/zh-hant/System.ComponentModel.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.componentmodel.4.3.0.nupkg.sha512", "system.componentmodel.nuspec"]
      },
      "System.ComponentModel.Annotations/4.4.0": {
        "sha512": "29K3DQ+IGU7LBaMjTo7SI7T7X/tsMtLvz1p56LJ556Iu0Dw3pKZw5g8yCYCWMRxrOF0Hr0FU0FwW0o42y2sb3A==",
        "type": "package",
        "path": "system.componentmodel.annotations/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/net461/System.ComponentModel.Annotations.dll", "lib/netcore50/System.ComponentModel.Annotations.dll", "lib/netcoreapp2.0/_._", "lib/netstandard1.4/System.ComponentModel.Annotations.dll", "lib/netstandard2.0/System.ComponentModel.Annotations.dll", "lib/portable-net45+win8/_._", "lib/win8/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/net461/System.ComponentModel.Annotations.dll", "ref/net461/System.ComponentModel.Annotations.xml", "ref/netcore50/System.ComponentModel.Annotations.dll", "ref/netcore50/System.ComponentModel.Annotations.xml", "ref/netcore50/de/System.ComponentModel.Annotations.xml", "ref/netcore50/es/System.ComponentModel.Annotations.xml", "ref/netcore50/fr/System.ComponentModel.Annotations.xml", "ref/netcore50/it/System.ComponentModel.Annotations.xml", "ref/netcore50/ja/System.ComponentModel.Annotations.xml", "ref/netcore50/ko/System.ComponentModel.Annotations.xml", "ref/netcore50/ru/System.ComponentModel.Annotations.xml", "ref/netcore50/zh-hans/System.ComponentModel.Annotations.xml", "ref/netcore50/zh-hant/System.ComponentModel.Annotations.xml", "ref/netcoreapp2.0/_._", "ref/netstandard1.1/System.ComponentModel.Annotations.dll", "ref/netstandard1.1/System.ComponentModel.Annotations.xml", "ref/netstandard1.1/de/System.ComponentModel.Annotations.xml", "ref/netstandard1.1/es/System.ComponentModel.Annotations.xml", "ref/netstandard1.1/fr/System.ComponentModel.Annotations.xml", "ref/netstandard1.1/it/System.ComponentModel.Annotations.xml", "ref/netstandard1.1/ja/System.ComponentModel.Annotations.xml", "ref/netstandard1.1/ko/System.ComponentModel.Annotations.xml", "ref/netstandard1.1/ru/System.ComponentModel.Annotations.xml", "ref/netstandard1.1/zh-hans/System.ComponentModel.Annotations.xml", "ref/netstandard1.1/zh-hant/System.ComponentModel.Annotations.xml", "ref/netstandard1.3/System.ComponentModel.Annotations.dll", "ref/netstandard1.3/System.ComponentModel.Annotations.xml", "ref/netstandard1.3/de/System.ComponentModel.Annotations.xml", "ref/netstandard1.3/es/System.ComponentModel.Annotations.xml", "ref/netstandard1.3/fr/System.ComponentModel.Annotations.xml", "ref/netstandard1.3/it/System.ComponentModel.Annotations.xml", "ref/netstandard1.3/ja/System.ComponentModel.Annotations.xml", "ref/netstandard1.3/ko/System.ComponentModel.Annotations.xml", "ref/netstandard1.3/ru/System.ComponentModel.Annotations.xml", "ref/netstandard1.3/zh-hans/System.ComponentModel.Annotations.xml", "ref/netstandard1.3/zh-hant/System.ComponentModel.Annotations.xml", "ref/netstandard1.4/System.ComponentModel.Annotations.dll", "ref/netstandard1.4/System.ComponentModel.Annotations.xml", "ref/netstandard1.4/de/System.ComponentModel.Annotations.xml", "ref/netstandard1.4/es/System.ComponentModel.Annotations.xml", "ref/netstandard1.4/fr/System.ComponentModel.Annotations.xml", "ref/netstandard1.4/it/System.ComponentModel.Annotations.xml", "ref/netstandard1.4/ja/System.ComponentModel.Annotations.xml", "ref/netstandard1.4/ko/System.ComponentModel.Annotations.xml", "ref/netstandard1.4/ru/System.ComponentModel.Annotations.xml", "ref/netstandard1.4/zh-hans/System.ComponentModel.Annotations.xml", "ref/netstandard1.4/zh-hant/System.ComponentModel.Annotations.xml", "ref/netstandard2.0/System.ComponentModel.Annotations.dll", "ref/netstandard2.0/System.ComponentModel.Annotations.xml", "ref/portable-net45+win8/_._", "ref/win8/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.componentmodel.annotations.4.4.0.nupkg.sha512", "system.componentmodel.annotations.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.ComponentModel.Primitives/4.3.0": {
        "sha512": "j8GUkCpM8V4d4vhLIIoBLGey2Z5bCkMVNjEZseyAlm4n5arcsJOeI3zkUP+zvZgzsbLTYh4lYeP/ZD/gdIAPrw==",
        "type": "package",
        "path": "system.componentmodel.primitives/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/System.ComponentModel.Primitives.dll", "lib/netstandard1.0/System.ComponentModel.Primitives.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/System.ComponentModel.Primitives.dll", "ref/netstandard1.0/System.ComponentModel.Primitives.dll", "ref/netstandard1.0/System.ComponentModel.Primitives.xml", "ref/netstandard1.0/de/System.ComponentModel.Primitives.xml", "ref/netstandard1.0/es/System.ComponentModel.Primitives.xml", "ref/netstandard1.0/fr/System.ComponentModel.Primitives.xml", "ref/netstandard1.0/it/System.ComponentModel.Primitives.xml", "ref/netstandard1.0/ja/System.ComponentModel.Primitives.xml", "ref/netstandard1.0/ko/System.ComponentModel.Primitives.xml", "ref/netstandard1.0/ru/System.ComponentModel.Primitives.xml", "ref/netstandard1.0/zh-hans/System.ComponentModel.Primitives.xml", "ref/netstandard1.0/zh-hant/System.ComponentModel.Primitives.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.componentmodel.primitives.4.3.0.nupkg.sha512", "system.componentmodel.primitives.nuspec"]
      },
      "System.ComponentModel.TypeConverter/4.3.0": {
        "sha512": "16pQ6P+EdhcXzPiEK4kbA953Fu0MNG2ovxTZU81/qsCd1zPRsKc3uif5NgvllCY598k6bI0KUyKW8fanlfaDQg==",
        "type": "package",
        "path": "system.componentmodel.typeconverter/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/System.ComponentModel.TypeConverter.dll", "lib/net462/System.ComponentModel.TypeConverter.dll", "lib/netstandard1.0/System.ComponentModel.TypeConverter.dll", "lib/netstandard1.5/System.ComponentModel.TypeConverter.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/System.ComponentModel.TypeConverter.dll", "ref/net462/System.ComponentModel.TypeConverter.dll", "ref/netstandard1.0/System.ComponentModel.TypeConverter.dll", "ref/netstandard1.0/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.0/de/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.0/es/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.0/fr/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.0/it/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.0/ja/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.0/ko/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.0/ru/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.0/zh-hans/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.0/zh-hant/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.5/System.ComponentModel.TypeConverter.dll", "ref/netstandard1.5/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.5/de/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.5/es/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.5/fr/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.5/it/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.5/ja/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.5/ko/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.5/ru/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.5/zh-hans/System.ComponentModel.TypeConverter.xml", "ref/netstandard1.5/zh-hant/System.ComponentModel.TypeConverter.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.componentmodel.typeconverter.4.3.0.nupkg.sha512", "system.componentmodel.typeconverter.nuspec"]
      },
      "System.Composition/1.0.31": {
        "sha512": "I+D26qpYdoklyAVUdqwUBrEIckMNjAYnuPJy/h9dsQItpQwVREkDFs4b4tkBza0kT2Yk48Lcfsv2QQ9hWsh9Iw==",
        "type": "package",
        "path": "system.composition/1.0.31",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "system.composition.1.0.31.nupkg.sha512", "system.composition.nuspec"]
      },
      "System.Composition.AttributedModel/1.0.31": {
        "sha512": "NHWhkM3ZkspmA0XJEsKdtTt1ViDYuojgSND3yHhTzwxepiwqZf+BCWuvCbjUt4fe0NxxQhUDGJ5km6sLjo9qnQ==",
        "type": "package",
        "path": "system.composition.attributedmodel/1.0.31",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/netstandard1.0/System.Composition.AttributedModel.dll", "lib/portable-net45+win8+wp8+wpa81/System.Composition.AttributedModel.dll", "system.composition.attributedmodel.1.0.31.nupkg.sha512", "system.composition.attributedmodel.nuspec"]
      },
      "System.Composition.Convention/1.0.31": {
        "sha512": "GLjh2Ju71k6C0qxMMtl4efHa68NmWeIUYh4fkUI8xbjQrEBvFmRwMDFcylT8/PR9SQbeeL48IkFxU/+gd0nYEQ==",
        "type": "package",
        "path": "system.composition.convention/1.0.31",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/netstandard1.0/System.Composition.Convention.dll", "lib/portable-net45+win8+wp8+wpa81/System.Composition.Convention.dll", "system.composition.convention.1.0.31.nupkg.sha512", "system.composition.convention.nuspec"]
      },
      "System.Composition.Hosting/1.0.31": {
        "sha512": "fN1bT4RX4vUqjbgoyuJFVUizAl2mYF5VAb+bVIxIYZSSc0BdnX+yGAxcavxJuDDCQ1K+/mdpgyEFc8e9ikjvrg==",
        "type": "package",
        "path": "system.composition.hosting/1.0.31",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/netstandard1.0/System.Composition.Hosting.dll", "lib/portable-net45+win8+wp8+wpa81/System.Composition.Hosting.dll", "system.composition.hosting.1.0.31.nupkg.sha512", "system.composition.hosting.nuspec"]
      },
      "System.Composition.Runtime/1.0.31": {
        "sha512": "0LEJN+2NVM89CE4SekDrrk5tHV5LeATltkp+9WNYrR+Huiyt0vaCqHbbHtVAjPyeLWIc8dOz/3kthRBj32wGQg==",
        "type": "package",
        "path": "system.composition.runtime/1.0.31",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/netstandard1.0/System.Composition.Runtime.dll", "lib/portable-net45+win8+wp8+wpa81/System.Composition.Runtime.dll", "system.composition.runtime.1.0.31.nupkg.sha512", "system.composition.runtime.nuspec"]
      },
      "System.Composition.TypedParts/1.0.31": {
        "sha512": "0Zae/FtzeFgDBBuILeIbC/T9HMYbW4olAmi8XqqAGosSOWvXfiQLfARZEhiGd0LVXaYgXr0NhxiU1LldRP1fpQ==",
        "type": "package",
        "path": "system.composition.typedparts/1.0.31",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/netstandard1.0/System.Composition.TypedParts.dll", "lib/portable-net45+win8+wp8+wpa81/System.Composition.TypedParts.dll", "system.composition.typedparts.1.0.31.nupkg.sha512", "system.composition.typedparts.nuspec"]
      },
      "System.Console/4.3.0": {
        "sha512": "DHDrIxiqk1h03m6khKWV2X8p/uvN79rgSqpilL6uzpmSfxfU5ng8VcPtW4qsDsQDHiTv6IPV9TmD5M/vElPNLg==",
        "type": "package",
        "path": "system.console/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Console.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Console.dll", "ref/netstandard1.3/System.Console.dll", "ref/netstandard1.3/System.Console.xml", "ref/netstandard1.3/de/System.Console.xml", "ref/netstandard1.3/es/System.Console.xml", "ref/netstandard1.3/fr/System.Console.xml", "ref/netstandard1.3/it/System.Console.xml", "ref/netstandard1.3/ja/System.Console.xml", "ref/netstandard1.3/ko/System.Console.xml", "ref/netstandard1.3/ru/System.Console.xml", "ref/netstandard1.3/zh-hans/System.Console.xml", "ref/netstandard1.3/zh-hant/System.Console.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.console.4.3.0.nupkg.sha512", "system.console.nuspec"]
      },
      "System.Data.SqlClient/4.4.0": {
        "sha512": "fxb9ghn1k1Ua7FFdlvtiBOD4/PsQvD/fk2KnhS+FK7VC6OggEx6P+lP1P0+KMb5V2dqS1+FbR7HCenoqzJMNIA==",
        "type": "package",
        "path": "system.data.sqlclient/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net451/System.Data.SqlClient.dll", "lib/net46/System.Data.SqlClient.dll", "lib/net461/System.Data.SqlClient.dll", "lib/netstandard1.2/System.Data.SqlClient.dll", "lib/netstandard1.3/System.Data.SqlClient.dll", "lib/netstandard2.0/System.Data.SqlClient.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net451/System.Data.SqlClient.dll", "ref/net46/System.Data.SqlClient.dll", "ref/net461/System.Data.SqlClient.dll", "ref/net461/System.Data.SqlClient.xml", "ref/netstandard1.2/System.Data.SqlClient.dll", "ref/netstandard1.2/System.Data.SqlClient.xml", "ref/netstandard1.2/de/System.Data.SqlClient.xml", "ref/netstandard1.2/es/System.Data.SqlClient.xml", "ref/netstandard1.2/fr/System.Data.SqlClient.xml", "ref/netstandard1.2/it/System.Data.SqlClient.xml", "ref/netstandard1.2/ja/System.Data.SqlClient.xml", "ref/netstandard1.2/ko/System.Data.SqlClient.xml", "ref/netstandard1.2/ru/System.Data.SqlClient.xml", "ref/netstandard1.2/zh-hans/System.Data.SqlClient.xml", "ref/netstandard1.2/zh-hant/System.Data.SqlClient.xml", "ref/netstandard1.3/System.Data.SqlClient.dll", "ref/netstandard1.3/System.Data.SqlClient.xml", "ref/netstandard1.3/de/System.Data.SqlClient.xml", "ref/netstandard1.3/es/System.Data.SqlClient.xml", "ref/netstandard1.3/fr/System.Data.SqlClient.xml", "ref/netstandard1.3/it/System.Data.SqlClient.xml", "ref/netstandard1.3/ja/System.Data.SqlClient.xml", "ref/netstandard1.3/ko/System.Data.SqlClient.xml", "ref/netstandard1.3/ru/System.Data.SqlClient.xml", "ref/netstandard1.3/zh-hans/System.Data.SqlClient.xml", "ref/netstandard1.3/zh-hant/System.Data.SqlClient.xml", "ref/netstandard2.0/System.Data.SqlClient.dll", "ref/netstandard2.0/System.Data.SqlClient.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/unix/lib/netstandard1.3/System.Data.SqlClient.dll", "runtimes/unix/lib/netstandard2.0/System.Data.SqlClient.dll", "runtimes/win/lib/net451/System.Data.SqlClient.dll", "runtimes/win/lib/net46/System.Data.SqlClient.dll", "runtimes/win/lib/net461/System.Data.SqlClient.dll", "runtimes/win/lib/netstandard1.3/System.Data.SqlClient.dll", "runtimes/win/lib/netstandard2.0/System.Data.SqlClient.dll", "system.data.sqlclient.4.4.0.nupkg.sha512", "system.data.sqlclient.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.Diagnostics.Contracts/4.3.0": {
        "sha512": "eelRRbnm+OloiQvp9CXS0ixjNQldjjkHO4iIkR5XH2VIP8sUB/SIpa1TdUW6/+HDcQ+MlhP3pNa1u5SbzYuWGA==",
        "type": "package",
        "path": "system.diagnostics.contracts/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.Diagnostics.Contracts.dll", "lib/netstandard1.0/System.Diagnostics.Contracts.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Diagnostics.Contracts.dll", "ref/netcore50/System.Diagnostics.Contracts.xml", "ref/netcore50/de/System.Diagnostics.Contracts.xml", "ref/netcore50/es/System.Diagnostics.Contracts.xml", "ref/netcore50/fr/System.Diagnostics.Contracts.xml", "ref/netcore50/it/System.Diagnostics.Contracts.xml", "ref/netcore50/ja/System.Diagnostics.Contracts.xml", "ref/netcore50/ko/System.Diagnostics.Contracts.xml", "ref/netcore50/ru/System.Diagnostics.Contracts.xml", "ref/netcore50/zh-hans/System.Diagnostics.Contracts.xml", "ref/netcore50/zh-hant/System.Diagnostics.Contracts.xml", "ref/netstandard1.0/System.Diagnostics.Contracts.dll", "ref/netstandard1.0/System.Diagnostics.Contracts.xml", "ref/netstandard1.0/de/System.Diagnostics.Contracts.xml", "ref/netstandard1.0/es/System.Diagnostics.Contracts.xml", "ref/netstandard1.0/fr/System.Diagnostics.Contracts.xml", "ref/netstandard1.0/it/System.Diagnostics.Contracts.xml", "ref/netstandard1.0/ja/System.Diagnostics.Contracts.xml", "ref/netstandard1.0/ko/System.Diagnostics.Contracts.xml", "ref/netstandard1.0/ru/System.Diagnostics.Contracts.xml", "ref/netstandard1.0/zh-hans/System.Diagnostics.Contracts.xml", "ref/netstandard1.0/zh-hant/System.Diagnostics.Contracts.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/aot/lib/netcore50/System.Diagnostics.Contracts.dll", "system.diagnostics.contracts.4.3.0.nupkg.sha512", "system.diagnostics.contracts.nuspec"]
      },
      "System.Diagnostics.Debug/4.3.0": {
        "sha512": "ZUhUOdqmaG5Jk3Xdb8xi5kIyQYAA4PnTNlHx1mu9ZY3qv4ELIdKbnL/akbGaKi2RnNUWaZsAs31rvzFdewTj2g==",
        "type": "package",
        "path": "system.diagnostics.debug/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Diagnostics.Debug.dll", "ref/netcore50/System.Diagnostics.Debug.xml", "ref/netcore50/de/System.Diagnostics.Debug.xml", "ref/netcore50/es/System.Diagnostics.Debug.xml", "ref/netcore50/fr/System.Diagnostics.Debug.xml", "ref/netcore50/it/System.Diagnostics.Debug.xml", "ref/netcore50/ja/System.Diagnostics.Debug.xml", "ref/netcore50/ko/System.Diagnostics.Debug.xml", "ref/netcore50/ru/System.Diagnostics.Debug.xml", "ref/netcore50/zh-hans/System.Diagnostics.Debug.xml", "ref/netcore50/zh-hant/System.Diagnostics.Debug.xml", "ref/netstandard1.0/System.Diagnostics.Debug.dll", "ref/netstandard1.0/System.Diagnostics.Debug.xml", "ref/netstandard1.0/de/System.Diagnostics.Debug.xml", "ref/netstandard1.0/es/System.Diagnostics.Debug.xml", "ref/netstandard1.0/fr/System.Diagnostics.Debug.xml", "ref/netstandard1.0/it/System.Diagnostics.Debug.xml", "ref/netstandard1.0/ja/System.Diagnostics.Debug.xml", "ref/netstandard1.0/ko/System.Diagnostics.Debug.xml", "ref/netstandard1.0/ru/System.Diagnostics.Debug.xml", "ref/netstandard1.0/zh-hans/System.Diagnostics.Debug.xml", "ref/netstandard1.0/zh-hant/System.Diagnostics.Debug.xml", "ref/netstandard1.3/System.Diagnostics.Debug.dll", "ref/netstandard1.3/System.Diagnostics.Debug.xml", "ref/netstandard1.3/de/System.Diagnostics.Debug.xml", "ref/netstandard1.3/es/System.Diagnostics.Debug.xml", "ref/netstandard1.3/fr/System.Diagnostics.Debug.xml", "ref/netstandard1.3/it/System.Diagnostics.Debug.xml", "ref/netstandard1.3/ja/System.Diagnostics.Debug.xml", "ref/netstandard1.3/ko/System.Diagnostics.Debug.xml", "ref/netstandard1.3/ru/System.Diagnostics.Debug.xml", "ref/netstandard1.3/zh-hans/System.Diagnostics.Debug.xml", "ref/netstandard1.3/zh-hant/System.Diagnostics.Debug.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.diagnostics.debug.4.3.0.nupkg.sha512", "system.diagnostics.debug.nuspec"]
      },
      "System.Diagnostics.DiagnosticSource/4.4.1": {
        "sha512": "U/KcC19fyLsPN1GLmeU2zQq15MMVcPwMOYPADVo1+WIoJpvMHxrzvl+BLLZwTEZSneGwaPFZ0aWr0nJ7B7LSdA==",
        "type": "package",
        "path": "system.diagnostics.diagnosticsource/4.4.1",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/net45/System.Diagnostics.DiagnosticSource.dll", "lib/net45/System.Diagnostics.DiagnosticSource.xml", "lib/net46/System.Diagnostics.DiagnosticSource.dll", "lib/net46/System.Diagnostics.DiagnosticSource.xml", "lib/netcoreapp2.0/_._", "lib/netstandard1.1/System.Diagnostics.DiagnosticSource.dll", "lib/netstandard1.1/System.Diagnostics.DiagnosticSource.xml", "lib/netstandard1.3/System.Diagnostics.DiagnosticSource.dll", "lib/netstandard1.3/System.Diagnostics.DiagnosticSource.xml", "lib/portable-net45+win8+wpa81/System.Diagnostics.DiagnosticSource.dll", "lib/portable-net45+win8+wpa81/System.Diagnostics.DiagnosticSource.xml", "ref/netcoreapp2.0/_._", "system.diagnostics.diagnosticsource.4.4.1.nupkg.sha512", "system.diagnostics.diagnosticsource.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.Diagnostics.FileVersionInfo/4.3.0": {
        "sha512": "omCF64wzQ3Q2CeIqkD6lmmxeMZtGHUmzgFMPjfVaOsyqpR66p/JaZzManMw1s33osoAb5gqpncsjie67+yUPHQ==",
        "type": "package",
        "path": "system.diagnostics.fileversioninfo/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Diagnostics.FileVersionInfo.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Diagnostics.FileVersionInfo.dll", "ref/netstandard1.3/System.Diagnostics.FileVersionInfo.dll", "ref/netstandard1.3/System.Diagnostics.FileVersionInfo.xml", "ref/netstandard1.3/de/System.Diagnostics.FileVersionInfo.xml", "ref/netstandard1.3/es/System.Diagnostics.FileVersionInfo.xml", "ref/netstandard1.3/fr/System.Diagnostics.FileVersionInfo.xml", "ref/netstandard1.3/it/System.Diagnostics.FileVersionInfo.xml", "ref/netstandard1.3/ja/System.Diagnostics.FileVersionInfo.xml", "ref/netstandard1.3/ko/System.Diagnostics.FileVersionInfo.xml", "ref/netstandard1.3/ru/System.Diagnostics.FileVersionInfo.xml", "ref/netstandard1.3/zh-hans/System.Diagnostics.FileVersionInfo.xml", "ref/netstandard1.3/zh-hant/System.Diagnostics.FileVersionInfo.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/unix/lib/netstandard1.3/System.Diagnostics.FileVersionInfo.dll", "runtimes/win/lib/net46/System.Diagnostics.FileVersionInfo.dll", "runtimes/win/lib/netcore50/System.Diagnostics.FileVersionInfo.dll", "runtimes/win/lib/netstandard1.3/System.Diagnostics.FileVersionInfo.dll", "system.diagnostics.fileversioninfo.4.3.0.nupkg.sha512", "system.diagnostics.fileversioninfo.nuspec"]
      },
      "System.Diagnostics.StackTrace/4.3.0": {
        "sha512": "BiHg0vgtd35/DM9jvtaC1eKRpWZxr0gcQd643ABG7GnvSlf5pOkY2uyd42mMOJoOmKvnpNj0F4tuoS1pacTwYw==",
        "type": "package",
        "path": "system.diagnostics.stacktrace/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Diagnostics.StackTrace.dll", "lib/netstandard1.3/System.Diagnostics.StackTrace.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Diagnostics.StackTrace.dll", "ref/netstandard1.3/System.Diagnostics.StackTrace.dll", "ref/netstandard1.3/System.Diagnostics.StackTrace.xml", "ref/netstandard1.3/de/System.Diagnostics.StackTrace.xml", "ref/netstandard1.3/es/System.Diagnostics.StackTrace.xml", "ref/netstandard1.3/fr/System.Diagnostics.StackTrace.xml", "ref/netstandard1.3/it/System.Diagnostics.StackTrace.xml", "ref/netstandard1.3/ja/System.Diagnostics.StackTrace.xml", "ref/netstandard1.3/ko/System.Diagnostics.StackTrace.xml", "ref/netstandard1.3/ru/System.Diagnostics.StackTrace.xml", "ref/netstandard1.3/zh-hans/System.Diagnostics.StackTrace.xml", "ref/netstandard1.3/zh-hant/System.Diagnostics.StackTrace.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/aot/lib/netcore50/System.Diagnostics.StackTrace.dll", "system.diagnostics.stacktrace.4.3.0.nupkg.sha512", "system.diagnostics.stacktrace.nuspec"]
      },
      "System.Diagnostics.Tools/4.3.0": {
        "sha512": "UUvkJfSYJMM6x527dJg2VyWPSRqIVB0Z7dbjHst1zmwTXz5CcXSYJFWRpuigfbO1Lf7yfZiIaEUesfnl/g5EyA==",
        "type": "package",
        "path": "system.diagnostics.tools/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Diagnostics.Tools.dll", "ref/netcore50/System.Diagnostics.Tools.xml", "ref/netcore50/de/System.Diagnostics.Tools.xml", "ref/netcore50/es/System.Diagnostics.Tools.xml", "ref/netcore50/fr/System.Diagnostics.Tools.xml", "ref/netcore50/it/System.Diagnostics.Tools.xml", "ref/netcore50/ja/System.Diagnostics.Tools.xml", "ref/netcore50/ko/System.Diagnostics.Tools.xml", "ref/netcore50/ru/System.Diagnostics.Tools.xml", "ref/netcore50/zh-hans/System.Diagnostics.Tools.xml", "ref/netcore50/zh-hant/System.Diagnostics.Tools.xml", "ref/netstandard1.0/System.Diagnostics.Tools.dll", "ref/netstandard1.0/System.Diagnostics.Tools.xml", "ref/netstandard1.0/de/System.Diagnostics.Tools.xml", "ref/netstandard1.0/es/System.Diagnostics.Tools.xml", "ref/netstandard1.0/fr/System.Diagnostics.Tools.xml", "ref/netstandard1.0/it/System.Diagnostics.Tools.xml", "ref/netstandard1.0/ja/System.Diagnostics.Tools.xml", "ref/netstandard1.0/ko/System.Diagnostics.Tools.xml", "ref/netstandard1.0/ru/System.Diagnostics.Tools.xml", "ref/netstandard1.0/zh-hans/System.Diagnostics.Tools.xml", "ref/netstandard1.0/zh-hant/System.Diagnostics.Tools.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.diagnostics.tools.4.3.0.nupkg.sha512", "system.diagnostics.tools.nuspec"]
      },
      "System.Diagnostics.Tracing/4.3.0": {
        "sha512": "rswfv0f/Cqkh78rA5S8eN8Neocz234+emGCtTF3lxPY96F+mmmUen6tbn0glN6PMvlKQb9bPAY5e9u7fgPTkKw==",
        "type": "package",
        "path": "system.diagnostics.tracing/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/net462/System.Diagnostics.Tracing.dll", "lib/portable-net45+win8+wpa81/_._", "lib/win8/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/net462/System.Diagnostics.Tracing.dll", "ref/netcore50/System.Diagnostics.Tracing.dll", "ref/netcore50/System.Diagnostics.Tracing.xml", "ref/netcore50/de/System.Diagnostics.Tracing.xml", "ref/netcore50/es/System.Diagnostics.Tracing.xml", "ref/netcore50/fr/System.Diagnostics.Tracing.xml", "ref/netcore50/it/System.Diagnostics.Tracing.xml", "ref/netcore50/ja/System.Diagnostics.Tracing.xml", "ref/netcore50/ko/System.Diagnostics.Tracing.xml", "ref/netcore50/ru/System.Diagnostics.Tracing.xml", "ref/netcore50/zh-hans/System.Diagnostics.Tracing.xml", "ref/netcore50/zh-hant/System.Diagnostics.Tracing.xml", "ref/netstandard1.1/System.Diagnostics.Tracing.dll", "ref/netstandard1.1/System.Diagnostics.Tracing.xml", "ref/netstandard1.1/de/System.Diagnostics.Tracing.xml", "ref/netstandard1.1/es/System.Diagnostics.Tracing.xml", "ref/netstandard1.1/fr/System.Diagnostics.Tracing.xml", "ref/netstandard1.1/it/System.Diagnostics.Tracing.xml", "ref/netstandard1.1/ja/System.Diagnostics.Tracing.xml", "ref/netstandard1.1/ko/System.Diagnostics.Tracing.xml", "ref/netstandard1.1/ru/System.Diagnostics.Tracing.xml", "ref/netstandard1.1/zh-hans/System.Diagnostics.Tracing.xml", "ref/netstandard1.1/zh-hant/System.Diagnostics.Tracing.xml", "ref/netstandard1.2/System.Diagnostics.Tracing.dll", "ref/netstandard1.2/System.Diagnostics.Tracing.xml", "ref/netstandard1.2/de/System.Diagnostics.Tracing.xml", "ref/netstandard1.2/es/System.Diagnostics.Tracing.xml", "ref/netstandard1.2/fr/System.Diagnostics.Tracing.xml", "ref/netstandard1.2/it/System.Diagnostics.Tracing.xml", "ref/netstandard1.2/ja/System.Diagnostics.Tracing.xml", "ref/netstandard1.2/ko/System.Diagnostics.Tracing.xml", "ref/netstandard1.2/ru/System.Diagnostics.Tracing.xml", "ref/netstandard1.2/zh-hans/System.Diagnostics.Tracing.xml", "ref/netstandard1.2/zh-hant/System.Diagnostics.Tracing.xml", "ref/netstandard1.3/System.Diagnostics.Tracing.dll", "ref/netstandard1.3/System.Diagnostics.Tracing.xml", "ref/netstandard1.3/de/System.Diagnostics.Tracing.xml", "ref/netstandard1.3/es/System.Diagnostics.Tracing.xml", "ref/netstandard1.3/fr/System.Diagnostics.Tracing.xml", "ref/netstandard1.3/it/System.Diagnostics.Tracing.xml", "ref/netstandard1.3/ja/System.Diagnostics.Tracing.xml", "ref/netstandard1.3/ko/System.Diagnostics.Tracing.xml", "ref/netstandard1.3/ru/System.Diagnostics.Tracing.xml", "ref/netstandard1.3/zh-hans/System.Diagnostics.Tracing.xml", "ref/netstandard1.3/zh-hant/System.Diagnostics.Tracing.xml", "ref/netstandard1.5/System.Diagnostics.Tracing.dll", "ref/netstandard1.5/System.Diagnostics.Tracing.xml", "ref/netstandard1.5/de/System.Diagnostics.Tracing.xml", "ref/netstandard1.5/es/System.Diagnostics.Tracing.xml", "ref/netstandard1.5/fr/System.Diagnostics.Tracing.xml", "ref/netstandard1.5/it/System.Diagnostics.Tracing.xml", "ref/netstandard1.5/ja/System.Diagnostics.Tracing.xml", "ref/netstandard1.5/ko/System.Diagnostics.Tracing.xml", "ref/netstandard1.5/ru/System.Diagnostics.Tracing.xml", "ref/netstandard1.5/zh-hans/System.Diagnostics.Tracing.xml", "ref/netstandard1.5/zh-hant/System.Diagnostics.Tracing.xml", "ref/portable-net45+win8+wpa81/_._", "ref/win8/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.diagnostics.tracing.4.3.0.nupkg.sha512", "system.diagnostics.tracing.nuspec"]
      },
      "System.Dynamic.Runtime/4.3.0": {
        "sha512": "SNVi1E/vfWUAs/WYKhE9+qlS6KqK0YVhnlT0HQtr8pMIA8YX3lwy3uPMownDwdYISBdmAF/2holEIldVp85Wag==",
        "type": "package",
        "path": "system.dynamic.runtime/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.Dynamic.Runtime.dll", "lib/netstandard1.3/System.Dynamic.Runtime.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Dynamic.Runtime.dll", "ref/netcore50/System.Dynamic.Runtime.xml", "ref/netcore50/de/System.Dynamic.Runtime.xml", "ref/netcore50/es/System.Dynamic.Runtime.xml", "ref/netcore50/fr/System.Dynamic.Runtime.xml", "ref/netcore50/it/System.Dynamic.Runtime.xml", "ref/netcore50/ja/System.Dynamic.Runtime.xml", "ref/netcore50/ko/System.Dynamic.Runtime.xml", "ref/netcore50/ru/System.Dynamic.Runtime.xml", "ref/netcore50/zh-hans/System.Dynamic.Runtime.xml", "ref/netcore50/zh-hant/System.Dynamic.Runtime.xml", "ref/netstandard1.0/System.Dynamic.Runtime.dll", "ref/netstandard1.0/System.Dynamic.Runtime.xml", "ref/netstandard1.0/de/System.Dynamic.Runtime.xml", "ref/netstandard1.0/es/System.Dynamic.Runtime.xml", "ref/netstandard1.0/fr/System.Dynamic.Runtime.xml", "ref/netstandard1.0/it/System.Dynamic.Runtime.xml", "ref/netstandard1.0/ja/System.Dynamic.Runtime.xml", "ref/netstandard1.0/ko/System.Dynamic.Runtime.xml", "ref/netstandard1.0/ru/System.Dynamic.Runtime.xml", "ref/netstandard1.0/zh-hans/System.Dynamic.Runtime.xml", "ref/netstandard1.0/zh-hant/System.Dynamic.Runtime.xml", "ref/netstandard1.3/System.Dynamic.Runtime.dll", "ref/netstandard1.3/System.Dynamic.Runtime.xml", "ref/netstandard1.3/de/System.Dynamic.Runtime.xml", "ref/netstandard1.3/es/System.Dynamic.Runtime.xml", "ref/netstandard1.3/fr/System.Dynamic.Runtime.xml", "ref/netstandard1.3/it/System.Dynamic.Runtime.xml", "ref/netstandard1.3/ja/System.Dynamic.Runtime.xml", "ref/netstandard1.3/ko/System.Dynamic.Runtime.xml", "ref/netstandard1.3/ru/System.Dynamic.Runtime.xml", "ref/netstandard1.3/zh-hans/System.Dynamic.Runtime.xml", "ref/netstandard1.3/zh-hant/System.Dynamic.Runtime.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/aot/lib/netcore50/System.Dynamic.Runtime.dll", "system.dynamic.runtime.4.3.0.nupkg.sha512", "system.dynamic.runtime.nuspec"]
      },
      "System.Globalization/4.3.0": {
        "sha512": "kYdVd2f2PAdFGblzFswE4hkNANJBKRmsfa2X5LG2AcWE1c7/4t0pYae1L8vfZ5xvE2nK/R9JprtToA61OSHWIg==",
        "type": "package",
        "path": "system.globalization/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Globalization.dll", "ref/netcore50/System.Globalization.xml", "ref/netcore50/de/System.Globalization.xml", "ref/netcore50/es/System.Globalization.xml", "ref/netcore50/fr/System.Globalization.xml", "ref/netcore50/it/System.Globalization.xml", "ref/netcore50/ja/System.Globalization.xml", "ref/netcore50/ko/System.Globalization.xml", "ref/netcore50/ru/System.Globalization.xml", "ref/netcore50/zh-hans/System.Globalization.xml", "ref/netcore50/zh-hant/System.Globalization.xml", "ref/netstandard1.0/System.Globalization.dll", "ref/netstandard1.0/System.Globalization.xml", "ref/netstandard1.0/de/System.Globalization.xml", "ref/netstandard1.0/es/System.Globalization.xml", "ref/netstandard1.0/fr/System.Globalization.xml", "ref/netstandard1.0/it/System.Globalization.xml", "ref/netstandard1.0/ja/System.Globalization.xml", "ref/netstandard1.0/ko/System.Globalization.xml", "ref/netstandard1.0/ru/System.Globalization.xml", "ref/netstandard1.0/zh-hans/System.Globalization.xml", "ref/netstandard1.0/zh-hant/System.Globalization.xml", "ref/netstandard1.3/System.Globalization.dll", "ref/netstandard1.3/System.Globalization.xml", "ref/netstandard1.3/de/System.Globalization.xml", "ref/netstandard1.3/es/System.Globalization.xml", "ref/netstandard1.3/fr/System.Globalization.xml", "ref/netstandard1.3/it/System.Globalization.xml", "ref/netstandard1.3/ja/System.Globalization.xml", "ref/netstandard1.3/ko/System.Globalization.xml", "ref/netstandard1.3/ru/System.Globalization.xml", "ref/netstandard1.3/zh-hans/System.Globalization.xml", "ref/netstandard1.3/zh-hant/System.Globalization.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.globalization.4.3.0.nupkg.sha512", "system.globalization.nuspec"]
      },
      "System.Globalization.Calendars/4.3.0": {
        "sha512": "GUlBtdOWT4LTV3I+9/PJW+56AnnChTaOqqTLFtdmype/L500M2LIyXgmtd9X2P2VOkmJd5c67H5SaC2QcL1bFA==",
        "type": "package",
        "path": "system.globalization.calendars/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Globalization.Calendars.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Globalization.Calendars.dll", "ref/netstandard1.3/System.Globalization.Calendars.dll", "ref/netstandard1.3/System.Globalization.Calendars.xml", "ref/netstandard1.3/de/System.Globalization.Calendars.xml", "ref/netstandard1.3/es/System.Globalization.Calendars.xml", "ref/netstandard1.3/fr/System.Globalization.Calendars.xml", "ref/netstandard1.3/it/System.Globalization.Calendars.xml", "ref/netstandard1.3/ja/System.Globalization.Calendars.xml", "ref/netstandard1.3/ko/System.Globalization.Calendars.xml", "ref/netstandard1.3/ru/System.Globalization.Calendars.xml", "ref/netstandard1.3/zh-hans/System.Globalization.Calendars.xml", "ref/netstandard1.3/zh-hant/System.Globalization.Calendars.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.globalization.calendars.4.3.0.nupkg.sha512", "system.globalization.calendars.nuspec"]
      },
      "System.Globalization.Extensions/4.3.0": {
        "sha512": "FhKmdR6MPG+pxow6wGtNAWdZh7noIOpdD5TwQ3CprzgIE1bBBoim0vbR1+AWsWjQmU7zXHgQo4TWSP6lCeiWcQ==",
        "type": "package",
        "path": "system.globalization.extensions/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Globalization.Extensions.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Globalization.Extensions.dll", "ref/netstandard1.3/System.Globalization.Extensions.dll", "ref/netstandard1.3/System.Globalization.Extensions.xml", "ref/netstandard1.3/de/System.Globalization.Extensions.xml", "ref/netstandard1.3/es/System.Globalization.Extensions.xml", "ref/netstandard1.3/fr/System.Globalization.Extensions.xml", "ref/netstandard1.3/it/System.Globalization.Extensions.xml", "ref/netstandard1.3/ja/System.Globalization.Extensions.xml", "ref/netstandard1.3/ko/System.Globalization.Extensions.xml", "ref/netstandard1.3/ru/System.Globalization.Extensions.xml", "ref/netstandard1.3/zh-hans/System.Globalization.Extensions.xml", "ref/netstandard1.3/zh-hant/System.Globalization.Extensions.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/unix/lib/netstandard1.3/System.Globalization.Extensions.dll", "runtimes/win/lib/net46/System.Globalization.Extensions.dll", "runtimes/win/lib/netstandard1.3/System.Globalization.Extensions.dll", "system.globalization.extensions.4.3.0.nupkg.sha512", "system.globalization.extensions.nuspec"]
      },
      "System.IdentityModel.Tokens.Jwt/5.1.4": {
        "sha512": "hLUU1N99aL9uyxiTraBnCKlpUKsbP/+5ygD7cswspH9/+M7fAAL0hRzt2aA4w7VEQlSSiu8j+xWFk3NRcqhfQQ==",
        "type": "package",
        "path": "system.identitymodel.tokens.jwt/5.1.4",
        "files": ["lib/net45/System.IdentityModel.Tokens.Jwt.dll", "lib/net45/System.IdentityModel.Tokens.Jwt.xml", "lib/net451/System.IdentityModel.Tokens.Jwt.dll", "lib/net451/System.IdentityModel.Tokens.Jwt.xml", "lib/netstandard1.4/System.IdentityModel.Tokens.Jwt.dll", "lib/netstandard1.4/System.IdentityModel.Tokens.Jwt.xml", "system.identitymodel.tokens.jwt.5.1.4.nupkg.sha512", "system.identitymodel.tokens.jwt.nuspec"]
      },
      "System.Interactive.Async/3.1.1": {
        "sha512": "hZccYiIE5RS1/J9Tb/BNtosAGVggdlsJm4Ojdu+gDV0p4AIi+LUfUogMKkRacljQEJd2AG6vYzvcjhQFkqoZmw==",
        "type": "package",
        "path": "system.interactive.async/3.1.1",
        "files": ["lib/net45/System.Interactive.Async.dll", "lib/net45/System.Interactive.Async.xml", "lib/net46/System.Interactive.Async.dll", "lib/net46/System.Interactive.Async.xml", "lib/netstandard1.0/System.Interactive.Async.dll", "lib/netstandard1.0/System.Interactive.Async.xml", "lib/netstandard1.3/System.Interactive.Async.dll", "lib/netstandard1.3/System.Interactive.Async.xml", "system.interactive.async.3.1.1.nupkg.sha512", "system.interactive.async.nuspec"]
      },
      "System.IO/4.3.0": {
        "sha512": "3qjaHvxQPDpSOYICjUoTsmoq5u6QJAFRUITgeT/4gqkF1bajbSmb1kwSxEA8AHlofqgcKJcM8udgieRNhaJ5Cg==",
        "type": "package",
        "path": "system.io/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/net462/System.IO.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/net462/System.IO.dll", "ref/netcore50/System.IO.dll", "ref/netcore50/System.IO.xml", "ref/netcore50/de/System.IO.xml", "ref/netcore50/es/System.IO.xml", "ref/netcore50/fr/System.IO.xml", "ref/netcore50/it/System.IO.xml", "ref/netcore50/ja/System.IO.xml", "ref/netcore50/ko/System.IO.xml", "ref/netcore50/ru/System.IO.xml", "ref/netcore50/zh-hans/System.IO.xml", "ref/netcore50/zh-hant/System.IO.xml", "ref/netstandard1.0/System.IO.dll", "ref/netstandard1.0/System.IO.xml", "ref/netstandard1.0/de/System.IO.xml", "ref/netstandard1.0/es/System.IO.xml", "ref/netstandard1.0/fr/System.IO.xml", "ref/netstandard1.0/it/System.IO.xml", "ref/netstandard1.0/ja/System.IO.xml", "ref/netstandard1.0/ko/System.IO.xml", "ref/netstandard1.0/ru/System.IO.xml", "ref/netstandard1.0/zh-hans/System.IO.xml", "ref/netstandard1.0/zh-hant/System.IO.xml", "ref/netstandard1.3/System.IO.dll", "ref/netstandard1.3/System.IO.xml", "ref/netstandard1.3/de/System.IO.xml", "ref/netstandard1.3/es/System.IO.xml", "ref/netstandard1.3/fr/System.IO.xml", "ref/netstandard1.3/it/System.IO.xml", "ref/netstandard1.3/ja/System.IO.xml", "ref/netstandard1.3/ko/System.IO.xml", "ref/netstandard1.3/ru/System.IO.xml", "ref/netstandard1.3/zh-hans/System.IO.xml", "ref/netstandard1.3/zh-hant/System.IO.xml", "ref/netstandard1.5/System.IO.dll", "ref/netstandard1.5/System.IO.xml", "ref/netstandard1.5/de/System.IO.xml", "ref/netstandard1.5/es/System.IO.xml", "ref/netstandard1.5/fr/System.IO.xml", "ref/netstandard1.5/it/System.IO.xml", "ref/netstandard1.5/ja/System.IO.xml", "ref/netstandard1.5/ko/System.IO.xml", "ref/netstandard1.5/ru/System.IO.xml", "ref/netstandard1.5/zh-hans/System.IO.xml", "ref/netstandard1.5/zh-hant/System.IO.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.io.4.3.0.nupkg.sha512", "system.io.nuspec"]
      },
      "System.IO.Compression/4.3.0": {
        "sha512": "YHndyoiV90iu4iKG115ibkhrG+S3jBm8Ap9OwoUAzO5oPDAWcr0SFwQFm0HjM8WkEZWo0zvLTyLmbvTkW1bXgg==",
        "type": "package",
        "path": "system.io.compression/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/net46/System.IO.Compression.dll", "lib/portable-net45+win8+wpa81/_._", "lib/win8/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/net46/System.IO.Compression.dll", "ref/netcore50/System.IO.Compression.dll", "ref/netcore50/System.IO.Compression.xml", "ref/netcore50/de/System.IO.Compression.xml", "ref/netcore50/es/System.IO.Compression.xml", "ref/netcore50/fr/System.IO.Compression.xml", "ref/netcore50/it/System.IO.Compression.xml", "ref/netcore50/ja/System.IO.Compression.xml", "ref/netcore50/ko/System.IO.Compression.xml", "ref/netcore50/ru/System.IO.Compression.xml", "ref/netcore50/zh-hans/System.IO.Compression.xml", "ref/netcore50/zh-hant/System.IO.Compression.xml", "ref/netstandard1.1/System.IO.Compression.dll", "ref/netstandard1.1/System.IO.Compression.xml", "ref/netstandard1.1/de/System.IO.Compression.xml", "ref/netstandard1.1/es/System.IO.Compression.xml", "ref/netstandard1.1/fr/System.IO.Compression.xml", "ref/netstandard1.1/it/System.IO.Compression.xml", "ref/netstandard1.1/ja/System.IO.Compression.xml", "ref/netstandard1.1/ko/System.IO.Compression.xml", "ref/netstandard1.1/ru/System.IO.Compression.xml", "ref/netstandard1.1/zh-hans/System.IO.Compression.xml", "ref/netstandard1.1/zh-hant/System.IO.Compression.xml", "ref/netstandard1.3/System.IO.Compression.dll", "ref/netstandard1.3/System.IO.Compression.xml", "ref/netstandard1.3/de/System.IO.Compression.xml", "ref/netstandard1.3/es/System.IO.Compression.xml", "ref/netstandard1.3/fr/System.IO.Compression.xml", "ref/netstandard1.3/it/System.IO.Compression.xml", "ref/netstandard1.3/ja/System.IO.Compression.xml", "ref/netstandard1.3/ko/System.IO.Compression.xml", "ref/netstandard1.3/ru/System.IO.Compression.xml", "ref/netstandard1.3/zh-hans/System.IO.Compression.xml", "ref/netstandard1.3/zh-hant/System.IO.Compression.xml", "ref/portable-net45+win8+wpa81/_._", "ref/win8/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/unix/lib/netstandard1.3/System.IO.Compression.dll", "runtimes/win/lib/net46/System.IO.Compression.dll", "runtimes/win/lib/netstandard1.3/System.IO.Compression.dll", "system.io.compression.4.3.0.nupkg.sha512", "system.io.compression.nuspec"]
      },
      "System.IO.FileSystem/4.3.0": {
        "sha512": "3wEMARTnuio+ulnvi+hkRNROYwa1kylvYahhcLk4HSoVdl+xxTFVeVlYOfLwrDPImGls0mDqbMhrza8qnWPTdA==",
        "type": "package",
        "path": "system.io.filesystem/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.IO.FileSystem.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.IO.FileSystem.dll", "ref/netstandard1.3/System.IO.FileSystem.dll", "ref/netstandard1.3/System.IO.FileSystem.xml", "ref/netstandard1.3/de/System.IO.FileSystem.xml", "ref/netstandard1.3/es/System.IO.FileSystem.xml", "ref/netstandard1.3/fr/System.IO.FileSystem.xml", "ref/netstandard1.3/it/System.IO.FileSystem.xml", "ref/netstandard1.3/ja/System.IO.FileSystem.xml", "ref/netstandard1.3/ko/System.IO.FileSystem.xml", "ref/netstandard1.3/ru/System.IO.FileSystem.xml", "ref/netstandard1.3/zh-hans/System.IO.FileSystem.xml", "ref/netstandard1.3/zh-hant/System.IO.FileSystem.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.io.filesystem.4.3.0.nupkg.sha512", "system.io.filesystem.nuspec"]
      },
      "System.IO.FileSystem.Primitives/4.3.0": {
        "sha512": "6QOb2XFLch7bEc4lIcJH49nJN2HV+OC3fHDgsLVsBVBk3Y4hFAnOBGzJ2lUu7CyDDFo9IBWkSsnbkT6IBwwiMw==",
        "type": "package",
        "path": "system.io.filesystem.primitives/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.IO.FileSystem.Primitives.dll", "lib/netstandard1.3/System.IO.FileSystem.Primitives.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.IO.FileSystem.Primitives.dll", "ref/netstandard1.3/System.IO.FileSystem.Primitives.dll", "ref/netstandard1.3/System.IO.FileSystem.Primitives.xml", "ref/netstandard1.3/de/System.IO.FileSystem.Primitives.xml", "ref/netstandard1.3/es/System.IO.FileSystem.Primitives.xml", "ref/netstandard1.3/fr/System.IO.FileSystem.Primitives.xml", "ref/netstandard1.3/it/System.IO.FileSystem.Primitives.xml", "ref/netstandard1.3/ja/System.IO.FileSystem.Primitives.xml", "ref/netstandard1.3/ko/System.IO.FileSystem.Primitives.xml", "ref/netstandard1.3/ru/System.IO.FileSystem.Primitives.xml", "ref/netstandard1.3/zh-hans/System.IO.FileSystem.Primitives.xml", "ref/netstandard1.3/zh-hant/System.IO.FileSystem.Primitives.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.io.filesystem.primitives.4.3.0.nupkg.sha512", "system.io.filesystem.primitives.nuspec"]
      },
      "System.Linq/4.3.0": {
        "sha512": "5DbqIUpsDp0dFftytzuMmc0oeMdQwjcP/EWxsksIz/w1TcFRkZ3yKKz0PqiYFMmEwPSWw+qNVqD7PJ889JzHbw==",
        "type": "package",
        "path": "system.linq/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/net463/System.Linq.dll", "lib/netcore50/System.Linq.dll", "lib/netstandard1.6/System.Linq.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/net463/System.Linq.dll", "ref/netcore50/System.Linq.dll", "ref/netcore50/System.Linq.xml", "ref/netcore50/de/System.Linq.xml", "ref/netcore50/es/System.Linq.xml", "ref/netcore50/fr/System.Linq.xml", "ref/netcore50/it/System.Linq.xml", "ref/netcore50/ja/System.Linq.xml", "ref/netcore50/ko/System.Linq.xml", "ref/netcore50/ru/System.Linq.xml", "ref/netcore50/zh-hans/System.Linq.xml", "ref/netcore50/zh-hant/System.Linq.xml", "ref/netstandard1.0/System.Linq.dll", "ref/netstandard1.0/System.Linq.xml", "ref/netstandard1.0/de/System.Linq.xml", "ref/netstandard1.0/es/System.Linq.xml", "ref/netstandard1.0/fr/System.Linq.xml", "ref/netstandard1.0/it/System.Linq.xml", "ref/netstandard1.0/ja/System.Linq.xml", "ref/netstandard1.0/ko/System.Linq.xml", "ref/netstandard1.0/ru/System.Linq.xml", "ref/netstandard1.0/zh-hans/System.Linq.xml", "ref/netstandard1.0/zh-hant/System.Linq.xml", "ref/netstandard1.6/System.Linq.dll", "ref/netstandard1.6/System.Linq.xml", "ref/netstandard1.6/de/System.Linq.xml", "ref/netstandard1.6/es/System.Linq.xml", "ref/netstandard1.6/fr/System.Linq.xml", "ref/netstandard1.6/it/System.Linq.xml", "ref/netstandard1.6/ja/System.Linq.xml", "ref/netstandard1.6/ko/System.Linq.xml", "ref/netstandard1.6/ru/System.Linq.xml", "ref/netstandard1.6/zh-hans/System.Linq.xml", "ref/netstandard1.6/zh-hant/System.Linq.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.linq.4.3.0.nupkg.sha512", "system.linq.nuspec"]
      },
      "System.Linq.Expressions/4.3.0": {
        "sha512": "PGKkrd2khG4CnlyJwxwwaWWiSiWFNBGlgXvJpeO0xCXrZ89ODrQ6tjEWS/kOqZ8GwEOUATtKtzp1eRgmYNfclg==",
        "type": "package",
        "path": "system.linq.expressions/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/net463/System.Linq.Expressions.dll", "lib/netcore50/System.Linq.Expressions.dll", "lib/netstandard1.6/System.Linq.Expressions.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/net463/System.Linq.Expressions.dll", "ref/netcore50/System.Linq.Expressions.dll", "ref/netcore50/System.Linq.Expressions.xml", "ref/netcore50/de/System.Linq.Expressions.xml", "ref/netcore50/es/System.Linq.Expressions.xml", "ref/netcore50/fr/System.Linq.Expressions.xml", "ref/netcore50/it/System.Linq.Expressions.xml", "ref/netcore50/ja/System.Linq.Expressions.xml", "ref/netcore50/ko/System.Linq.Expressions.xml", "ref/netcore50/ru/System.Linq.Expressions.xml", "ref/netcore50/zh-hans/System.Linq.Expressions.xml", "ref/netcore50/zh-hant/System.Linq.Expressions.xml", "ref/netstandard1.0/System.Linq.Expressions.dll", "ref/netstandard1.0/System.Linq.Expressions.xml", "ref/netstandard1.0/de/System.Linq.Expressions.xml", "ref/netstandard1.0/es/System.Linq.Expressions.xml", "ref/netstandard1.0/fr/System.Linq.Expressions.xml", "ref/netstandard1.0/it/System.Linq.Expressions.xml", "ref/netstandard1.0/ja/System.Linq.Expressions.xml", "ref/netstandard1.0/ko/System.Linq.Expressions.xml", "ref/netstandard1.0/ru/System.Linq.Expressions.xml", "ref/netstandard1.0/zh-hans/System.Linq.Expressions.xml", "ref/netstandard1.0/zh-hant/System.Linq.Expressions.xml", "ref/netstandard1.3/System.Linq.Expressions.dll", "ref/netstandard1.3/System.Linq.Expressions.xml", "ref/netstandard1.3/de/System.Linq.Expressions.xml", "ref/netstandard1.3/es/System.Linq.Expressions.xml", "ref/netstandard1.3/fr/System.Linq.Expressions.xml", "ref/netstandard1.3/it/System.Linq.Expressions.xml", "ref/netstandard1.3/ja/System.Linq.Expressions.xml", "ref/netstandard1.3/ko/System.Linq.Expressions.xml", "ref/netstandard1.3/ru/System.Linq.Expressions.xml", "ref/netstandard1.3/zh-hans/System.Linq.Expressions.xml", "ref/netstandard1.3/zh-hant/System.Linq.Expressions.xml", "ref/netstandard1.6/System.Linq.Expressions.dll", "ref/netstandard1.6/System.Linq.Expressions.xml", "ref/netstandard1.6/de/System.Linq.Expressions.xml", "ref/netstandard1.6/es/System.Linq.Expressions.xml", "ref/netstandard1.6/fr/System.Linq.Expressions.xml", "ref/netstandard1.6/it/System.Linq.Expressions.xml", "ref/netstandard1.6/ja/System.Linq.Expressions.xml", "ref/netstandard1.6/ko/System.Linq.Expressions.xml", "ref/netstandard1.6/ru/System.Linq.Expressions.xml", "ref/netstandard1.6/zh-hans/System.Linq.Expressions.xml", "ref/netstandard1.6/zh-hant/System.Linq.Expressions.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/aot/lib/netcore50/System.Linq.Expressions.dll", "system.linq.expressions.4.3.0.nupkg.sha512", "system.linq.expressions.nuspec"]
      },
      "System.Linq.Parallel/4.3.0": {
        "sha512": "td7x21K8LalpjTWCzW/nQboQIFbq9i0r+PCyBBCdLWWnm4NBcdN18vpz/G9hCpUaCIfRL+ZxJNVTywlNlB1aLQ==",
        "type": "package",
        "path": "system.linq.parallel/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.Linq.Parallel.dll", "lib/netstandard1.3/System.Linq.Parallel.dll", "lib/portable-net45+win8+wpa81/_._", "lib/win8/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Linq.Parallel.dll", "ref/netcore50/System.Linq.Parallel.xml", "ref/netcore50/de/System.Linq.Parallel.xml", "ref/netcore50/es/System.Linq.Parallel.xml", "ref/netcore50/fr/System.Linq.Parallel.xml", "ref/netcore50/it/System.Linq.Parallel.xml", "ref/netcore50/ja/System.Linq.Parallel.xml", "ref/netcore50/ko/System.Linq.Parallel.xml", "ref/netcore50/ru/System.Linq.Parallel.xml", "ref/netcore50/zh-hans/System.Linq.Parallel.xml", "ref/netcore50/zh-hant/System.Linq.Parallel.xml", "ref/netstandard1.1/System.Linq.Parallel.dll", "ref/netstandard1.1/System.Linq.Parallel.xml", "ref/netstandard1.1/de/System.Linq.Parallel.xml", "ref/netstandard1.1/es/System.Linq.Parallel.xml", "ref/netstandard1.1/fr/System.Linq.Parallel.xml", "ref/netstandard1.1/it/System.Linq.Parallel.xml", "ref/netstandard1.1/ja/System.Linq.Parallel.xml", "ref/netstandard1.1/ko/System.Linq.Parallel.xml", "ref/netstandard1.1/ru/System.Linq.Parallel.xml", "ref/netstandard1.1/zh-hans/System.Linq.Parallel.xml", "ref/netstandard1.1/zh-hant/System.Linq.Parallel.xml", "ref/portable-net45+win8+wpa81/_._", "ref/win8/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.linq.parallel.4.3.0.nupkg.sha512", "system.linq.parallel.nuspec"]
      },
      "System.Linq.Queryable/4.0.1": {
        "sha512": "Yn/WfYe9RoRfmSLvUt2JerP0BTGGykCZkQPgojaxgzF2N0oPo+/AhB8TXOpdCcNlrG3VRtsamtK2uzsp3cqRVw==",
        "type": "package",
        "path": "system.linq.queryable/4.0.1",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/monoandroid10/_._", "lib/monotouch10/_._", "lib/net45/_._", "lib/netcore50/System.Linq.Queryable.dll", "lib/netstandard1.3/System.Linq.Queryable.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/monoandroid10/_._", "ref/monotouch10/_._", "ref/net45/_._", "ref/netcore50/System.Linq.Queryable.dll", "ref/netcore50/System.Linq.Queryable.xml", "ref/netcore50/de/System.Linq.Queryable.xml", "ref/netcore50/es/System.Linq.Queryable.xml", "ref/netcore50/fr/System.Linq.Queryable.xml", "ref/netcore50/it/System.Linq.Queryable.xml", "ref/netcore50/ja/System.Linq.Queryable.xml", "ref/netcore50/ko/System.Linq.Queryable.xml", "ref/netcore50/ru/System.Linq.Queryable.xml", "ref/netcore50/zh-hans/System.Linq.Queryable.xml", "ref/netcore50/zh-hant/System.Linq.Queryable.xml", "ref/netstandard1.0/System.Linq.Queryable.dll", "ref/netstandard1.0/System.Linq.Queryable.xml", "ref/netstandard1.0/de/System.Linq.Queryable.xml", "ref/netstandard1.0/es/System.Linq.Queryable.xml", "ref/netstandard1.0/fr/System.Linq.Queryable.xml", "ref/netstandard1.0/it/System.Linq.Queryable.xml", "ref/netstandard1.0/ja/System.Linq.Queryable.xml", "ref/netstandard1.0/ko/System.Linq.Queryable.xml", "ref/netstandard1.0/ru/System.Linq.Queryable.xml", "ref/netstandard1.0/zh-hans/System.Linq.Queryable.xml", "ref/netstandard1.0/zh-hant/System.Linq.Queryable.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.linq.queryable.4.0.1.nupkg.sha512", "system.linq.queryable.nuspec"]
      },
      "System.Net.Http/4.3.0": {
        "sha512": "sYg+FtILtRQuYWSIAuNOELwVuVsxVyJGWQyOnlAzhV4xvhyFnON1bAzYYC+jjRW8JREM45R0R5Dgi8MTC5sEwA==",
        "type": "package",
        "path": "system.net.http/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/Xamarinmac20/_._", "lib/monoandroid10/_._", "lib/monotouch10/_._", "lib/net45/_._", "lib/net46/System.Net.Http.dll", "lib/portable-net45+win8+wpa81/_._", "lib/win8/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/Xamarinmac20/_._", "ref/monoandroid10/_._", "ref/monotouch10/_._", "ref/net45/_._", "ref/net46/System.Net.Http.dll", "ref/net46/System.Net.Http.xml", "ref/net46/de/System.Net.Http.xml", "ref/net46/es/System.Net.Http.xml", "ref/net46/fr/System.Net.Http.xml", "ref/net46/it/System.Net.Http.xml", "ref/net46/ja/System.Net.Http.xml", "ref/net46/ko/System.Net.Http.xml", "ref/net46/ru/System.Net.Http.xml", "ref/net46/zh-hans/System.Net.Http.xml", "ref/net46/zh-hant/System.Net.Http.xml", "ref/netcore50/System.Net.Http.dll", "ref/netcore50/System.Net.Http.xml", "ref/netcore50/de/System.Net.Http.xml", "ref/netcore50/es/System.Net.Http.xml", "ref/netcore50/fr/System.Net.Http.xml", "ref/netcore50/it/System.Net.Http.xml", "ref/netcore50/ja/System.Net.Http.xml", "ref/netcore50/ko/System.Net.Http.xml", "ref/netcore50/ru/System.Net.Http.xml", "ref/netcore50/zh-hans/System.Net.Http.xml", "ref/netcore50/zh-hant/System.Net.Http.xml", "ref/netstandard1.1/System.Net.Http.dll", "ref/netstandard1.1/System.Net.Http.xml", "ref/netstandard1.1/de/System.Net.Http.xml", "ref/netstandard1.1/es/System.Net.Http.xml", "ref/netstandard1.1/fr/System.Net.Http.xml", "ref/netstandard1.1/it/System.Net.Http.xml", "ref/netstandard1.1/ja/System.Net.Http.xml", "ref/netstandard1.1/ko/System.Net.Http.xml", "ref/netstandard1.1/ru/System.Net.Http.xml", "ref/netstandard1.1/zh-hans/System.Net.Http.xml", "ref/netstandard1.1/zh-hant/System.Net.Http.xml", "ref/netstandard1.3/System.Net.Http.dll", "ref/netstandard1.3/System.Net.Http.xml", "ref/netstandard1.3/de/System.Net.Http.xml", "ref/netstandard1.3/es/System.Net.Http.xml", "ref/netstandard1.3/fr/System.Net.Http.xml", "ref/netstandard1.3/it/System.Net.Http.xml", "ref/netstandard1.3/ja/System.Net.Http.xml", "ref/netstandard1.3/ko/System.Net.Http.xml", "ref/netstandard1.3/ru/System.Net.Http.xml", "ref/netstandard1.3/zh-hans/System.Net.Http.xml", "ref/netstandard1.3/zh-hant/System.Net.Http.xml", "ref/portable-net45+win8+wpa81/_._", "ref/win8/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/unix/lib/netstandard1.6/System.Net.Http.dll", "runtimes/win/lib/net46/System.Net.Http.dll", "runtimes/win/lib/netcore50/System.Net.Http.dll", "runtimes/win/lib/netstandard1.3/System.Net.Http.dll", "system.net.http.4.3.0.nupkg.sha512", "system.net.http.nuspec"]
      },
      "System.Net.NameResolution/4.3.0": {
        "sha512": "AFYl08R7MrsrEjqpQWTZWBadqXyTzNDaWpMqyxhb0d6sGhV6xMDKueuBXlLL30gz+DIRY6MpdgnHWlCh5wmq9w==",
        "type": "package",
        "path": "system.net.nameresolution/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Net.NameResolution.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Net.NameResolution.dll", "ref/netstandard1.3/System.Net.NameResolution.dll", "ref/netstandard1.3/System.Net.NameResolution.xml", "ref/netstandard1.3/de/System.Net.NameResolution.xml", "ref/netstandard1.3/es/System.Net.NameResolution.xml", "ref/netstandard1.3/fr/System.Net.NameResolution.xml", "ref/netstandard1.3/it/System.Net.NameResolution.xml", "ref/netstandard1.3/ja/System.Net.NameResolution.xml", "ref/netstandard1.3/ko/System.Net.NameResolution.xml", "ref/netstandard1.3/ru/System.Net.NameResolution.xml", "ref/netstandard1.3/zh-hans/System.Net.NameResolution.xml", "ref/netstandard1.3/zh-hant/System.Net.NameResolution.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/unix/lib/netstandard1.3/System.Net.NameResolution.dll", "runtimes/win/lib/net46/System.Net.NameResolution.dll", "runtimes/win/lib/netcore50/System.Net.NameResolution.dll", "runtimes/win/lib/netstandard1.3/System.Net.NameResolution.dll", "system.net.nameresolution.4.3.0.nupkg.sha512", "system.net.nameresolution.nuspec"]
      },
      "System.Net.Primitives/4.3.0": {
        "sha512": "qOu+hDwFwoZPbzPvwut2qATe3ygjeQBDQj91xlsaqGFQUI5i4ZnZb8yyQuLGpDGivEPIt8EJkd1BVzVoP31FXA==",
        "type": "package",
        "path": "system.net.primitives/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Net.Primitives.dll", "ref/netcore50/System.Net.Primitives.xml", "ref/netcore50/de/System.Net.Primitives.xml", "ref/netcore50/es/System.Net.Primitives.xml", "ref/netcore50/fr/System.Net.Primitives.xml", "ref/netcore50/it/System.Net.Primitives.xml", "ref/netcore50/ja/System.Net.Primitives.xml", "ref/netcore50/ko/System.Net.Primitives.xml", "ref/netcore50/ru/System.Net.Primitives.xml", "ref/netcore50/zh-hans/System.Net.Primitives.xml", "ref/netcore50/zh-hant/System.Net.Primitives.xml", "ref/netstandard1.0/System.Net.Primitives.dll", "ref/netstandard1.0/System.Net.Primitives.xml", "ref/netstandard1.0/de/System.Net.Primitives.xml", "ref/netstandard1.0/es/System.Net.Primitives.xml", "ref/netstandard1.0/fr/System.Net.Primitives.xml", "ref/netstandard1.0/it/System.Net.Primitives.xml", "ref/netstandard1.0/ja/System.Net.Primitives.xml", "ref/netstandard1.0/ko/System.Net.Primitives.xml", "ref/netstandard1.0/ru/System.Net.Primitives.xml", "ref/netstandard1.0/zh-hans/System.Net.Primitives.xml", "ref/netstandard1.0/zh-hant/System.Net.Primitives.xml", "ref/netstandard1.1/System.Net.Primitives.dll", "ref/netstandard1.1/System.Net.Primitives.xml", "ref/netstandard1.1/de/System.Net.Primitives.xml", "ref/netstandard1.1/es/System.Net.Primitives.xml", "ref/netstandard1.1/fr/System.Net.Primitives.xml", "ref/netstandard1.1/it/System.Net.Primitives.xml", "ref/netstandard1.1/ja/System.Net.Primitives.xml", "ref/netstandard1.1/ko/System.Net.Primitives.xml", "ref/netstandard1.1/ru/System.Net.Primitives.xml", "ref/netstandard1.1/zh-hans/System.Net.Primitives.xml", "ref/netstandard1.1/zh-hant/System.Net.Primitives.xml", "ref/netstandard1.3/System.Net.Primitives.dll", "ref/netstandard1.3/System.Net.Primitives.xml", "ref/netstandard1.3/de/System.Net.Primitives.xml", "ref/netstandard1.3/es/System.Net.Primitives.xml", "ref/netstandard1.3/fr/System.Net.Primitives.xml", "ref/netstandard1.3/it/System.Net.Primitives.xml", "ref/netstandard1.3/ja/System.Net.Primitives.xml", "ref/netstandard1.3/ko/System.Net.Primitives.xml", "ref/netstandard1.3/ru/System.Net.Primitives.xml", "ref/netstandard1.3/zh-hans/System.Net.Primitives.xml", "ref/netstandard1.3/zh-hant/System.Net.Primitives.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.net.primitives.4.3.0.nupkg.sha512", "system.net.primitives.nuspec"]
      },
      "System.Net.Security/4.3.0": {
        "sha512": "IgJKNfALqw7JRWp5LMQ5SWHNKvXVz094U6wNE3c1i8bOkMQvgBL+MMQuNt3xl9Qg9iWpj3lFxPZEY6XHmROjMQ==",
        "type": "package",
        "path": "system.net.security/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Net.Security.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Net.Security.dll", "ref/netstandard1.3/System.Net.Security.dll", "ref/netstandard1.3/System.Net.Security.xml", "ref/netstandard1.3/de/System.Net.Security.xml", "ref/netstandard1.3/es/System.Net.Security.xml", "ref/netstandard1.3/fr/System.Net.Security.xml", "ref/netstandard1.3/it/System.Net.Security.xml", "ref/netstandard1.3/ja/System.Net.Security.xml", "ref/netstandard1.3/ko/System.Net.Security.xml", "ref/netstandard1.3/ru/System.Net.Security.xml", "ref/netstandard1.3/zh-hans/System.Net.Security.xml", "ref/netstandard1.3/zh-hant/System.Net.Security.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/unix/lib/netstandard1.6/System.Net.Security.dll", "runtimes/win/lib/net46/System.Net.Security.dll", "runtimes/win/lib/netstandard1.3/System.Net.Security.dll", "runtimes/win7/lib/netcore50/_._", "system.net.security.4.3.0.nupkg.sha512", "system.net.security.nuspec"]
      },
      "System.Net.Sockets/4.3.0": {
        "sha512": "m6icV6TqQOAdgt5N/9I5KNpjom/5NFtkmGseEH+AK/hny8XrytLH3+b5M8zL/Ycg3fhIocFpUMyl/wpFnVRvdw==",
        "type": "package",
        "path": "system.net.sockets/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Net.Sockets.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Net.Sockets.dll", "ref/netstandard1.3/System.Net.Sockets.dll", "ref/netstandard1.3/System.Net.Sockets.xml", "ref/netstandard1.3/de/System.Net.Sockets.xml", "ref/netstandard1.3/es/System.Net.Sockets.xml", "ref/netstandard1.3/fr/System.Net.Sockets.xml", "ref/netstandard1.3/it/System.Net.Sockets.xml", "ref/netstandard1.3/ja/System.Net.Sockets.xml", "ref/netstandard1.3/ko/System.Net.Sockets.xml", "ref/netstandard1.3/ru/System.Net.Sockets.xml", "ref/netstandard1.3/zh-hans/System.Net.Sockets.xml", "ref/netstandard1.3/zh-hant/System.Net.Sockets.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.net.sockets.4.3.0.nupkg.sha512", "system.net.sockets.nuspec"]
      },
      "System.Numerics.Vectors/4.4.0": {
        "sha512": "UiLzLW+Lw6HLed1Hcg+8jSRttrbuXv7DANVj0DkL9g6EnnzbL75EB7EWsw5uRbhxd/4YdG8li5XizGWepmG3PQ==",
        "type": "package",
        "path": "system.numerics.vectors/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Numerics.Vectors.dll", "lib/net46/System.Numerics.Vectors.xml", "lib/netcoreapp2.0/_._", "lib/netstandard1.0/System.Numerics.Vectors.dll", "lib/netstandard1.0/System.Numerics.Vectors.xml", "lib/netstandard2.0/System.Numerics.Vectors.dll", "lib/netstandard2.0/System.Numerics.Vectors.xml", "lib/portable-net45+win8+wp8+wpa81/System.Numerics.Vectors.dll", "lib/portable-net45+win8+wp8+wpa81/System.Numerics.Vectors.xml", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Numerics.Vectors.dll", "ref/net46/System.Numerics.Vectors.xml", "ref/netcoreapp2.0/_._", "ref/netstandard1.0/System.Numerics.Vectors.dll", "ref/netstandard1.0/System.Numerics.Vectors.xml", "ref/netstandard2.0/System.Numerics.Vectors.dll", "ref/netstandard2.0/System.Numerics.Vectors.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.numerics.vectors.4.4.0.nupkg.sha512", "system.numerics.vectors.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.ObjectModel/4.3.0": {
        "sha512": "bdX+80eKv9bN6K4N+d77OankKHGn6CH711a6fcOpMQu2Fckp/Ft4L/kW9WznHpyR0NRAvJutzOMHNNlBGvxQzQ==",
        "type": "package",
        "path": "system.objectmodel/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.ObjectModel.dll", "lib/netstandard1.3/System.ObjectModel.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.ObjectModel.dll", "ref/netcore50/System.ObjectModel.xml", "ref/netcore50/de/System.ObjectModel.xml", "ref/netcore50/es/System.ObjectModel.xml", "ref/netcore50/fr/System.ObjectModel.xml", "ref/netcore50/it/System.ObjectModel.xml", "ref/netcore50/ja/System.ObjectModel.xml", "ref/netcore50/ko/System.ObjectModel.xml", "ref/netcore50/ru/System.ObjectModel.xml", "ref/netcore50/zh-hans/System.ObjectModel.xml", "ref/netcore50/zh-hant/System.ObjectModel.xml", "ref/netstandard1.0/System.ObjectModel.dll", "ref/netstandard1.0/System.ObjectModel.xml", "ref/netstandard1.0/de/System.ObjectModel.xml", "ref/netstandard1.0/es/System.ObjectModel.xml", "ref/netstandard1.0/fr/System.ObjectModel.xml", "ref/netstandard1.0/it/System.ObjectModel.xml", "ref/netstandard1.0/ja/System.ObjectModel.xml", "ref/netstandard1.0/ko/System.ObjectModel.xml", "ref/netstandard1.0/ru/System.ObjectModel.xml", "ref/netstandard1.0/zh-hans/System.ObjectModel.xml", "ref/netstandard1.0/zh-hant/System.ObjectModel.xml", "ref/netstandard1.3/System.ObjectModel.dll", "ref/netstandard1.3/System.ObjectModel.xml", "ref/netstandard1.3/de/System.ObjectModel.xml", "ref/netstandard1.3/es/System.ObjectModel.xml", "ref/netstandard1.3/fr/System.ObjectModel.xml", "ref/netstandard1.3/it/System.ObjectModel.xml", "ref/netstandard1.3/ja/System.ObjectModel.xml", "ref/netstandard1.3/ko/System.ObjectModel.xml", "ref/netstandard1.3/ru/System.ObjectModel.xml", "ref/netstandard1.3/zh-hans/System.ObjectModel.xml", "ref/netstandard1.3/zh-hant/System.ObjectModel.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.objectmodel.4.3.0.nupkg.sha512", "system.objectmodel.nuspec"]
      },
      "System.Private.DataContractSerialization/4.1.1": {
        "sha512": "lcqFBUaCZxPiUkA4dlSOoPZGtZsAuuElH2XHgLwGLxd7ZozWetV5yiz0qGAV2AUYOqw97MtZBjbLMN16Xz4vXA==",
        "type": "package",
        "path": "system.private.datacontractserialization/4.1.1",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/netstandard1.3/System.Private.DataContractSerialization.dll", "ref/netstandard/_._", "runtimes/aot/lib/netcore50/System.Private.DataContractSerialization.dll", "system.private.datacontractserialization.4.1.1.nupkg.sha512", "system.private.datacontractserialization.nuspec"]
      },
      "System.Reflection/4.3.0": {
        "sha512": "KMiAFoW7MfJGa9nDFNcfu+FpEdiHpWgTcS2HdMpDvt9saK3y/G4GwprPyzqjFH9NTaGPQeWNHU+iDlDILj96aQ==",
        "type": "package",
        "path": "system.reflection/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/net462/System.Reflection.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/net462/System.Reflection.dll", "ref/netcore50/System.Reflection.dll", "ref/netcore50/System.Reflection.xml", "ref/netcore50/de/System.Reflection.xml", "ref/netcore50/es/System.Reflection.xml", "ref/netcore50/fr/System.Reflection.xml", "ref/netcore50/it/System.Reflection.xml", "ref/netcore50/ja/System.Reflection.xml", "ref/netcore50/ko/System.Reflection.xml", "ref/netcore50/ru/System.Reflection.xml", "ref/netcore50/zh-hans/System.Reflection.xml", "ref/netcore50/zh-hant/System.Reflection.xml", "ref/netstandard1.0/System.Reflection.dll", "ref/netstandard1.0/System.Reflection.xml", "ref/netstandard1.0/de/System.Reflection.xml", "ref/netstandard1.0/es/System.Reflection.xml", "ref/netstandard1.0/fr/System.Reflection.xml", "ref/netstandard1.0/it/System.Reflection.xml", "ref/netstandard1.0/ja/System.Reflection.xml", "ref/netstandard1.0/ko/System.Reflection.xml", "ref/netstandard1.0/ru/System.Reflection.xml", "ref/netstandard1.0/zh-hans/System.Reflection.xml", "ref/netstandard1.0/zh-hant/System.Reflection.xml", "ref/netstandard1.3/System.Reflection.dll", "ref/netstandard1.3/System.Reflection.xml", "ref/netstandard1.3/de/System.Reflection.xml", "ref/netstandard1.3/es/System.Reflection.xml", "ref/netstandard1.3/fr/System.Reflection.xml", "ref/netstandard1.3/it/System.Reflection.xml", "ref/netstandard1.3/ja/System.Reflection.xml", "ref/netstandard1.3/ko/System.Reflection.xml", "ref/netstandard1.3/ru/System.Reflection.xml", "ref/netstandard1.3/zh-hans/System.Reflection.xml", "ref/netstandard1.3/zh-hant/System.Reflection.xml", "ref/netstandard1.5/System.Reflection.dll", "ref/netstandard1.5/System.Reflection.xml", "ref/netstandard1.5/de/System.Reflection.xml", "ref/netstandard1.5/es/System.Reflection.xml", "ref/netstandard1.5/fr/System.Reflection.xml", "ref/netstandard1.5/it/System.Reflection.xml", "ref/netstandard1.5/ja/System.Reflection.xml", "ref/netstandard1.5/ko/System.Reflection.xml", "ref/netstandard1.5/ru/System.Reflection.xml", "ref/netstandard1.5/zh-hans/System.Reflection.xml", "ref/netstandard1.5/zh-hant/System.Reflection.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.reflection.4.3.0.nupkg.sha512", "system.reflection.nuspec"]
      },
      "System.Reflection.Emit/4.3.0": {
        "sha512": "228FG0jLcIwTVJyz8CLFKueVqQK36ANazUManGaJHkO0icjiIypKW7YLWLIWahyIkdh5M7mV2dJepllLyA1SKg==",
        "type": "package",
        "path": "system.reflection.emit/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/monotouch10/_._", "lib/net45/_._", "lib/netcore50/System.Reflection.Emit.dll", "lib/netstandard1.3/System.Reflection.Emit.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/net45/_._", "ref/netstandard1.1/System.Reflection.Emit.dll", "ref/netstandard1.1/System.Reflection.Emit.xml", "ref/netstandard1.1/de/System.Reflection.Emit.xml", "ref/netstandard1.1/es/System.Reflection.Emit.xml", "ref/netstandard1.1/fr/System.Reflection.Emit.xml", "ref/netstandard1.1/it/System.Reflection.Emit.xml", "ref/netstandard1.1/ja/System.Reflection.Emit.xml", "ref/netstandard1.1/ko/System.Reflection.Emit.xml", "ref/netstandard1.1/ru/System.Reflection.Emit.xml", "ref/netstandard1.1/zh-hans/System.Reflection.Emit.xml", "ref/netstandard1.1/zh-hant/System.Reflection.Emit.xml", "ref/xamarinmac20/_._", "system.reflection.emit.4.3.0.nupkg.sha512", "system.reflection.emit.nuspec"]
      },
      "System.Reflection.Emit.ILGeneration/4.3.0": {
        "sha512": "59tBslAk9733NXLrUJrwNZEzbMAcu8k344OYo+wfSVygcgZ9lgBdGIzH/nrg3LYhXceynyvTc8t5/GD4Ri0/ng==",
        "type": "package",
        "path": "system.reflection.emit.ilgeneration/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.Reflection.Emit.ILGeneration.dll", "lib/netstandard1.3/System.Reflection.Emit.ILGeneration.dll", "lib/portable-net45+wp8/_._", "lib/wp80/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netstandard1.0/System.Reflection.Emit.ILGeneration.dll", "ref/netstandard1.0/System.Reflection.Emit.ILGeneration.xml", "ref/netstandard1.0/de/System.Reflection.Emit.ILGeneration.xml", "ref/netstandard1.0/es/System.Reflection.Emit.ILGeneration.xml", "ref/netstandard1.0/fr/System.Reflection.Emit.ILGeneration.xml", "ref/netstandard1.0/it/System.Reflection.Emit.ILGeneration.xml", "ref/netstandard1.0/ja/System.Reflection.Emit.ILGeneration.xml", "ref/netstandard1.0/ko/System.Reflection.Emit.ILGeneration.xml", "ref/netstandard1.0/ru/System.Reflection.Emit.ILGeneration.xml", "ref/netstandard1.0/zh-hans/System.Reflection.Emit.ILGeneration.xml", "ref/netstandard1.0/zh-hant/System.Reflection.Emit.ILGeneration.xml", "ref/portable-net45+wp8/_._", "ref/wp80/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/aot/lib/netcore50/_._", "system.reflection.emit.ilgeneration.4.3.0.nupkg.sha512", "system.reflection.emit.ilgeneration.nuspec"]
      },
      "System.Reflection.Emit.Lightweight/4.3.0": {
        "sha512": "oadVHGSMsTmZsAF864QYN1t1QzZjIcuKU3l2S9cZOwDdDueNTrqq1yRj7koFfIGEnKpt6NjpL3rOzRhs4ryOgA==",
        "type": "package",
        "path": "system.reflection.emit.lightweight/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.Reflection.Emit.Lightweight.dll", "lib/netstandard1.3/System.Reflection.Emit.Lightweight.dll", "lib/portable-net45+wp8/_._", "lib/wp80/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netstandard1.0/System.Reflection.Emit.Lightweight.dll", "ref/netstandard1.0/System.Reflection.Emit.Lightweight.xml", "ref/netstandard1.0/de/System.Reflection.Emit.Lightweight.xml", "ref/netstandard1.0/es/System.Reflection.Emit.Lightweight.xml", "ref/netstandard1.0/fr/System.Reflection.Emit.Lightweight.xml", "ref/netstandard1.0/it/System.Reflection.Emit.Lightweight.xml", "ref/netstandard1.0/ja/System.Reflection.Emit.Lightweight.xml", "ref/netstandard1.0/ko/System.Reflection.Emit.Lightweight.xml", "ref/netstandard1.0/ru/System.Reflection.Emit.Lightweight.xml", "ref/netstandard1.0/zh-hans/System.Reflection.Emit.Lightweight.xml", "ref/netstandard1.0/zh-hant/System.Reflection.Emit.Lightweight.xml", "ref/portable-net45+wp8/_._", "ref/wp80/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/aot/lib/netcore50/_._", "system.reflection.emit.lightweight.4.3.0.nupkg.sha512", "system.reflection.emit.lightweight.nuspec"]
      },
      "System.Reflection.Extensions/4.3.0": {
        "sha512": "rJkrJD3kBI5B712aRu4DpSIiHRtr6QlfZSQsb0hYHrDCZORXCFjQfoipo2LaMUHoT9i1B7j7MnfaEKWDFmFQNQ==",
        "type": "package",
        "path": "system.reflection.extensions/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Reflection.Extensions.dll", "ref/netcore50/System.Reflection.Extensions.xml", "ref/netcore50/de/System.Reflection.Extensions.xml", "ref/netcore50/es/System.Reflection.Extensions.xml", "ref/netcore50/fr/System.Reflection.Extensions.xml", "ref/netcore50/it/System.Reflection.Extensions.xml", "ref/netcore50/ja/System.Reflection.Extensions.xml", "ref/netcore50/ko/System.Reflection.Extensions.xml", "ref/netcore50/ru/System.Reflection.Extensions.xml", "ref/netcore50/zh-hans/System.Reflection.Extensions.xml", "ref/netcore50/zh-hant/System.Reflection.Extensions.xml", "ref/netstandard1.0/System.Reflection.Extensions.dll", "ref/netstandard1.0/System.Reflection.Extensions.xml", "ref/netstandard1.0/de/System.Reflection.Extensions.xml", "ref/netstandard1.0/es/System.Reflection.Extensions.xml", "ref/netstandard1.0/fr/System.Reflection.Extensions.xml", "ref/netstandard1.0/it/System.Reflection.Extensions.xml", "ref/netstandard1.0/ja/System.Reflection.Extensions.xml", "ref/netstandard1.0/ko/System.Reflection.Extensions.xml", "ref/netstandard1.0/ru/System.Reflection.Extensions.xml", "ref/netstandard1.0/zh-hans/System.Reflection.Extensions.xml", "ref/netstandard1.0/zh-hant/System.Reflection.Extensions.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.reflection.extensions.4.3.0.nupkg.sha512", "system.reflection.extensions.nuspec"]
      },
      "System.Reflection.Metadata/1.5.0": {
        "sha512": "423hF/x1/1/aBT6hjgrp8RH2zdKOd1iTujlHisSesTW/cgv1ixUitfk23ZknVzItMm6jnwp9CBwI2P3r9jpitw==",
        "type": "package",
        "path": "system.reflection.metadata/1.5.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/netcoreapp2.0/_._", "lib/netstandard1.1/System.Reflection.Metadata.dll", "lib/netstandard1.1/System.Reflection.Metadata.xml", "lib/netstandard2.0/System.Reflection.Metadata.dll", "lib/netstandard2.0/System.Reflection.Metadata.xml", "lib/portable-net45+win8/System.Reflection.Metadata.dll", "lib/portable-net45+win8/System.Reflection.Metadata.xml", "ref/netcoreapp2.0/_._", "system.reflection.metadata.1.5.0.nupkg.sha512", "system.reflection.metadata.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.Reflection.Primitives/4.3.0": {
        "sha512": "5RXItQz5As4xN2/YUDxdpsEkMhvw3e6aNveFXUn4Hl/udNTCNhnKp8lT9fnc3MhvGKh1baak5CovpuQUXHAlIA==",
        "type": "package",
        "path": "system.reflection.primitives/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Reflection.Primitives.dll", "ref/netcore50/System.Reflection.Primitives.xml", "ref/netcore50/de/System.Reflection.Primitives.xml", "ref/netcore50/es/System.Reflection.Primitives.xml", "ref/netcore50/fr/System.Reflection.Primitives.xml", "ref/netcore50/it/System.Reflection.Primitives.xml", "ref/netcore50/ja/System.Reflection.Primitives.xml", "ref/netcore50/ko/System.Reflection.Primitives.xml", "ref/netcore50/ru/System.Reflection.Primitives.xml", "ref/netcore50/zh-hans/System.Reflection.Primitives.xml", "ref/netcore50/zh-hant/System.Reflection.Primitives.xml", "ref/netstandard1.0/System.Reflection.Primitives.dll", "ref/netstandard1.0/System.Reflection.Primitives.xml", "ref/netstandard1.0/de/System.Reflection.Primitives.xml", "ref/netstandard1.0/es/System.Reflection.Primitives.xml", "ref/netstandard1.0/fr/System.Reflection.Primitives.xml", "ref/netstandard1.0/it/System.Reflection.Primitives.xml", "ref/netstandard1.0/ja/System.Reflection.Primitives.xml", "ref/netstandard1.0/ko/System.Reflection.Primitives.xml", "ref/netstandard1.0/ru/System.Reflection.Primitives.xml", "ref/netstandard1.0/zh-hans/System.Reflection.Primitives.xml", "ref/netstandard1.0/zh-hant/System.Reflection.Primitives.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.reflection.primitives.4.3.0.nupkg.sha512", "system.reflection.primitives.nuspec"]
      },
      "System.Reflection.TypeExtensions/4.3.0": {
        "sha512": "7u6ulLcZbyxB5Gq0nMkQttcdBTx57ibzw+4IOXEfR+sXYQoHvjW5LTLyNr8O22UIMrqYbchJQJnos4eooYzYJA==",
        "type": "package",
        "path": "system.reflection.typeextensions/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Reflection.TypeExtensions.dll", "lib/net462/System.Reflection.TypeExtensions.dll", "lib/netcore50/System.Reflection.TypeExtensions.dll", "lib/netstandard1.5/System.Reflection.TypeExtensions.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Reflection.TypeExtensions.dll", "ref/net462/System.Reflection.TypeExtensions.dll", "ref/netstandard1.3/System.Reflection.TypeExtensions.dll", "ref/netstandard1.3/System.Reflection.TypeExtensions.xml", "ref/netstandard1.3/de/System.Reflection.TypeExtensions.xml", "ref/netstandard1.3/es/System.Reflection.TypeExtensions.xml", "ref/netstandard1.3/fr/System.Reflection.TypeExtensions.xml", "ref/netstandard1.3/it/System.Reflection.TypeExtensions.xml", "ref/netstandard1.3/ja/System.Reflection.TypeExtensions.xml", "ref/netstandard1.3/ko/System.Reflection.TypeExtensions.xml", "ref/netstandard1.3/ru/System.Reflection.TypeExtensions.xml", "ref/netstandard1.3/zh-hans/System.Reflection.TypeExtensions.xml", "ref/netstandard1.3/zh-hant/System.Reflection.TypeExtensions.xml", "ref/netstandard1.5/System.Reflection.TypeExtensions.dll", "ref/netstandard1.5/System.Reflection.TypeExtensions.xml", "ref/netstandard1.5/de/System.Reflection.TypeExtensions.xml", "ref/netstandard1.5/es/System.Reflection.TypeExtensions.xml", "ref/netstandard1.5/fr/System.Reflection.TypeExtensions.xml", "ref/netstandard1.5/it/System.Reflection.TypeExtensions.xml", "ref/netstandard1.5/ja/System.Reflection.TypeExtensions.xml", "ref/netstandard1.5/ko/System.Reflection.TypeExtensions.xml", "ref/netstandard1.5/ru/System.Reflection.TypeExtensions.xml", "ref/netstandard1.5/zh-hans/System.Reflection.TypeExtensions.xml", "ref/netstandard1.5/zh-hant/System.Reflection.TypeExtensions.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/aot/lib/netcore50/System.Reflection.TypeExtensions.dll", "system.reflection.typeextensions.4.3.0.nupkg.sha512", "system.reflection.typeextensions.nuspec"]
      },
      "System.Resources.ResourceManager/4.3.0": {
        "sha512": "/zrcPkkWdZmI4F92gL/TPumP98AVDu/Wxr3CSJGQQ+XN6wbRZcyfSKVoPo17ilb3iOr0cCRqJInGwNMolqhS8A==",
        "type": "package",
        "path": "system.resources.resourcemanager/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Resources.ResourceManager.dll", "ref/netcore50/System.Resources.ResourceManager.xml", "ref/netcore50/de/System.Resources.ResourceManager.xml", "ref/netcore50/es/System.Resources.ResourceManager.xml", "ref/netcore50/fr/System.Resources.ResourceManager.xml", "ref/netcore50/it/System.Resources.ResourceManager.xml", "ref/netcore50/ja/System.Resources.ResourceManager.xml", "ref/netcore50/ko/System.Resources.ResourceManager.xml", "ref/netcore50/ru/System.Resources.ResourceManager.xml", "ref/netcore50/zh-hans/System.Resources.ResourceManager.xml", "ref/netcore50/zh-hant/System.Resources.ResourceManager.xml", "ref/netstandard1.0/System.Resources.ResourceManager.dll", "ref/netstandard1.0/System.Resources.ResourceManager.xml", "ref/netstandard1.0/de/System.Resources.ResourceManager.xml", "ref/netstandard1.0/es/System.Resources.ResourceManager.xml", "ref/netstandard1.0/fr/System.Resources.ResourceManager.xml", "ref/netstandard1.0/it/System.Resources.ResourceManager.xml", "ref/netstandard1.0/ja/System.Resources.ResourceManager.xml", "ref/netstandard1.0/ko/System.Resources.ResourceManager.xml", "ref/netstandard1.0/ru/System.Resources.ResourceManager.xml", "ref/netstandard1.0/zh-hans/System.Resources.ResourceManager.xml", "ref/netstandard1.0/zh-hant/System.Resources.ResourceManager.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.resources.resourcemanager.4.3.0.nupkg.sha512", "system.resources.resourcemanager.nuspec"]
      },
      "System.Runtime/4.3.0": {
        "sha512": "JufQi0vPQ0xGnAczR13AUFglDyVYt4Kqnz1AZaiKZ5+GICq0/1MH/mO/eAJHt/mHW1zjKBJd7kV26SrxddAhiw==",
        "type": "package",
        "path": "system.runtime/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/net462/System.Runtime.dll", "lib/portable-net45+win8+wp80+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/net462/System.Runtime.dll", "ref/netcore50/System.Runtime.dll", "ref/netcore50/System.Runtime.xml", "ref/netcore50/de/System.Runtime.xml", "ref/netcore50/es/System.Runtime.xml", "ref/netcore50/fr/System.Runtime.xml", "ref/netcore50/it/System.Runtime.xml", "ref/netcore50/ja/System.Runtime.xml", "ref/netcore50/ko/System.Runtime.xml", "ref/netcore50/ru/System.Runtime.xml", "ref/netcore50/zh-hans/System.Runtime.xml", "ref/netcore50/zh-hant/System.Runtime.xml", "ref/netstandard1.0/System.Runtime.dll", "ref/netstandard1.0/System.Runtime.xml", "ref/netstandard1.0/de/System.Runtime.xml", "ref/netstandard1.0/es/System.Runtime.xml", "ref/netstandard1.0/fr/System.Runtime.xml", "ref/netstandard1.0/it/System.Runtime.xml", "ref/netstandard1.0/ja/System.Runtime.xml", "ref/netstandard1.0/ko/System.Runtime.xml", "ref/netstandard1.0/ru/System.Runtime.xml", "ref/netstandard1.0/zh-hans/System.Runtime.xml", "ref/netstandard1.0/zh-hant/System.Runtime.xml", "ref/netstandard1.2/System.Runtime.dll", "ref/netstandard1.2/System.Runtime.xml", "ref/netstandard1.2/de/System.Runtime.xml", "ref/netstandard1.2/es/System.Runtime.xml", "ref/netstandard1.2/fr/System.Runtime.xml", "ref/netstandard1.2/it/System.Runtime.xml", "ref/netstandard1.2/ja/System.Runtime.xml", "ref/netstandard1.2/ko/System.Runtime.xml", "ref/netstandard1.2/ru/System.Runtime.xml", "ref/netstandard1.2/zh-hans/System.Runtime.xml", "ref/netstandard1.2/zh-hant/System.Runtime.xml", "ref/netstandard1.3/System.Runtime.dll", "ref/netstandard1.3/System.Runtime.xml", "ref/netstandard1.3/de/System.Runtime.xml", "ref/netstandard1.3/es/System.Runtime.xml", "ref/netstandard1.3/fr/System.Runtime.xml", "ref/netstandard1.3/it/System.Runtime.xml", "ref/netstandard1.3/ja/System.Runtime.xml", "ref/netstandard1.3/ko/System.Runtime.xml", "ref/netstandard1.3/ru/System.Runtime.xml", "ref/netstandard1.3/zh-hans/System.Runtime.xml", "ref/netstandard1.3/zh-hant/System.Runtime.xml", "ref/netstandard1.5/System.Runtime.dll", "ref/netstandard1.5/System.Runtime.xml", "ref/netstandard1.5/de/System.Runtime.xml", "ref/netstandard1.5/es/System.Runtime.xml", "ref/netstandard1.5/fr/System.Runtime.xml", "ref/netstandard1.5/it/System.Runtime.xml", "ref/netstandard1.5/ja/System.Runtime.xml", "ref/netstandard1.5/ko/System.Runtime.xml", "ref/netstandard1.5/ru/System.Runtime.xml", "ref/netstandard1.5/zh-hans/System.Runtime.xml", "ref/netstandard1.5/zh-hant/System.Runtime.xml", "ref/portable-net45+win8+wp80+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.runtime.4.3.0.nupkg.sha512", "system.runtime.nuspec"]
      },
      "System.Runtime.CompilerServices.Unsafe/4.4.0": {
        "sha512": "9dLLuBxr5GNmOfl2jSMcsHuteEg32BEfUotmmUkmZjpR3RpVHE8YQwt0ow3p6prwA1ME8WqDVZqrr8z6H8G+Kw==",
        "type": "package",
        "path": "system.runtime.compilerservices.unsafe/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/netstandard1.0/System.Runtime.CompilerServices.Unsafe.dll", "lib/netstandard1.0/System.Runtime.CompilerServices.Unsafe.xml", "lib/netstandard2.0/System.Runtime.CompilerServices.Unsafe.dll", "lib/netstandard2.0/System.Runtime.CompilerServices.Unsafe.xml", "ref/netstandard1.0/System.Runtime.CompilerServices.Unsafe.dll", "ref/netstandard1.0/System.Runtime.CompilerServices.Unsafe.xml", "ref/netstandard2.0/System.Runtime.CompilerServices.Unsafe.dll", "ref/netstandard2.0/System.Runtime.CompilerServices.Unsafe.xml", "system.runtime.compilerservices.unsafe.4.4.0.nupkg.sha512", "system.runtime.compilerservices.unsafe.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.Runtime.Extensions/4.3.0": {
        "sha512": "guW0uK0fn5fcJJ1tJVXYd7/1h5F+pea1r7FLSOz/f8vPEqbR2ZAknuRDvTQ8PzAilDveOxNjSfr0CHfIQfFk8g==",
        "type": "package",
        "path": "system.runtime.extensions/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/net462/System.Runtime.Extensions.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/net462/System.Runtime.Extensions.dll", "ref/netcore50/System.Runtime.Extensions.dll", "ref/netcore50/System.Runtime.Extensions.xml", "ref/netcore50/de/System.Runtime.Extensions.xml", "ref/netcore50/es/System.Runtime.Extensions.xml", "ref/netcore50/fr/System.Runtime.Extensions.xml", "ref/netcore50/it/System.Runtime.Extensions.xml", "ref/netcore50/ja/System.Runtime.Extensions.xml", "ref/netcore50/ko/System.Runtime.Extensions.xml", "ref/netcore50/ru/System.Runtime.Extensions.xml", "ref/netcore50/zh-hans/System.Runtime.Extensions.xml", "ref/netcore50/zh-hant/System.Runtime.Extensions.xml", "ref/netstandard1.0/System.Runtime.Extensions.dll", "ref/netstandard1.0/System.Runtime.Extensions.xml", "ref/netstandard1.0/de/System.Runtime.Extensions.xml", "ref/netstandard1.0/es/System.Runtime.Extensions.xml", "ref/netstandard1.0/fr/System.Runtime.Extensions.xml", "ref/netstandard1.0/it/System.Runtime.Extensions.xml", "ref/netstandard1.0/ja/System.Runtime.Extensions.xml", "ref/netstandard1.0/ko/System.Runtime.Extensions.xml", "ref/netstandard1.0/ru/System.Runtime.Extensions.xml", "ref/netstandard1.0/zh-hans/System.Runtime.Extensions.xml", "ref/netstandard1.0/zh-hant/System.Runtime.Extensions.xml", "ref/netstandard1.3/System.Runtime.Extensions.dll", "ref/netstandard1.3/System.Runtime.Extensions.xml", "ref/netstandard1.3/de/System.Runtime.Extensions.xml", "ref/netstandard1.3/es/System.Runtime.Extensions.xml", "ref/netstandard1.3/fr/System.Runtime.Extensions.xml", "ref/netstandard1.3/it/System.Runtime.Extensions.xml", "ref/netstandard1.3/ja/System.Runtime.Extensions.xml", "ref/netstandard1.3/ko/System.Runtime.Extensions.xml", "ref/netstandard1.3/ru/System.Runtime.Extensions.xml", "ref/netstandard1.3/zh-hans/System.Runtime.Extensions.xml", "ref/netstandard1.3/zh-hant/System.Runtime.Extensions.xml", "ref/netstandard1.5/System.Runtime.Extensions.dll", "ref/netstandard1.5/System.Runtime.Extensions.xml", "ref/netstandard1.5/de/System.Runtime.Extensions.xml", "ref/netstandard1.5/es/System.Runtime.Extensions.xml", "ref/netstandard1.5/fr/System.Runtime.Extensions.xml", "ref/netstandard1.5/it/System.Runtime.Extensions.xml", "ref/netstandard1.5/ja/System.Runtime.Extensions.xml", "ref/netstandard1.5/ko/System.Runtime.Extensions.xml", "ref/netstandard1.5/ru/System.Runtime.Extensions.xml", "ref/netstandard1.5/zh-hans/System.Runtime.Extensions.xml", "ref/netstandard1.5/zh-hant/System.Runtime.Extensions.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.runtime.extensions.4.3.0.nupkg.sha512", "system.runtime.extensions.nuspec"]
      },
      "System.Runtime.Handles/4.3.0": {
        "sha512": "OKiSUN7DmTWeYb3l51A7EYaeNMnvxwE249YtZz7yooT4gOZhmTjIn48KgSsw2k2lYdLgTKNJw/ZIfSElwDRVgg==",
        "type": "package",
        "path": "system.runtime.handles/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/_._", "ref/netstandard1.3/System.Runtime.Handles.dll", "ref/netstandard1.3/System.Runtime.Handles.xml", "ref/netstandard1.3/de/System.Runtime.Handles.xml", "ref/netstandard1.3/es/System.Runtime.Handles.xml", "ref/netstandard1.3/fr/System.Runtime.Handles.xml", "ref/netstandard1.3/it/System.Runtime.Handles.xml", "ref/netstandard1.3/ja/System.Runtime.Handles.xml", "ref/netstandard1.3/ko/System.Runtime.Handles.xml", "ref/netstandard1.3/ru/System.Runtime.Handles.xml", "ref/netstandard1.3/zh-hans/System.Runtime.Handles.xml", "ref/netstandard1.3/zh-hant/System.Runtime.Handles.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.runtime.handles.4.3.0.nupkg.sha512", "system.runtime.handles.nuspec"]
      },
      "System.Runtime.InteropServices/4.3.0": {
        "sha512": "uv1ynXqiMK8mp1GM3jDqPCFN66eJ5w5XNomaK2XD+TuCroNTLFGeZ+WCmBMcBDyTFKou3P6cR6J/QsaqDp7fGQ==",
        "type": "package",
        "path": "system.runtime.interopservices/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/net462/System.Runtime.InteropServices.dll", "lib/net463/System.Runtime.InteropServices.dll", "lib/portable-net45+win8+wpa81/_._", "lib/win8/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/net462/System.Runtime.InteropServices.dll", "ref/net463/System.Runtime.InteropServices.dll", "ref/netcore50/System.Runtime.InteropServices.dll", "ref/netcore50/System.Runtime.InteropServices.xml", "ref/netcore50/de/System.Runtime.InteropServices.xml", "ref/netcore50/es/System.Runtime.InteropServices.xml", "ref/netcore50/fr/System.Runtime.InteropServices.xml", "ref/netcore50/it/System.Runtime.InteropServices.xml", "ref/netcore50/ja/System.Runtime.InteropServices.xml", "ref/netcore50/ko/System.Runtime.InteropServices.xml", "ref/netcore50/ru/System.Runtime.InteropServices.xml", "ref/netcore50/zh-hans/System.Runtime.InteropServices.xml", "ref/netcore50/zh-hant/System.Runtime.InteropServices.xml", "ref/netcoreapp1.1/System.Runtime.InteropServices.dll", "ref/netstandard1.1/System.Runtime.InteropServices.dll", "ref/netstandard1.1/System.Runtime.InteropServices.xml", "ref/netstandard1.1/de/System.Runtime.InteropServices.xml", "ref/netstandard1.1/es/System.Runtime.InteropServices.xml", "ref/netstandard1.1/fr/System.Runtime.InteropServices.xml", "ref/netstandard1.1/it/System.Runtime.InteropServices.xml", "ref/netstandard1.1/ja/System.Runtime.InteropServices.xml", "ref/netstandard1.1/ko/System.Runtime.InteropServices.xml", "ref/netstandard1.1/ru/System.Runtime.InteropServices.xml", "ref/netstandard1.1/zh-hans/System.Runtime.InteropServices.xml", "ref/netstandard1.1/zh-hant/System.Runtime.InteropServices.xml", "ref/netstandard1.2/System.Runtime.InteropServices.dll", "ref/netstandard1.2/System.Runtime.InteropServices.xml", "ref/netstandard1.2/de/System.Runtime.InteropServices.xml", "ref/netstandard1.2/es/System.Runtime.InteropServices.xml", "ref/netstandard1.2/fr/System.Runtime.InteropServices.xml", "ref/netstandard1.2/it/System.Runtime.InteropServices.xml", "ref/netstandard1.2/ja/System.Runtime.InteropServices.xml", "ref/netstandard1.2/ko/System.Runtime.InteropServices.xml", "ref/netstandard1.2/ru/System.Runtime.InteropServices.xml", "ref/netstandard1.2/zh-hans/System.Runtime.InteropServices.xml", "ref/netstandard1.2/zh-hant/System.Runtime.InteropServices.xml", "ref/netstandard1.3/System.Runtime.InteropServices.dll", "ref/netstandard1.3/System.Runtime.InteropServices.xml", "ref/netstandard1.3/de/System.Runtime.InteropServices.xml", "ref/netstandard1.3/es/System.Runtime.InteropServices.xml", "ref/netstandard1.3/fr/System.Runtime.InteropServices.xml", "ref/netstandard1.3/it/System.Runtime.InteropServices.xml", "ref/netstandard1.3/ja/System.Runtime.InteropServices.xml", "ref/netstandard1.3/ko/System.Runtime.InteropServices.xml", "ref/netstandard1.3/ru/System.Runtime.InteropServices.xml", "ref/netstandard1.3/zh-hans/System.Runtime.InteropServices.xml", "ref/netstandard1.3/zh-hant/System.Runtime.InteropServices.xml", "ref/netstandard1.5/System.Runtime.InteropServices.dll", "ref/netstandard1.5/System.Runtime.InteropServices.xml", "ref/netstandard1.5/de/System.Runtime.InteropServices.xml", "ref/netstandard1.5/es/System.Runtime.InteropServices.xml", "ref/netstandard1.5/fr/System.Runtime.InteropServices.xml", "ref/netstandard1.5/it/System.Runtime.InteropServices.xml", "ref/netstandard1.5/ja/System.Runtime.InteropServices.xml", "ref/netstandard1.5/ko/System.Runtime.InteropServices.xml", "ref/netstandard1.5/ru/System.Runtime.InteropServices.xml", "ref/netstandard1.5/zh-hans/System.Runtime.InteropServices.xml", "ref/netstandard1.5/zh-hant/System.Runtime.InteropServices.xml", "ref/portable-net45+win8+wpa81/_._", "ref/win8/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.runtime.interopservices.4.3.0.nupkg.sha512", "system.runtime.interopservices.nuspec"]
      },
      "System.Runtime.InteropServices.RuntimeInformation/4.3.0": {
        "sha512": "cbz4YJMqRDR7oLeMRbdYv7mYzc++17lNhScCX0goO2XpGWdvAt60CGN+FHdePUEHCe/Jy9jUlvNAiNdM+7jsOw==",
        "type": "package",
        "path": "system.runtime.interopservices.runtimeinformation/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/System.Runtime.InteropServices.RuntimeInformation.dll", "lib/netstandard1.1/System.Runtime.InteropServices.RuntimeInformation.dll", "lib/win8/System.Runtime.InteropServices.RuntimeInformation.dll", "lib/wpa81/System.Runtime.InteropServices.RuntimeInformation.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/netstandard1.1/System.Runtime.InteropServices.RuntimeInformation.dll", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/aot/lib/netcore50/System.Runtime.InteropServices.RuntimeInformation.dll", "runtimes/unix/lib/netstandard1.1/System.Runtime.InteropServices.RuntimeInformation.dll", "runtimes/win/lib/net45/System.Runtime.InteropServices.RuntimeInformation.dll", "runtimes/win/lib/netcore50/System.Runtime.InteropServices.RuntimeInformation.dll", "runtimes/win/lib/netstandard1.1/System.Runtime.InteropServices.RuntimeInformation.dll", "system.runtime.interopservices.runtimeinformation.4.3.0.nupkg.sha512", "system.runtime.interopservices.runtimeinformation.nuspec"]
      },
      "System.Runtime.Numerics/4.3.0": {
        "sha512": "yMH+MfdzHjy17l2KESnPiF2dwq7T+xLnSJar7slyimAkUh/gTrS9/UQOtv7xarskJ2/XDSNvfLGOBQPjL7PaHQ==",
        "type": "package",
        "path": "system.runtime.numerics/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.Runtime.Numerics.dll", "lib/netstandard1.3/System.Runtime.Numerics.dll", "lib/portable-net45+win8+wpa81/_._", "lib/win8/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Runtime.Numerics.dll", "ref/netcore50/System.Runtime.Numerics.xml", "ref/netcore50/de/System.Runtime.Numerics.xml", "ref/netcore50/es/System.Runtime.Numerics.xml", "ref/netcore50/fr/System.Runtime.Numerics.xml", "ref/netcore50/it/System.Runtime.Numerics.xml", "ref/netcore50/ja/System.Runtime.Numerics.xml", "ref/netcore50/ko/System.Runtime.Numerics.xml", "ref/netcore50/ru/System.Runtime.Numerics.xml", "ref/netcore50/zh-hans/System.Runtime.Numerics.xml", "ref/netcore50/zh-hant/System.Runtime.Numerics.xml", "ref/netstandard1.1/System.Runtime.Numerics.dll", "ref/netstandard1.1/System.Runtime.Numerics.xml", "ref/netstandard1.1/de/System.Runtime.Numerics.xml", "ref/netstandard1.1/es/System.Runtime.Numerics.xml", "ref/netstandard1.1/fr/System.Runtime.Numerics.xml", "ref/netstandard1.1/it/System.Runtime.Numerics.xml", "ref/netstandard1.1/ja/System.Runtime.Numerics.xml", "ref/netstandard1.1/ko/System.Runtime.Numerics.xml", "ref/netstandard1.1/ru/System.Runtime.Numerics.xml", "ref/netstandard1.1/zh-hans/System.Runtime.Numerics.xml", "ref/netstandard1.1/zh-hant/System.Runtime.Numerics.xml", "ref/portable-net45+win8+wpa81/_._", "ref/win8/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.runtime.numerics.4.3.0.nupkg.sha512", "system.runtime.numerics.nuspec"]
      },
      "System.Runtime.Serialization.Formatters/4.3.0": {
        "sha512": "KT591AkTNFOTbhZlaeMVvfax3RqhH1EJlcwF50Wm7sfnBLuHiOeZRRKrr1ns3NESkM20KPZ5Ol/ueMq5vg4QoQ==",
        "type": "package",
        "path": "system.runtime.serialization.formatters/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Runtime.Serialization.Formatters.dll", "lib/netstandard1.4/System.Runtime.Serialization.Formatters.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Runtime.Serialization.Formatters.dll", "ref/netstandard1.3/System.Runtime.Serialization.Formatters.dll", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.runtime.serialization.formatters.4.3.0.nupkg.sha512", "system.runtime.serialization.formatters.nuspec"]
      },
      "System.Runtime.Serialization.Json/4.0.2": {
        "sha512": "+7DIJhnKYgCzUgcLbVTtRQb2l1M0FP549XFlFkQM5lmNiUBl44AfNbx4bz61xA8PzLtlYwfmif4JJJW7MPPnjg==",
        "type": "package",
        "path": "system.runtime.serialization.json/4.0.2",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.Runtime.Serialization.Json.dll", "lib/netstandard1.3/System.Runtime.Serialization.Json.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Runtime.Serialization.Json.dll", "ref/netcore50/System.Runtime.Serialization.Json.xml", "ref/netcore50/de/System.Runtime.Serialization.Json.xml", "ref/netcore50/es/System.Runtime.Serialization.Json.xml", "ref/netcore50/fr/System.Runtime.Serialization.Json.xml", "ref/netcore50/it/System.Runtime.Serialization.Json.xml", "ref/netcore50/ja/System.Runtime.Serialization.Json.xml", "ref/netcore50/ko/System.Runtime.Serialization.Json.xml", "ref/netcore50/ru/System.Runtime.Serialization.Json.xml", "ref/netcore50/zh-hans/System.Runtime.Serialization.Json.xml", "ref/netcore50/zh-hant/System.Runtime.Serialization.Json.xml", "ref/netstandard1.0/System.Runtime.Serialization.Json.dll", "ref/netstandard1.0/System.Runtime.Serialization.Json.xml", "ref/netstandard1.0/de/System.Runtime.Serialization.Json.xml", "ref/netstandard1.0/es/System.Runtime.Serialization.Json.xml", "ref/netstandard1.0/fr/System.Runtime.Serialization.Json.xml", "ref/netstandard1.0/it/System.Runtime.Serialization.Json.xml", "ref/netstandard1.0/ja/System.Runtime.Serialization.Json.xml", "ref/netstandard1.0/ko/System.Runtime.Serialization.Json.xml", "ref/netstandard1.0/ru/System.Runtime.Serialization.Json.xml", "ref/netstandard1.0/zh-hans/System.Runtime.Serialization.Json.xml", "ref/netstandard1.0/zh-hant/System.Runtime.Serialization.Json.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.runtime.serialization.json.4.0.2.nupkg.sha512", "system.runtime.serialization.json.nuspec"]
      },
      "System.Runtime.Serialization.Primitives/4.3.0": {
        "sha512": "Wz+0KOukJGAlXjtKr+5Xpuxf8+c8739RI1C+A2BoQZT+wMCCoMDDdO8/4IRHfaVINqL78GO8dW8G2lW/e45Mcw==",
        "type": "package",
        "path": "system.runtime.serialization.primitives/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/net46/System.Runtime.Serialization.Primitives.dll", "lib/netcore50/System.Runtime.Serialization.Primitives.dll", "lib/netstandard1.3/System.Runtime.Serialization.Primitives.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/net46/System.Runtime.Serialization.Primitives.dll", "ref/netcore50/System.Runtime.Serialization.Primitives.dll", "ref/netcore50/System.Runtime.Serialization.Primitives.xml", "ref/netcore50/de/System.Runtime.Serialization.Primitives.xml", "ref/netcore50/es/System.Runtime.Serialization.Primitives.xml", "ref/netcore50/fr/System.Runtime.Serialization.Primitives.xml", "ref/netcore50/it/System.Runtime.Serialization.Primitives.xml", "ref/netcore50/ja/System.Runtime.Serialization.Primitives.xml", "ref/netcore50/ko/System.Runtime.Serialization.Primitives.xml", "ref/netcore50/ru/System.Runtime.Serialization.Primitives.xml", "ref/netcore50/zh-hans/System.Runtime.Serialization.Primitives.xml", "ref/netcore50/zh-hant/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.0/System.Runtime.Serialization.Primitives.dll", "ref/netstandard1.0/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.0/de/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.0/es/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.0/fr/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.0/it/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.0/ja/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.0/ko/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.0/ru/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.0/zh-hans/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.0/zh-hant/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.3/System.Runtime.Serialization.Primitives.dll", "ref/netstandard1.3/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.3/de/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.3/es/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.3/fr/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.3/it/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.3/ja/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.3/ko/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.3/ru/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.3/zh-hans/System.Runtime.Serialization.Primitives.xml", "ref/netstandard1.3/zh-hant/System.Runtime.Serialization.Primitives.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/aot/lib/netcore50/System.Runtime.Serialization.Primitives.dll", "system.runtime.serialization.primitives.4.3.0.nupkg.sha512", "system.runtime.serialization.primitives.nuspec"]
      },
      "System.Security.AccessControl/4.4.0": {
        "sha512": "2NRFPX/V81ucKQmqNgGBZrKGH/5ejsvivSGMRum0SMgPnJxwhuNkzVS1+7gC3R2X0f57CtwrPrXPPSe6nOp82g==",
        "type": "package",
        "path": "system.security.accesscontrol/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/net46/System.Security.AccessControl.dll", "lib/net461/System.Security.AccessControl.dll", "lib/netstandard1.3/System.Security.AccessControl.dll", "lib/netstandard2.0/System.Security.AccessControl.dll", "ref/net46/System.Security.AccessControl.dll", "ref/net461/System.Security.AccessControl.dll", "ref/net461/System.Security.AccessControl.xml", "ref/netstandard1.3/System.Security.AccessControl.dll", "ref/netstandard1.3/System.Security.AccessControl.xml", "ref/netstandard1.3/de/System.Security.AccessControl.xml", "ref/netstandard1.3/es/System.Security.AccessControl.xml", "ref/netstandard1.3/fr/System.Security.AccessControl.xml", "ref/netstandard1.3/it/System.Security.AccessControl.xml", "ref/netstandard1.3/ja/System.Security.AccessControl.xml", "ref/netstandard1.3/ko/System.Security.AccessControl.xml", "ref/netstandard1.3/ru/System.Security.AccessControl.xml", "ref/netstandard1.3/zh-hans/System.Security.AccessControl.xml", "ref/netstandard1.3/zh-hant/System.Security.AccessControl.xml", "ref/netstandard2.0/System.Security.AccessControl.dll", "ref/netstandard2.0/System.Security.AccessControl.xml", "runtimes/unix/lib/netcoreapp2.0/System.Security.AccessControl.dll", "runtimes/win/lib/net46/System.Security.AccessControl.dll", "runtimes/win/lib/net461/System.Security.AccessControl.dll", "runtimes/win/lib/netcoreapp2.0/System.Security.AccessControl.dll", "runtimes/win/lib/netstandard1.3/System.Security.AccessControl.dll", "system.security.accesscontrol.4.4.0.nupkg.sha512", "system.security.accesscontrol.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.Security.Claims/4.3.0": {
        "sha512": "P/+BR/2lnc4PNDHt/TPBAWHVMLMRHsyYZbU1NphW4HIWzCggz8mJbTQQ3MKljFE7LS3WagmVFuBgoLcFzYXlkA==",
        "type": "package",
        "path": "system.security.claims/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Security.Claims.dll", "lib/netstandard1.3/System.Security.Claims.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Security.Claims.dll", "ref/netstandard1.3/System.Security.Claims.dll", "ref/netstandard1.3/System.Security.Claims.xml", "ref/netstandard1.3/de/System.Security.Claims.xml", "ref/netstandard1.3/es/System.Security.Claims.xml", "ref/netstandard1.3/fr/System.Security.Claims.xml", "ref/netstandard1.3/it/System.Security.Claims.xml", "ref/netstandard1.3/ja/System.Security.Claims.xml", "ref/netstandard1.3/ko/System.Security.Claims.xml", "ref/netstandard1.3/ru/System.Security.Claims.xml", "ref/netstandard1.3/zh-hans/System.Security.Claims.xml", "ref/netstandard1.3/zh-hant/System.Security.Claims.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.security.claims.4.3.0.nupkg.sha512", "system.security.claims.nuspec"]
      },
      "System.Security.Cryptography.Algorithms/4.3.0": {
        "sha512": "W1kd2Y8mYSCgc3ULTAZ0hOP2dSdG5YauTb1089T0/kRcN2MpSAW1izOFROrJgxSlMn3ArsgHXagigyi+ibhevg==",
        "type": "package",
        "path": "system.security.cryptography.algorithms/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Security.Cryptography.Algorithms.dll", "lib/net461/System.Security.Cryptography.Algorithms.dll", "lib/net463/System.Security.Cryptography.Algorithms.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Security.Cryptography.Algorithms.dll", "ref/net461/System.Security.Cryptography.Algorithms.dll", "ref/net463/System.Security.Cryptography.Algorithms.dll", "ref/netstandard1.3/System.Security.Cryptography.Algorithms.dll", "ref/netstandard1.4/System.Security.Cryptography.Algorithms.dll", "ref/netstandard1.6/System.Security.Cryptography.Algorithms.dll", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/osx/lib/netstandard1.6/System.Security.Cryptography.Algorithms.dll", "runtimes/unix/lib/netstandard1.6/System.Security.Cryptography.Algorithms.dll", "runtimes/win/lib/net46/System.Security.Cryptography.Algorithms.dll", "runtimes/win/lib/net461/System.Security.Cryptography.Algorithms.dll", "runtimes/win/lib/net463/System.Security.Cryptography.Algorithms.dll", "runtimes/win/lib/netcore50/System.Security.Cryptography.Algorithms.dll", "runtimes/win/lib/netstandard1.6/System.Security.Cryptography.Algorithms.dll", "system.security.cryptography.algorithms.4.3.0.nupkg.sha512", "system.security.cryptography.algorithms.nuspec"]
      },
      "System.Security.Cryptography.Cng/4.3.0": {
        "sha512": "03idZOqFlsKRL4W+LuCpJ6dBYDUWReug6lZjBa3uJWnk5sPCUXckocevTaUA8iT/MFSrY/2HXkOt753xQ/cf8g==",
        "type": "package",
        "path": "system.security.cryptography.cng/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/net46/System.Security.Cryptography.Cng.dll", "lib/net461/System.Security.Cryptography.Cng.dll", "lib/net463/System.Security.Cryptography.Cng.dll", "ref/net46/System.Security.Cryptography.Cng.dll", "ref/net461/System.Security.Cryptography.Cng.dll", "ref/net463/System.Security.Cryptography.Cng.dll", "ref/netstandard1.3/System.Security.Cryptography.Cng.dll", "ref/netstandard1.4/System.Security.Cryptography.Cng.dll", "ref/netstandard1.6/System.Security.Cryptography.Cng.dll", "runtimes/unix/lib/netstandard1.6/System.Security.Cryptography.Cng.dll", "runtimes/win/lib/net46/System.Security.Cryptography.Cng.dll", "runtimes/win/lib/net461/System.Security.Cryptography.Cng.dll", "runtimes/win/lib/net463/System.Security.Cryptography.Cng.dll", "runtimes/win/lib/netstandard1.4/System.Security.Cryptography.Cng.dll", "runtimes/win/lib/netstandard1.6/System.Security.Cryptography.Cng.dll", "system.security.cryptography.cng.4.3.0.nupkg.sha512", "system.security.cryptography.cng.nuspec"]
      },
      "System.Security.Cryptography.Csp/4.3.0": {
        "sha512": "X4s/FCkEUnRGnwR3aSfVIkldBmtURMhmexALNTwpjklzxWU7yjMk7GHLKOZTNkgnWnE0q7+BCf9N2LVRWxewaA==",
        "type": "package",
        "path": "system.security.cryptography.csp/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Security.Cryptography.Csp.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Security.Cryptography.Csp.dll", "ref/netstandard1.3/System.Security.Cryptography.Csp.dll", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/unix/lib/netstandard1.3/System.Security.Cryptography.Csp.dll", "runtimes/win/lib/net46/System.Security.Cryptography.Csp.dll", "runtimes/win/lib/netcore50/_._", "runtimes/win/lib/netstandard1.3/System.Security.Cryptography.Csp.dll", "system.security.cryptography.csp.4.3.0.nupkg.sha512", "system.security.cryptography.csp.nuspec"]
      },
      "System.Security.Cryptography.Encoding/4.3.0": {
        "sha512": "1DEWjZZly9ae9C79vFwqaO5kaOlI5q+3/55ohmq/7dpDyDfc8lYe7YVxJUZ5MF/NtbkRjwFRo14yM4OEo9EmDw==",
        "type": "package",
        "path": "system.security.cryptography.encoding/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Security.Cryptography.Encoding.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Security.Cryptography.Encoding.dll", "ref/netstandard1.3/System.Security.Cryptography.Encoding.dll", "ref/netstandard1.3/System.Security.Cryptography.Encoding.xml", "ref/netstandard1.3/de/System.Security.Cryptography.Encoding.xml", "ref/netstandard1.3/es/System.Security.Cryptography.Encoding.xml", "ref/netstandard1.3/fr/System.Security.Cryptography.Encoding.xml", "ref/netstandard1.3/it/System.Security.Cryptography.Encoding.xml", "ref/netstandard1.3/ja/System.Security.Cryptography.Encoding.xml", "ref/netstandard1.3/ko/System.Security.Cryptography.Encoding.xml", "ref/netstandard1.3/ru/System.Security.Cryptography.Encoding.xml", "ref/netstandard1.3/zh-hans/System.Security.Cryptography.Encoding.xml", "ref/netstandard1.3/zh-hant/System.Security.Cryptography.Encoding.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/unix/lib/netstandard1.3/System.Security.Cryptography.Encoding.dll", "runtimes/win/lib/net46/System.Security.Cryptography.Encoding.dll", "runtimes/win/lib/netstandard1.3/System.Security.Cryptography.Encoding.dll", "system.security.cryptography.encoding.4.3.0.nupkg.sha512", "system.security.cryptography.encoding.nuspec"]
      },
      "System.Security.Cryptography.OpenSsl/4.3.0": {
        "sha512": "h4CEgOgv5PKVF/HwaHzJRiVboL2THYCou97zpmhjghx5frc7fIvlkY1jL+lnIQyChrJDMNEXS6r7byGif8Cy4w==",
        "type": "package",
        "path": "system.security.cryptography.openssl/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/netstandard1.6/System.Security.Cryptography.OpenSsl.dll", "ref/netstandard1.6/System.Security.Cryptography.OpenSsl.dll", "runtimes/unix/lib/netstandard1.6/System.Security.Cryptography.OpenSsl.dll", "system.security.cryptography.openssl.4.3.0.nupkg.sha512", "system.security.cryptography.openssl.nuspec"]
      },
      "System.Security.Cryptography.Primitives/4.3.0": {
        "sha512": "7bDIyVFNL/xKeFHjhobUAQqSpJq9YTOpbEs6mR233Et01STBMXNAc/V+BM6dwYGc95gVh/Zf+iVXWzj3mE8DWg==",
        "type": "package",
        "path": "system.security.cryptography.primitives/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Security.Cryptography.Primitives.dll", "lib/netstandard1.3/System.Security.Cryptography.Primitives.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Security.Cryptography.Primitives.dll", "ref/netstandard1.3/System.Security.Cryptography.Primitives.dll", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.security.cryptography.primitives.4.3.0.nupkg.sha512", "system.security.cryptography.primitives.nuspec"]
      },
      "System.Security.Cryptography.X509Certificates/4.3.0": {
        "sha512": "t2Tmu6Y2NtJ2um0RtcuhP7ZdNNxXEgUm2JeoA/0NvlMjAhKCnM1NX07TDl3244mVp3QU6LPEhT3HTtH1uF7IYw==",
        "type": "package",
        "path": "system.security.cryptography.x509certificates/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Security.Cryptography.X509Certificates.dll", "lib/net461/System.Security.Cryptography.X509Certificates.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Security.Cryptography.X509Certificates.dll", "ref/net461/System.Security.Cryptography.X509Certificates.dll", "ref/netstandard1.3/System.Security.Cryptography.X509Certificates.dll", "ref/netstandard1.3/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.3/de/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.3/es/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.3/fr/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.3/it/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.3/ja/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.3/ko/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.3/ru/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.3/zh-hans/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.3/zh-hant/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.4/System.Security.Cryptography.X509Certificates.dll", "ref/netstandard1.4/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.4/de/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.4/es/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.4/fr/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.4/it/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.4/ja/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.4/ko/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.4/ru/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.4/zh-hans/System.Security.Cryptography.X509Certificates.xml", "ref/netstandard1.4/zh-hant/System.Security.Cryptography.X509Certificates.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/unix/lib/netstandard1.6/System.Security.Cryptography.X509Certificates.dll", "runtimes/win/lib/net46/System.Security.Cryptography.X509Certificates.dll", "runtimes/win/lib/net461/System.Security.Cryptography.X509Certificates.dll", "runtimes/win/lib/netcore50/System.Security.Cryptography.X509Certificates.dll", "runtimes/win/lib/netstandard1.6/System.Security.Cryptography.X509Certificates.dll", "system.security.cryptography.x509certificates.4.3.0.nupkg.sha512", "system.security.cryptography.x509certificates.nuspec"]
      },
      "System.Security.Cryptography.Xml/4.4.0": {
        "sha512": "1Xubvo4i+K+DO6YzVh6vBKmCl5xx/cAoiJEze6VQ+XwVQU25KQC9pPrmniz2EbbJnmoQ5Rm2FFjHsfQAi0Rs+Q==",
        "type": "package",
        "path": "system.security.cryptography.xml/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/net461/System.Security.Cryptography.Xml.dll", "lib/netstandard2.0/System.Security.Cryptography.Xml.dll", "ref/net461/System.Security.Cryptography.Xml.dll", "ref/net461/System.Security.Cryptography.Xml.xml", "ref/netstandard2.0/System.Security.Cryptography.Xml.dll", "ref/netstandard2.0/System.Security.Cryptography.Xml.xml", "system.security.cryptography.xml.4.4.0.nupkg.sha512", "system.security.cryptography.xml.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.Security.Principal/4.3.0": {
        "sha512": "I1tkfQlAoMM2URscUtpcRo/hX0jinXx6a/KUtEQoz3owaYwl3qwsO8cbzYVVnjxrzxjHo3nJC+62uolgeGIS9A==",
        "type": "package",
        "path": "system.security.principal/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.Security.Principal.dll", "lib/netstandard1.0/System.Security.Principal.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Security.Principal.dll", "ref/netcore50/System.Security.Principal.xml", "ref/netcore50/de/System.Security.Principal.xml", "ref/netcore50/es/System.Security.Principal.xml", "ref/netcore50/fr/System.Security.Principal.xml", "ref/netcore50/it/System.Security.Principal.xml", "ref/netcore50/ja/System.Security.Principal.xml", "ref/netcore50/ko/System.Security.Principal.xml", "ref/netcore50/ru/System.Security.Principal.xml", "ref/netcore50/zh-hans/System.Security.Principal.xml", "ref/netcore50/zh-hant/System.Security.Principal.xml", "ref/netstandard1.0/System.Security.Principal.dll", "ref/netstandard1.0/System.Security.Principal.xml", "ref/netstandard1.0/de/System.Security.Principal.xml", "ref/netstandard1.0/es/System.Security.Principal.xml", "ref/netstandard1.0/fr/System.Security.Principal.xml", "ref/netstandard1.0/it/System.Security.Principal.xml", "ref/netstandard1.0/ja/System.Security.Principal.xml", "ref/netstandard1.0/ko/System.Security.Principal.xml", "ref/netstandard1.0/ru/System.Security.Principal.xml", "ref/netstandard1.0/zh-hans/System.Security.Principal.xml", "ref/netstandard1.0/zh-hant/System.Security.Principal.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.security.principal.4.3.0.nupkg.sha512", "system.security.principal.nuspec"]
      },
      "System.Security.Principal.Windows/4.4.0": {
        "sha512": "pP+AOzt1o3jESOuLmf52YQTF7H3Ng9hTnrOESQiqsnl2IbBh1HInsAMHYtoh75iUYV0OIkHmjvveraYB6zM97w==",
        "type": "package",
        "path": "system.security.principal.windows/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/net46/System.Security.Principal.Windows.dll", "lib/net461/System.Security.Principal.Windows.dll", "lib/netstandard1.3/System.Security.Principal.Windows.dll", "lib/netstandard2.0/System.Security.Principal.Windows.dll", "ref/net46/System.Security.Principal.Windows.dll", "ref/net461/System.Security.Principal.Windows.dll", "ref/net461/System.Security.Principal.Windows.xml", "ref/netstandard1.3/System.Security.Principal.Windows.dll", "ref/netstandard1.3/System.Security.Principal.Windows.xml", "ref/netstandard1.3/de/System.Security.Principal.Windows.xml", "ref/netstandard1.3/es/System.Security.Principal.Windows.xml", "ref/netstandard1.3/fr/System.Security.Principal.Windows.xml", "ref/netstandard1.3/it/System.Security.Principal.Windows.xml", "ref/netstandard1.3/ja/System.Security.Principal.Windows.xml", "ref/netstandard1.3/ko/System.Security.Principal.Windows.xml", "ref/netstandard1.3/ru/System.Security.Principal.Windows.xml", "ref/netstandard1.3/zh-hans/System.Security.Principal.Windows.xml", "ref/netstandard1.3/zh-hant/System.Security.Principal.Windows.xml", "ref/netstandard2.0/System.Security.Principal.Windows.dll", "ref/netstandard2.0/System.Security.Principal.Windows.xml", "runtimes/unix/lib/netcoreapp2.0/System.Security.Principal.Windows.dll", "runtimes/win/lib/net46/System.Security.Principal.Windows.dll", "runtimes/win/lib/net461/System.Security.Principal.Windows.dll", "runtimes/win/lib/netcoreapp2.0/System.Security.Principal.Windows.dll", "runtimes/win/lib/netstandard1.3/System.Security.Principal.Windows.dll", "system.security.principal.windows.4.4.0.nupkg.sha512", "system.security.principal.windows.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.Spatial/5.8.2": {
        "sha512": "0RfZZJ8RlrfjoBPAF6pczX4Nd2kyLM8EX1PCP5Rqs/jOhJBUPYhpXjIsVAYN7kocj9IJ9XoJWAxWgXIDtJY2Ag==",
        "type": "package",
        "path": "system.spatial/5.8.2",
        "files": ["lib/net40/System.Spatial.dll", "lib/net40/System.Spatial.xml", "lib/net40/de/System.Spatial.resources.dll", "lib/net40/es/System.Spatial.resources.dll", "lib/net40/fr/System.Spatial.resources.dll", "lib/net40/it/System.Spatial.resources.dll", "lib/net40/ja/System.Spatial.resources.dll", "lib/net40/ko/System.Spatial.resources.dll", "lib/net40/ru/System.Spatial.resources.dll", "lib/net40/zh-Hans/System.Spatial.resources.dll", "lib/net40/zh-Hant/System.Spatial.resources.dll", "lib/netstandard1.1/System.Spatial.dll", "lib/netstandard1.1/System.Spatial.xml", "lib/netstandard1.1/de/System.Spatial.resources.dll", "lib/netstandard1.1/es/System.Spatial.resources.dll", "lib/netstandard1.1/fr/System.Spatial.resources.dll", "lib/netstandard1.1/it/System.Spatial.resources.dll", "lib/netstandard1.1/ja/System.Spatial.resources.dll", "lib/netstandard1.1/ko/System.Spatial.resources.dll", "lib/netstandard1.1/ru/System.Spatial.resources.dll", "lib/netstandard1.1/zh-Hans/System.Spatial.resources.dll", "lib/netstandard1.1/zh-Hant/System.Spatial.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/System.Spatial.dll", "lib/portable-net40+sl5+wp8+win8+wpa/System.Spatial.xml", "lib/portable-net40+sl5+wp8+win8+wpa/de/System.Spatial.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/es/System.Spatial.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/fr/System.Spatial.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/it/System.Spatial.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/ja/System.Spatial.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/ko/System.Spatial.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/ru/System.Spatial.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/zh-Hans/System.Spatial.resources.dll", "lib/portable-net40+sl5+wp8+win8+wpa/zh-Hant/System.Spatial.resources.dll", "lib/portable-net45+wp8+win8+wpa/System.Spatial.dll", "lib/portable-net45+wp8+win8+wpa/System.Spatial.xml", "lib/portable-net45+wp8+win8+wpa/de/System.Spatial.resources.dll", "lib/portable-net45+wp8+win8+wpa/es/System.Spatial.resources.dll", "lib/portable-net45+wp8+win8+wpa/fr/System.Spatial.resources.dll", "lib/portable-net45+wp8+win8+wpa/it/System.Spatial.resources.dll", "lib/portable-net45+wp8+win8+wpa/ja/System.Spatial.resources.dll", "lib/portable-net45+wp8+win8+wpa/ko/System.Spatial.resources.dll", "lib/portable-net45+wp8+win8+wpa/ru/System.Spatial.resources.dll", "lib/portable-net45+wp8+win8+wpa/zh-Hans/System.Spatial.resources.dll", "lib/portable-net45+wp8+win8+wpa/zh-Hant/System.Spatial.resources.dll", "lib/sl4/System.Spatial.dll", "lib/sl4/System.Spatial.xml", "lib/sl4/de/System.Spatial.resources.dll", "lib/sl4/es/System.Spatial.resources.dll", "lib/sl4/fr/System.Spatial.resources.dll", "lib/sl4/it/System.Spatial.resources.dll", "lib/sl4/ja/System.Spatial.resources.dll", "lib/sl4/ko/System.Spatial.resources.dll", "lib/sl4/ru/System.Spatial.resources.dll", "lib/sl4/zh-Hans/System.Spatial.resources.dll", "lib/sl4/zh-Hant/System.Spatial.resources.dll", "system.spatial.5.8.2.nupkg.sha512", "system.spatial.nuspec"]
      },
      "System.Text.Encoding/4.3.0": {
        "sha512": "BiIg+KWaSDOITze6jGQynxg64naAPtqGHBwDrLaCtixsa5bKiR8dpPOHA7ge3C0JJQizJE+sfkz1wV+BAKAYZw==",
        "type": "package",
        "path": "system.text.encoding/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Text.Encoding.dll", "ref/netcore50/System.Text.Encoding.xml", "ref/netcore50/de/System.Text.Encoding.xml", "ref/netcore50/es/System.Text.Encoding.xml", "ref/netcore50/fr/System.Text.Encoding.xml", "ref/netcore50/it/System.Text.Encoding.xml", "ref/netcore50/ja/System.Text.Encoding.xml", "ref/netcore50/ko/System.Text.Encoding.xml", "ref/netcore50/ru/System.Text.Encoding.xml", "ref/netcore50/zh-hans/System.Text.Encoding.xml", "ref/netcore50/zh-hant/System.Text.Encoding.xml", "ref/netstandard1.0/System.Text.Encoding.dll", "ref/netstandard1.0/System.Text.Encoding.xml", "ref/netstandard1.0/de/System.Text.Encoding.xml", "ref/netstandard1.0/es/System.Text.Encoding.xml", "ref/netstandard1.0/fr/System.Text.Encoding.xml", "ref/netstandard1.0/it/System.Text.Encoding.xml", "ref/netstandard1.0/ja/System.Text.Encoding.xml", "ref/netstandard1.0/ko/System.Text.Encoding.xml", "ref/netstandard1.0/ru/System.Text.Encoding.xml", "ref/netstandard1.0/zh-hans/System.Text.Encoding.xml", "ref/netstandard1.0/zh-hant/System.Text.Encoding.xml", "ref/netstandard1.3/System.Text.Encoding.dll", "ref/netstandard1.3/System.Text.Encoding.xml", "ref/netstandard1.3/de/System.Text.Encoding.xml", "ref/netstandard1.3/es/System.Text.Encoding.xml", "ref/netstandard1.3/fr/System.Text.Encoding.xml", "ref/netstandard1.3/it/System.Text.Encoding.xml", "ref/netstandard1.3/ja/System.Text.Encoding.xml", "ref/netstandard1.3/ko/System.Text.Encoding.xml", "ref/netstandard1.3/ru/System.Text.Encoding.xml", "ref/netstandard1.3/zh-hans/System.Text.Encoding.xml", "ref/netstandard1.3/zh-hant/System.Text.Encoding.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.text.encoding.4.3.0.nupkg.sha512", "system.text.encoding.nuspec"]
      },
      "System.Text.Encoding.CodePages/4.4.0": {
        "sha512": "6JX7ZdaceBiLKLkYt8zJcp4xTJd1uYyXXEkPw6mnlUIjh1gZPIVKPtRXPmY5kLf6DwZmf5YLwR3QUrRonl7l0A==",
        "type": "package",
        "path": "system.text.encoding.codepages/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Text.Encoding.CodePages.dll", "lib/net461/System.Text.Encoding.CodePages.dll", "lib/netstandard1.3/System.Text.Encoding.CodePages.dll", "lib/netstandard2.0/System.Text.Encoding.CodePages.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/netstandard1.3/System.Text.Encoding.CodePages.dll", "ref/netstandard1.3/System.Text.Encoding.CodePages.xml", "ref/netstandard1.3/de/System.Text.Encoding.CodePages.xml", "ref/netstandard1.3/es/System.Text.Encoding.CodePages.xml", "ref/netstandard1.3/fr/System.Text.Encoding.CodePages.xml", "ref/netstandard1.3/it/System.Text.Encoding.CodePages.xml", "ref/netstandard1.3/ja/System.Text.Encoding.CodePages.xml", "ref/netstandard1.3/ko/System.Text.Encoding.CodePages.xml", "ref/netstandard1.3/ru/System.Text.Encoding.CodePages.xml", "ref/netstandard1.3/zh-hans/System.Text.Encoding.CodePages.xml", "ref/netstandard1.3/zh-hant/System.Text.Encoding.CodePages.xml", "ref/netstandard2.0/System.Text.Encoding.CodePages.dll", "ref/netstandard2.0/System.Text.Encoding.CodePages.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/win/lib/net461/System.Text.Encoding.CodePages.dll", "runtimes/win/lib/netcoreapp2.0/System.Text.Encoding.CodePages.dll", "runtimes/win/lib/netstandard1.3/System.Text.Encoding.CodePages.dll", "runtimes/win/lib/netstandard2.0/System.Text.Encoding.CodePages.dll", "system.text.encoding.codepages.4.4.0.nupkg.sha512", "system.text.encoding.codepages.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.Text.Encoding.Extensions/4.3.0": {
        "sha512": "YVMK0Bt/A43RmwizJoZ22ei2nmrhobgeiYwFzC4YAN+nue8RF6djXDMog0UCn+brerQoYVyaS+ghy9P/MUVcmw==",
        "type": "package",
        "path": "system.text.encoding.extensions/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Text.Encoding.Extensions.dll", "ref/netcore50/System.Text.Encoding.Extensions.xml", "ref/netcore50/de/System.Text.Encoding.Extensions.xml", "ref/netcore50/es/System.Text.Encoding.Extensions.xml", "ref/netcore50/fr/System.Text.Encoding.Extensions.xml", "ref/netcore50/it/System.Text.Encoding.Extensions.xml", "ref/netcore50/ja/System.Text.Encoding.Extensions.xml", "ref/netcore50/ko/System.Text.Encoding.Extensions.xml", "ref/netcore50/ru/System.Text.Encoding.Extensions.xml", "ref/netcore50/zh-hans/System.Text.Encoding.Extensions.xml", "ref/netcore50/zh-hant/System.Text.Encoding.Extensions.xml", "ref/netstandard1.0/System.Text.Encoding.Extensions.dll", "ref/netstandard1.0/System.Text.Encoding.Extensions.xml", "ref/netstandard1.0/de/System.Text.Encoding.Extensions.xml", "ref/netstandard1.0/es/System.Text.Encoding.Extensions.xml", "ref/netstandard1.0/fr/System.Text.Encoding.Extensions.xml", "ref/netstandard1.0/it/System.Text.Encoding.Extensions.xml", "ref/netstandard1.0/ja/System.Text.Encoding.Extensions.xml", "ref/netstandard1.0/ko/System.Text.Encoding.Extensions.xml", "ref/netstandard1.0/ru/System.Text.Encoding.Extensions.xml", "ref/netstandard1.0/zh-hans/System.Text.Encoding.Extensions.xml", "ref/netstandard1.0/zh-hant/System.Text.Encoding.Extensions.xml", "ref/netstandard1.3/System.Text.Encoding.Extensions.dll", "ref/netstandard1.3/System.Text.Encoding.Extensions.xml", "ref/netstandard1.3/de/System.Text.Encoding.Extensions.xml", "ref/netstandard1.3/es/System.Text.Encoding.Extensions.xml", "ref/netstandard1.3/fr/System.Text.Encoding.Extensions.xml", "ref/netstandard1.3/it/System.Text.Encoding.Extensions.xml", "ref/netstandard1.3/ja/System.Text.Encoding.Extensions.xml", "ref/netstandard1.3/ko/System.Text.Encoding.Extensions.xml", "ref/netstandard1.3/ru/System.Text.Encoding.Extensions.xml", "ref/netstandard1.3/zh-hans/System.Text.Encoding.Extensions.xml", "ref/netstandard1.3/zh-hant/System.Text.Encoding.Extensions.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.text.encoding.extensions.4.3.0.nupkg.sha512", "system.text.encoding.extensions.nuspec"]
      },
      "System.Text.Encodings.Web/4.4.0": {
        "sha512": "l/tYeikqMHX2MD2jzrHDfR9ejrpTTF7wvAEbR51AMvzip1wSJgiURbDik4iv/w7ZgytmTD/hlwpplEhF9bmFNw==",
        "type": "package",
        "path": "system.text.encodings.web/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/netstandard1.0/System.Text.Encodings.Web.dll", "lib/netstandard1.0/System.Text.Encodings.Web.xml", "lib/netstandard2.0/System.Text.Encodings.Web.dll", "lib/netstandard2.0/System.Text.Encodings.Web.xml", "system.text.encodings.web.4.4.0.nupkg.sha512", "system.text.encodings.web.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.Text.RegularExpressions/4.3.0": {
        "sha512": "RpT2DA+L660cBt1FssIE9CAGpLFdFPuheB7pLpKpn6ZXNby7jDERe8Ua/Ne2xGiwLVG2JOqziiaVCGDon5sKFA==",
        "type": "package",
        "path": "system.text.regularexpressions/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/net463/System.Text.RegularExpressions.dll", "lib/netcore50/System.Text.RegularExpressions.dll", "lib/netstandard1.6/System.Text.RegularExpressions.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/net463/System.Text.RegularExpressions.dll", "ref/netcore50/System.Text.RegularExpressions.dll", "ref/netcore50/System.Text.RegularExpressions.xml", "ref/netcore50/de/System.Text.RegularExpressions.xml", "ref/netcore50/es/System.Text.RegularExpressions.xml", "ref/netcore50/fr/System.Text.RegularExpressions.xml", "ref/netcore50/it/System.Text.RegularExpressions.xml", "ref/netcore50/ja/System.Text.RegularExpressions.xml", "ref/netcore50/ko/System.Text.RegularExpressions.xml", "ref/netcore50/ru/System.Text.RegularExpressions.xml", "ref/netcore50/zh-hans/System.Text.RegularExpressions.xml", "ref/netcore50/zh-hant/System.Text.RegularExpressions.xml", "ref/netcoreapp1.1/System.Text.RegularExpressions.dll", "ref/netstandard1.0/System.Text.RegularExpressions.dll", "ref/netstandard1.0/System.Text.RegularExpressions.xml", "ref/netstandard1.0/de/System.Text.RegularExpressions.xml", "ref/netstandard1.0/es/System.Text.RegularExpressions.xml", "ref/netstandard1.0/fr/System.Text.RegularExpressions.xml", "ref/netstandard1.0/it/System.Text.RegularExpressions.xml", "ref/netstandard1.0/ja/System.Text.RegularExpressions.xml", "ref/netstandard1.0/ko/System.Text.RegularExpressions.xml", "ref/netstandard1.0/ru/System.Text.RegularExpressions.xml", "ref/netstandard1.0/zh-hans/System.Text.RegularExpressions.xml", "ref/netstandard1.0/zh-hant/System.Text.RegularExpressions.xml", "ref/netstandard1.3/System.Text.RegularExpressions.dll", "ref/netstandard1.3/System.Text.RegularExpressions.xml", "ref/netstandard1.3/de/System.Text.RegularExpressions.xml", "ref/netstandard1.3/es/System.Text.RegularExpressions.xml", "ref/netstandard1.3/fr/System.Text.RegularExpressions.xml", "ref/netstandard1.3/it/System.Text.RegularExpressions.xml", "ref/netstandard1.3/ja/System.Text.RegularExpressions.xml", "ref/netstandard1.3/ko/System.Text.RegularExpressions.xml", "ref/netstandard1.3/ru/System.Text.RegularExpressions.xml", "ref/netstandard1.3/zh-hans/System.Text.RegularExpressions.xml", "ref/netstandard1.3/zh-hant/System.Text.RegularExpressions.xml", "ref/netstandard1.6/System.Text.RegularExpressions.dll", "ref/netstandard1.6/System.Text.RegularExpressions.xml", "ref/netstandard1.6/de/System.Text.RegularExpressions.xml", "ref/netstandard1.6/es/System.Text.RegularExpressions.xml", "ref/netstandard1.6/fr/System.Text.RegularExpressions.xml", "ref/netstandard1.6/it/System.Text.RegularExpressions.xml", "ref/netstandard1.6/ja/System.Text.RegularExpressions.xml", "ref/netstandard1.6/ko/System.Text.RegularExpressions.xml", "ref/netstandard1.6/ru/System.Text.RegularExpressions.xml", "ref/netstandard1.6/zh-hans/System.Text.RegularExpressions.xml", "ref/netstandard1.6/zh-hant/System.Text.RegularExpressions.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.text.regularexpressions.4.3.0.nupkg.sha512", "system.text.regularexpressions.nuspec"]
      },
      "System.Threading/4.3.0": {
        "sha512": "VkUS0kOBcUf3Wwm0TSbrevDDZ6BlM+b/HRiapRFWjM5O0NS0LviG0glKmFK+hhPDd1XFeSdU1GmlLhb2CoVpIw==",
        "type": "package",
        "path": "system.threading/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.Threading.dll", "lib/netstandard1.3/System.Threading.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Threading.dll", "ref/netcore50/System.Threading.xml", "ref/netcore50/de/System.Threading.xml", "ref/netcore50/es/System.Threading.xml", "ref/netcore50/fr/System.Threading.xml", "ref/netcore50/it/System.Threading.xml", "ref/netcore50/ja/System.Threading.xml", "ref/netcore50/ko/System.Threading.xml", "ref/netcore50/ru/System.Threading.xml", "ref/netcore50/zh-hans/System.Threading.xml", "ref/netcore50/zh-hant/System.Threading.xml", "ref/netstandard1.0/System.Threading.dll", "ref/netstandard1.0/System.Threading.xml", "ref/netstandard1.0/de/System.Threading.xml", "ref/netstandard1.0/es/System.Threading.xml", "ref/netstandard1.0/fr/System.Threading.xml", "ref/netstandard1.0/it/System.Threading.xml", "ref/netstandard1.0/ja/System.Threading.xml", "ref/netstandard1.0/ko/System.Threading.xml", "ref/netstandard1.0/ru/System.Threading.xml", "ref/netstandard1.0/zh-hans/System.Threading.xml", "ref/netstandard1.0/zh-hant/System.Threading.xml", "ref/netstandard1.3/System.Threading.dll", "ref/netstandard1.3/System.Threading.xml", "ref/netstandard1.3/de/System.Threading.xml", "ref/netstandard1.3/es/System.Threading.xml", "ref/netstandard1.3/fr/System.Threading.xml", "ref/netstandard1.3/it/System.Threading.xml", "ref/netstandard1.3/ja/System.Threading.xml", "ref/netstandard1.3/ko/System.Threading.xml", "ref/netstandard1.3/ru/System.Threading.xml", "ref/netstandard1.3/zh-hans/System.Threading.xml", "ref/netstandard1.3/zh-hant/System.Threading.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/aot/lib/netcore50/System.Threading.dll", "system.threading.4.3.0.nupkg.sha512", "system.threading.nuspec"]
      },
      "System.Threading.Tasks/4.3.0": {
        "sha512": "LbSxKEdOUhVe8BezB/9uOGGppt+nZf6e1VFyw6v3DN6lqitm0OSn2uXMOdtP0M3W4iMcqcivm2J6UgqiwwnXiA==",
        "type": "package",
        "path": "system.threading.tasks/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Threading.Tasks.dll", "ref/netcore50/System.Threading.Tasks.xml", "ref/netcore50/de/System.Threading.Tasks.xml", "ref/netcore50/es/System.Threading.Tasks.xml", "ref/netcore50/fr/System.Threading.Tasks.xml", "ref/netcore50/it/System.Threading.Tasks.xml", "ref/netcore50/ja/System.Threading.Tasks.xml", "ref/netcore50/ko/System.Threading.Tasks.xml", "ref/netcore50/ru/System.Threading.Tasks.xml", "ref/netcore50/zh-hans/System.Threading.Tasks.xml", "ref/netcore50/zh-hant/System.Threading.Tasks.xml", "ref/netstandard1.0/System.Threading.Tasks.dll", "ref/netstandard1.0/System.Threading.Tasks.xml", "ref/netstandard1.0/de/System.Threading.Tasks.xml", "ref/netstandard1.0/es/System.Threading.Tasks.xml", "ref/netstandard1.0/fr/System.Threading.Tasks.xml", "ref/netstandard1.0/it/System.Threading.Tasks.xml", "ref/netstandard1.0/ja/System.Threading.Tasks.xml", "ref/netstandard1.0/ko/System.Threading.Tasks.xml", "ref/netstandard1.0/ru/System.Threading.Tasks.xml", "ref/netstandard1.0/zh-hans/System.Threading.Tasks.xml", "ref/netstandard1.0/zh-hant/System.Threading.Tasks.xml", "ref/netstandard1.3/System.Threading.Tasks.dll", "ref/netstandard1.3/System.Threading.Tasks.xml", "ref/netstandard1.3/de/System.Threading.Tasks.xml", "ref/netstandard1.3/es/System.Threading.Tasks.xml", "ref/netstandard1.3/fr/System.Threading.Tasks.xml", "ref/netstandard1.3/it/System.Threading.Tasks.xml", "ref/netstandard1.3/ja/System.Threading.Tasks.xml", "ref/netstandard1.3/ko/System.Threading.Tasks.xml", "ref/netstandard1.3/ru/System.Threading.Tasks.xml", "ref/netstandard1.3/zh-hans/System.Threading.Tasks.xml", "ref/netstandard1.3/zh-hant/System.Threading.Tasks.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.threading.tasks.4.3.0.nupkg.sha512", "system.threading.tasks.nuspec"]
      },
      "System.Threading.Tasks.Extensions/4.4.0": {
        "sha512": "SPKfFGbpQsK5Srz2Kq3URgvC90yoOyBE8H1quDA2+MAJ2HAzFmV3biOgPv2Ck3mPAvdKngo3QHi2BNwUQDRVvA==",
        "type": "package",
        "path": "system.threading.tasks.extensions/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/netcoreapp2.0/_._", "lib/netstandard1.0/System.Threading.Tasks.Extensions.dll", "lib/netstandard1.0/System.Threading.Tasks.Extensions.xml", "lib/netstandard2.0/System.Threading.Tasks.Extensions.dll", "lib/netstandard2.0/System.Threading.Tasks.Extensions.xml", "lib/portable-net45+win8+wp8+wpa81/System.Threading.Tasks.Extensions.dll", "lib/portable-net45+win8+wp8+wpa81/System.Threading.Tasks.Extensions.xml", "ref/netcoreapp2.0/_._", "system.threading.tasks.extensions.4.4.0.nupkg.sha512", "system.threading.tasks.extensions.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.Threading.Tasks.Parallel/4.3.0": {
        "sha512": "cbjBNZHf/vQCfcdhzx7knsiygoCKgxL8mZOeocXZn5gWhCdzHIq6bYNKWX0LAJCWYP7bds4yBK8p06YkP0oa0g==",
        "type": "package",
        "path": "system.threading.tasks.parallel/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.Threading.Tasks.Parallel.dll", "lib/netstandard1.3/System.Threading.Tasks.Parallel.dll", "lib/portable-net45+win8+wpa81/_._", "lib/win8/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Threading.Tasks.Parallel.dll", "ref/netcore50/System.Threading.Tasks.Parallel.xml", "ref/netcore50/de/System.Threading.Tasks.Parallel.xml", "ref/netcore50/es/System.Threading.Tasks.Parallel.xml", "ref/netcore50/fr/System.Threading.Tasks.Parallel.xml", "ref/netcore50/it/System.Threading.Tasks.Parallel.xml", "ref/netcore50/ja/System.Threading.Tasks.Parallel.xml", "ref/netcore50/ko/System.Threading.Tasks.Parallel.xml", "ref/netcore50/ru/System.Threading.Tasks.Parallel.xml", "ref/netcore50/zh-hans/System.Threading.Tasks.Parallel.xml", "ref/netcore50/zh-hant/System.Threading.Tasks.Parallel.xml", "ref/netstandard1.1/System.Threading.Tasks.Parallel.dll", "ref/netstandard1.1/System.Threading.Tasks.Parallel.xml", "ref/netstandard1.1/de/System.Threading.Tasks.Parallel.xml", "ref/netstandard1.1/es/System.Threading.Tasks.Parallel.xml", "ref/netstandard1.1/fr/System.Threading.Tasks.Parallel.xml", "ref/netstandard1.1/it/System.Threading.Tasks.Parallel.xml", "ref/netstandard1.1/ja/System.Threading.Tasks.Parallel.xml", "ref/netstandard1.1/ko/System.Threading.Tasks.Parallel.xml", "ref/netstandard1.1/ru/System.Threading.Tasks.Parallel.xml", "ref/netstandard1.1/zh-hans/System.Threading.Tasks.Parallel.xml", "ref/netstandard1.1/zh-hant/System.Threading.Tasks.Parallel.xml", "ref/portable-net45+win8+wpa81/_._", "ref/win8/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.threading.tasks.parallel.4.3.0.nupkg.sha512", "system.threading.tasks.parallel.nuspec"]
      },
      "System.Threading.Thread/4.3.0": {
        "sha512": "OHmbT+Zz065NKII/ZHcH9XO1dEuLGI1L2k7uYss+9C1jLxTC9kTZZuzUOyXHayRk+dft9CiDf3I/QZ0t8JKyBQ==",
        "type": "package",
        "path": "system.threading.thread/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Threading.Thread.dll", "lib/netcore50/_._", "lib/netstandard1.3/System.Threading.Thread.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Threading.Thread.dll", "ref/netstandard1.3/System.Threading.Thread.dll", "ref/netstandard1.3/System.Threading.Thread.xml", "ref/netstandard1.3/de/System.Threading.Thread.xml", "ref/netstandard1.3/es/System.Threading.Thread.xml", "ref/netstandard1.3/fr/System.Threading.Thread.xml", "ref/netstandard1.3/it/System.Threading.Thread.xml", "ref/netstandard1.3/ja/System.Threading.Thread.xml", "ref/netstandard1.3/ko/System.Threading.Thread.xml", "ref/netstandard1.3/ru/System.Threading.Thread.xml", "ref/netstandard1.3/zh-hans/System.Threading.Thread.xml", "ref/netstandard1.3/zh-hant/System.Threading.Thread.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.threading.thread.4.3.0.nupkg.sha512", "system.threading.thread.nuspec"]
      },
      "System.Threading.ThreadPool/4.3.0": {
        "sha512": "k/+g4b7vjdd4aix83sTgC9VG6oXYKAktSfNIJUNGxPEj7ryEOfzHHhfnmsZvjxawwcD9HyWXKCXmPjX8U4zeSw==",
        "type": "package",
        "path": "system.threading.threadpool/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Threading.ThreadPool.dll", "lib/netcore50/_._", "lib/netstandard1.3/System.Threading.ThreadPool.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Threading.ThreadPool.dll", "ref/netstandard1.3/System.Threading.ThreadPool.dll", "ref/netstandard1.3/System.Threading.ThreadPool.xml", "ref/netstandard1.3/de/System.Threading.ThreadPool.xml", "ref/netstandard1.3/es/System.Threading.ThreadPool.xml", "ref/netstandard1.3/fr/System.Threading.ThreadPool.xml", "ref/netstandard1.3/it/System.Threading.ThreadPool.xml", "ref/netstandard1.3/ja/System.Threading.ThreadPool.xml", "ref/netstandard1.3/ko/System.Threading.ThreadPool.xml", "ref/netstandard1.3/ru/System.Threading.ThreadPool.xml", "ref/netstandard1.3/zh-hans/System.Threading.ThreadPool.xml", "ref/netstandard1.3/zh-hant/System.Threading.ThreadPool.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.threading.threadpool.4.3.0.nupkg.sha512", "system.threading.threadpool.nuspec"]
      },
      "System.Threading.Timer/4.3.0": {
        "sha512": "Z6YfyYTCg7lOZjJzBjONJTFKGN9/NIYKSxhU5GRd+DTwHSZyvWp1xuI5aR+dLg+ayyC5Xv57KiY4oJ0tMO89fQ==",
        "type": "package",
        "path": "system.threading.timer/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net451/_._", "lib/portable-net451+win81+wpa81/_._", "lib/win81/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net451/_._", "ref/netcore50/System.Threading.Timer.dll", "ref/netcore50/System.Threading.Timer.xml", "ref/netcore50/de/System.Threading.Timer.xml", "ref/netcore50/es/System.Threading.Timer.xml", "ref/netcore50/fr/System.Threading.Timer.xml", "ref/netcore50/it/System.Threading.Timer.xml", "ref/netcore50/ja/System.Threading.Timer.xml", "ref/netcore50/ko/System.Threading.Timer.xml", "ref/netcore50/ru/System.Threading.Timer.xml", "ref/netcore50/zh-hans/System.Threading.Timer.xml", "ref/netcore50/zh-hant/System.Threading.Timer.xml", "ref/netstandard1.2/System.Threading.Timer.dll", "ref/netstandard1.2/System.Threading.Timer.xml", "ref/netstandard1.2/de/System.Threading.Timer.xml", "ref/netstandard1.2/es/System.Threading.Timer.xml", "ref/netstandard1.2/fr/System.Threading.Timer.xml", "ref/netstandard1.2/it/System.Threading.Timer.xml", "ref/netstandard1.2/ja/System.Threading.Timer.xml", "ref/netstandard1.2/ko/System.Threading.Timer.xml", "ref/netstandard1.2/ru/System.Threading.Timer.xml", "ref/netstandard1.2/zh-hans/System.Threading.Timer.xml", "ref/netstandard1.2/zh-hant/System.Threading.Timer.xml", "ref/portable-net451+win81+wpa81/_._", "ref/win81/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.threading.timer.4.3.0.nupkg.sha512", "system.threading.timer.nuspec"]
      },
      "System.ValueTuple/4.4.0": {
        "sha512": "BahUww/+mdP4ARCAh2RQhQTg13wYLVrBb9SYVgW8ZlrwjraGCXHGjo0oIiUfZ34LUZkMMR+RAzR7dEY4S1HeQQ==",
        "type": "package",
        "path": "system.valuetuple/4.4.0",
        "files": ["LICENSE.TXT", "THIRD-PARTY-NOTICES.TXT", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net461/System.ValueTuple.dll", "lib/net461/System.ValueTuple.xml", "lib/net47/System.ValueTuple.dll", "lib/net47/System.ValueTuple.xml", "lib/netcoreapp2.0/_._", "lib/netstandard1.0/System.ValueTuple.dll", "lib/netstandard1.0/System.ValueTuple.xml", "lib/netstandard2.0/_._", "lib/portable-net40+sl4+win8+wp8/System.ValueTuple.dll", "lib/portable-net40+sl4+win8+wp8/System.ValueTuple.xml", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net461/System.ValueTuple.dll", "ref/net461/System.ValueTuple.xml", "ref/net47/System.ValueTuple.dll", "ref/net47/System.ValueTuple.xml", "ref/netcoreapp2.0/_._", "ref/netstandard2.0/_._", "ref/portable-net40+sl4+win8+wp8/System.ValueTuple.dll", "ref/portable-net40+sl4+win8+wp8/System.ValueTuple.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.valuetuple.4.4.0.nupkg.sha512", "system.valuetuple.nuspec", "useSharedDesignerContext.txt", "version.txt"]
      },
      "System.Xml.ReaderWriter/4.3.0": {
        "sha512": "GrprA+Z0RUXaR4N7/eW71j1rgMnEnEVlgii49GZyAjTH7uliMnrOU3HNFBr6fEDBCJCIdlVNq9hHbaDR621XBA==",
        "type": "package",
        "path": "system.xml.readerwriter/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/net46/System.Xml.ReaderWriter.dll", "lib/netcore50/System.Xml.ReaderWriter.dll", "lib/netstandard1.3/System.Xml.ReaderWriter.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/net46/System.Xml.ReaderWriter.dll", "ref/netcore50/System.Xml.ReaderWriter.dll", "ref/netcore50/System.Xml.ReaderWriter.xml", "ref/netcore50/de/System.Xml.ReaderWriter.xml", "ref/netcore50/es/System.Xml.ReaderWriter.xml", "ref/netcore50/fr/System.Xml.ReaderWriter.xml", "ref/netcore50/it/System.Xml.ReaderWriter.xml", "ref/netcore50/ja/System.Xml.ReaderWriter.xml", "ref/netcore50/ko/System.Xml.ReaderWriter.xml", "ref/netcore50/ru/System.Xml.ReaderWriter.xml", "ref/netcore50/zh-hans/System.Xml.ReaderWriter.xml", "ref/netcore50/zh-hant/System.Xml.ReaderWriter.xml", "ref/netstandard1.0/System.Xml.ReaderWriter.dll", "ref/netstandard1.0/System.Xml.ReaderWriter.xml", "ref/netstandard1.0/de/System.Xml.ReaderWriter.xml", "ref/netstandard1.0/es/System.Xml.ReaderWriter.xml", "ref/netstandard1.0/fr/System.Xml.ReaderWriter.xml", "ref/netstandard1.0/it/System.Xml.ReaderWriter.xml", "ref/netstandard1.0/ja/System.Xml.ReaderWriter.xml", "ref/netstandard1.0/ko/System.Xml.ReaderWriter.xml", "ref/netstandard1.0/ru/System.Xml.ReaderWriter.xml", "ref/netstandard1.0/zh-hans/System.Xml.ReaderWriter.xml", "ref/netstandard1.0/zh-hant/System.Xml.ReaderWriter.xml", "ref/netstandard1.3/System.Xml.ReaderWriter.dll", "ref/netstandard1.3/System.Xml.ReaderWriter.xml", "ref/netstandard1.3/de/System.Xml.ReaderWriter.xml", "ref/netstandard1.3/es/System.Xml.ReaderWriter.xml", "ref/netstandard1.3/fr/System.Xml.ReaderWriter.xml", "ref/netstandard1.3/it/System.Xml.ReaderWriter.xml", "ref/netstandard1.3/ja/System.Xml.ReaderWriter.xml", "ref/netstandard1.3/ko/System.Xml.ReaderWriter.xml", "ref/netstandard1.3/ru/System.Xml.ReaderWriter.xml", "ref/netstandard1.3/zh-hans/System.Xml.ReaderWriter.xml", "ref/netstandard1.3/zh-hant/System.Xml.ReaderWriter.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.xml.readerwriter.4.3.0.nupkg.sha512", "system.xml.readerwriter.nuspec"]
      },
      "System.Xml.XDocument/4.3.0": {
        "sha512": "5zJ0XDxAIg8iy+t4aMnQAu0MqVbqyvfoUVl1yDV61xdo3Vth45oA2FoY4pPkxYAH5f8ixpmTqXeEIya95x0aCQ==",
        "type": "package",
        "path": "system.xml.xdocument/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.Xml.XDocument.dll", "lib/netstandard1.3/System.Xml.XDocument.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Xml.XDocument.dll", "ref/netcore50/System.Xml.XDocument.xml", "ref/netcore50/de/System.Xml.XDocument.xml", "ref/netcore50/es/System.Xml.XDocument.xml", "ref/netcore50/fr/System.Xml.XDocument.xml", "ref/netcore50/it/System.Xml.XDocument.xml", "ref/netcore50/ja/System.Xml.XDocument.xml", "ref/netcore50/ko/System.Xml.XDocument.xml", "ref/netcore50/ru/System.Xml.XDocument.xml", "ref/netcore50/zh-hans/System.Xml.XDocument.xml", "ref/netcore50/zh-hant/System.Xml.XDocument.xml", "ref/netstandard1.0/System.Xml.XDocument.dll", "ref/netstandard1.0/System.Xml.XDocument.xml", "ref/netstandard1.0/de/System.Xml.XDocument.xml", "ref/netstandard1.0/es/System.Xml.XDocument.xml", "ref/netstandard1.0/fr/System.Xml.XDocument.xml", "ref/netstandard1.0/it/System.Xml.XDocument.xml", "ref/netstandard1.0/ja/System.Xml.XDocument.xml", "ref/netstandard1.0/ko/System.Xml.XDocument.xml", "ref/netstandard1.0/ru/System.Xml.XDocument.xml", "ref/netstandard1.0/zh-hans/System.Xml.XDocument.xml", "ref/netstandard1.0/zh-hant/System.Xml.XDocument.xml", "ref/netstandard1.3/System.Xml.XDocument.dll", "ref/netstandard1.3/System.Xml.XDocument.xml", "ref/netstandard1.3/de/System.Xml.XDocument.xml", "ref/netstandard1.3/es/System.Xml.XDocument.xml", "ref/netstandard1.3/fr/System.Xml.XDocument.xml", "ref/netstandard1.3/it/System.Xml.XDocument.xml", "ref/netstandard1.3/ja/System.Xml.XDocument.xml", "ref/netstandard1.3/ko/System.Xml.XDocument.xml", "ref/netstandard1.3/ru/System.Xml.XDocument.xml", "ref/netstandard1.3/zh-hans/System.Xml.XDocument.xml", "ref/netstandard1.3/zh-hant/System.Xml.XDocument.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.xml.xdocument.4.3.0.nupkg.sha512", "system.xml.xdocument.nuspec"]
      },
      "System.Xml.XmlDocument/4.3.0": {
        "sha512": "lJ8AxvkX7GQxpC6GFCeBj8ThYVyQczx2+f/cWHJU8tjS7YfI6Cv6bon70jVEgs2CiFbmmM8b9j1oZVx0dSI2Ww==",
        "type": "package",
        "path": "system.xml.xmldocument/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Xml.XmlDocument.dll", "lib/netstandard1.3/System.Xml.XmlDocument.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Xml.XmlDocument.dll", "ref/netstandard1.3/System.Xml.XmlDocument.dll", "ref/netstandard1.3/System.Xml.XmlDocument.xml", "ref/netstandard1.3/de/System.Xml.XmlDocument.xml", "ref/netstandard1.3/es/System.Xml.XmlDocument.xml", "ref/netstandard1.3/fr/System.Xml.XmlDocument.xml", "ref/netstandard1.3/it/System.Xml.XmlDocument.xml", "ref/netstandard1.3/ja/System.Xml.XmlDocument.xml", "ref/netstandard1.3/ko/System.Xml.XmlDocument.xml", "ref/netstandard1.3/ru/System.Xml.XmlDocument.xml", "ref/netstandard1.3/zh-hans/System.Xml.XmlDocument.xml", "ref/netstandard1.3/zh-hant/System.Xml.XmlDocument.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.xml.xmldocument.4.3.0.nupkg.sha512", "system.xml.xmldocument.nuspec"]
      },
      "System.Xml.XmlSerializer/4.0.11": {
        "sha512": "FrazwwqfIXTfq23mfv4zH+BjqkSFNaNFBtjzu3I9NRmG8EELYyrv/fJnttCIwRMFRR/YKXF1hmsMmMEnl55HGw==",
        "type": "package",
        "path": "system.xml.xmlserializer/4.0.11",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net45/_._", "lib/netcore50/System.Xml.XmlSerializer.dll", "lib/netstandard1.3/System.Xml.XmlSerializer.dll", "lib/portable-net45+win8+wp8+wpa81/_._", "lib/win8/_._", "lib/wp80/_._", "lib/wpa81/_._", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net45/_._", "ref/netcore50/System.Xml.XmlSerializer.dll", "ref/netcore50/System.Xml.XmlSerializer.xml", "ref/netcore50/de/System.Xml.XmlSerializer.xml", "ref/netcore50/es/System.Xml.XmlSerializer.xml", "ref/netcore50/fr/System.Xml.XmlSerializer.xml", "ref/netcore50/it/System.Xml.XmlSerializer.xml", "ref/netcore50/ja/System.Xml.XmlSerializer.xml", "ref/netcore50/ko/System.Xml.XmlSerializer.xml", "ref/netcore50/ru/System.Xml.XmlSerializer.xml", "ref/netcore50/zh-hans/System.Xml.XmlSerializer.xml", "ref/netcore50/zh-hant/System.Xml.XmlSerializer.xml", "ref/netstandard1.0/System.Xml.XmlSerializer.dll", "ref/netstandard1.0/System.Xml.XmlSerializer.xml", "ref/netstandard1.0/de/System.Xml.XmlSerializer.xml", "ref/netstandard1.0/es/System.Xml.XmlSerializer.xml", "ref/netstandard1.0/fr/System.Xml.XmlSerializer.xml", "ref/netstandard1.0/it/System.Xml.XmlSerializer.xml", "ref/netstandard1.0/ja/System.Xml.XmlSerializer.xml", "ref/netstandard1.0/ko/System.Xml.XmlSerializer.xml", "ref/netstandard1.0/ru/System.Xml.XmlSerializer.xml", "ref/netstandard1.0/zh-hans/System.Xml.XmlSerializer.xml", "ref/netstandard1.0/zh-hant/System.Xml.XmlSerializer.xml", "ref/netstandard1.3/System.Xml.XmlSerializer.dll", "ref/netstandard1.3/System.Xml.XmlSerializer.xml", "ref/netstandard1.3/de/System.Xml.XmlSerializer.xml", "ref/netstandard1.3/es/System.Xml.XmlSerializer.xml", "ref/netstandard1.3/fr/System.Xml.XmlSerializer.xml", "ref/netstandard1.3/it/System.Xml.XmlSerializer.xml", "ref/netstandard1.3/ja/System.Xml.XmlSerializer.xml", "ref/netstandard1.3/ko/System.Xml.XmlSerializer.xml", "ref/netstandard1.3/ru/System.Xml.XmlSerializer.xml", "ref/netstandard1.3/zh-hans/System.Xml.XmlSerializer.xml", "ref/netstandard1.3/zh-hant/System.Xml.XmlSerializer.xml", "ref/portable-net45+win8+wp8+wpa81/_._", "ref/win8/_._", "ref/wp80/_._", "ref/wpa81/_._", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "runtimes/aot/lib/netcore50/System.Xml.XmlSerializer.dll", "system.xml.xmlserializer.4.0.11.nupkg.sha512", "system.xml.xmlserializer.nuspec"]
      },
      "System.Xml.XPath/4.3.0": {
        "sha512": "v1JQ5SETnQusqmS3RwStF7vwQ3L02imIzl++sewmt23VGygix04pEH+FCj1yWb+z4GDzKiljr1W7Wfvrx0YwgA==",
        "type": "package",
        "path": "system.xml.xpath/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Xml.XPath.dll", "lib/netstandard1.3/System.Xml.XPath.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Xml.XPath.dll", "ref/netstandard1.3/System.Xml.XPath.dll", "ref/netstandard1.3/System.Xml.XPath.xml", "ref/netstandard1.3/de/System.Xml.XPath.xml", "ref/netstandard1.3/es/System.Xml.XPath.xml", "ref/netstandard1.3/fr/System.Xml.XPath.xml", "ref/netstandard1.3/it/System.Xml.XPath.xml", "ref/netstandard1.3/ja/System.Xml.XPath.xml", "ref/netstandard1.3/ko/System.Xml.XPath.xml", "ref/netstandard1.3/ru/System.Xml.XPath.xml", "ref/netstandard1.3/zh-hans/System.Xml.XPath.xml", "ref/netstandard1.3/zh-hant/System.Xml.XPath.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.xml.xpath.4.3.0.nupkg.sha512", "system.xml.xpath.nuspec"]
      },
      "System.Xml.XPath.XDocument/4.3.0": {
        "sha512": "jw9oHHEIVW53mHY9PgrQa98Xo2IZ0ZjrpdOTmtvk+Rvg4tq7dydmxdNqUvJ5YwjDqhn75mBXWttWjiKhWP53LQ==",
        "type": "package",
        "path": "system.xml.xpath.xdocument/4.3.0",
        "files": ["ThirdPartyNotices.txt", "dotnet_library_license.txt", "lib/MonoAndroid10/_._", "lib/MonoTouch10/_._", "lib/net46/System.Xml.XPath.XDocument.dll", "lib/netstandard1.3/System.Xml.XPath.XDocument.dll", "lib/xamarinios10/_._", "lib/xamarinmac20/_._", "lib/xamarintvos10/_._", "lib/xamarinwatchos10/_._", "ref/MonoAndroid10/_._", "ref/MonoTouch10/_._", "ref/net46/System.Xml.XPath.XDocument.dll", "ref/netstandard1.3/System.Xml.XPath.XDocument.dll", "ref/netstandard1.3/System.Xml.XPath.XDocument.xml", "ref/netstandard1.3/de/System.Xml.XPath.XDocument.xml", "ref/netstandard1.3/es/System.Xml.XPath.XDocument.xml", "ref/netstandard1.3/fr/System.Xml.XPath.XDocument.xml", "ref/netstandard1.3/it/System.Xml.XPath.XDocument.xml", "ref/netstandard1.3/ja/System.Xml.XPath.XDocument.xml", "ref/netstandard1.3/ko/System.Xml.XPath.XDocument.xml", "ref/netstandard1.3/ru/System.Xml.XPath.XDocument.xml", "ref/netstandard1.3/zh-hans/System.Xml.XPath.XDocument.xml", "ref/netstandard1.3/zh-hant/System.Xml.XPath.XDocument.xml", "ref/xamarinios10/_._", "ref/xamarinmac20/_._", "ref/xamarintvos10/_._", "ref/xamarinwatchos10/_._", "system.xml.xpath.xdocument.4.3.0.nupkg.sha512", "system.xml.xpath.xdocument.nuspec"]
      },
      "WindowsAzure.Storage/8.1.4": {
        "sha512": "W6ZZ0/o7+3Qb77mRAQyLjPudHG3OMeeQ4p9yY13PUdJArmRCx2cLMm5F4tpIjJXxzHC0ew0oK7DMDGILMdfCnw==",
        "type": "package",
        "path": "windowsazure.storage/8.1.4",
        "files": ["lib/net45/Microsoft.WindowsAzure.Storage.dll", "lib/net45/Microsoft.WindowsAzure.Storage.pdb", "lib/net45/Microsoft.WindowsAzure.Storage.xml", "lib/netstandard1.0/Microsoft.WindowsAzure.Storage.dll", "lib/netstandard1.0/Microsoft.WindowsAzure.Storage.pdb", "lib/netstandard1.3/Microsoft.WindowsAzure.Storage.dll", "lib/netstandard1.3/Microsoft.WindowsAzure.Storage.pdb", "lib/win8/Microsoft.WindowsAzure.Storage.dll", "lib/win8/Microsoft.WindowsAzure.Storage.pdb", "lib/wp8/Microsoft.WindowsAzure.Storage.dll", "lib/wp8/Microsoft.WindowsAzure.Storage.pdb", "lib/wpa/Microsoft.WindowsAzure.Storage.dll", "lib/wpa/Microsoft.WindowsAzure.Storage.pdb", "windowsazure.storage.8.1.4.nupkg.sha512", "windowsazure.storage.nuspec"]
      }
    },
    "projectFileDependencyGroups": {
      ".NETCoreApp,Version=v2.0": ["Microsoft.AspNetCore.All >= 2.0.5", "Microsoft.NETCore.App >= 2.0.0", "Microsoft.VisualStudio.Web.CodeGeneration.Design >= 2.0.2", "bootstrap >= 4.0.0"]
    },
    "packageFolders": {
      "C:\\Users\\pankaj\\.nuget\\packages\\": {},
      "C:\\Program Files\\dotnet\\sdk\\NuGetFallbackFolder": {}
    },
    "project": {
      "version": "1.0.0",
      "restoreSettings": {
        "hideWarningsAndErrors": true
      },
      "restore": {
        "projectUniqueName": "H:\\OneDrive\\working on project\\ShopOnline\\DevelopmentCode\\DevelopmentCode.csproj",
        "projectName": "DevelopmentCode",
        "projectPath": "H:\\OneDrive\\working on project\\ShopOnline\\DevelopmentCode\\DevelopmentCode.csproj",
        "packagesPath": "C:\\Users\\pankaj\\.nuget\\packages\\",
        "outputPath": "H:\\OneDrive\\working on project\\ShopOnline\\DevelopmentCode\\obj\\",
        "projectStyle": "PackageReference",
        "fallbackFolders": ["C:\\Program Files\\dotnet\\sdk\\NuGetFallbackFolder"],
        "configFilePaths": ["C:\\Users\\pankaj\\AppData\\Roaming\\NuGet\\NuGet.Config", "C:\\Program Files (x86)\\NuGet\\Config\\Microsoft.VisualStudio.Offline.config"],
        "originalTargetFrameworks": ["netcoreapp2.0"],
        "sources": {
          "C:\\Program Files (x86)\\Microsoft SDKs\\NuGetPackages\\": {},
          "https://api.nuget.org/v3/index.json": {}
        },
        "frameworks": {
          "netcoreapp2.0": {
            "projectReferences": {}
          }
        },
        "warningProperties": {
          "warnAsError": ["NU1605"]
        }
      },
      "frameworks": {
        "netcoreapp2.0": {
          "dependencies": {
            "Microsoft.AspNetCore.All": {
              "target": "Package",
              "version": "[2.0.5, )"
            },
            "Microsoft.NETCore.App": {
              "target": "Package",
              "version": "[2.0.0, )",
              "autoReferenced": true
            },
            "Microsoft.VisualStudio.Web.CodeGeneration.Design": {
              "target": "Package",
              "version": "[2.0.2, )"
            },
            "bootstrap": {
              "target": "Package",
              "version": "[4.0.0, )"
            }
          },
          "imports": ["net461"],
          "assetTargetFallback": true,
          "warn": true
        }
      }
    }
  });

}).call(this);