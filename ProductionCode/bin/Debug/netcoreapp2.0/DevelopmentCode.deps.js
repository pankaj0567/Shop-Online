(function() {
  ({
    "runtimeTarget": {
      "name": ".NETCoreApp,Version=v2.0",
      "signature": "69ddc299d791c79b31b26974c14ff499befda8e5"
    },
    "compilationOptions": {
      "defines": ["TRACE", "DEBUG", "NETCOREAPP2_0"],
      "languageVersion": "",
      "platform": "",
      "allowUnsafe": false,
      "warningsAsErrors": false,
      "optimize": false,
      "keyFile": "",
      "emitEntryPoint": true,
      "xmlDoc": false,
      "debugType": "portable"
    },
    "targets": {
      ".NETCoreApp,Version=v2.0": {
        "DevelopmentCode/1.0.0": {
          "dependencies": {
            "Microsoft.AspNetCore.All": "2.0.5",
            "Microsoft.NETCore.App": "2.0.0",
            "Microsoft.VisualStudio.Web.CodeGeneration.Design": "2.0.2",
            "bootstrap": "4.0.0"
          },
          "runtime": {
            "DevelopmentCode.dll": {}
          },
          "compile": {
            "DevelopmentCode.dll": {}
          }
        },
        "bootstrap/4.0.0": {
          "dependencies": {
            "jQuery": "3.0.0",
            "popper.js": "1.12.9"
          }
        },
        "jQuery/3.0.0": {},
        "Libuv/1.10.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0"
          },
          "runtimeTargets": {
            "runtimes/linux-arm/native/libuv.so": {
              "rid": "linux-arm",
              "assetType": "native"
            },
            "runtimes/linux-arm64/native/libuv.so": {
              "rid": "linux-arm64",
              "assetType": "native"
            },
            "runtimes/linux-armel/native/libuv.so": {
              "rid": "linux-armel",
              "assetType": "native"
            },
            "runtimes/linux-x64/native/libuv.so": {
              "rid": "linux-x64",
              "assetType": "native"
            },
            "runtimes/osx/native/libuv.dylib": {
              "rid": "osx",
              "assetType": "native"
            },
            "runtimes/win-arm/native/libuv.dll": {
              "rid": "win-arm",
              "assetType": "native"
            },
            "runtimes/win-x64/native/libuv.dll": {
              "rid": "win-x64",
              "assetType": "native"
            },
            "runtimes/win-x86/native/libuv.dll": {
              "rid": "win-x86",
              "assetType": "native"
            }
          }
        },
        "Microsoft.ApplicationInsights/2.4.0": {
          "dependencies": {
            "NETStandard.Library": "2.0.0",
            "System.Diagnostics.DiagnosticSource": "4.4.1",
            "System.Diagnostics.StackTrace": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.ApplicationInsights.dll": {}
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.ApplicationInsights.dll": {}
          }
        },
        "Microsoft.ApplicationInsights.AspNetCore/2.1.1": {
          "dependencies": {
            "Microsoft.ApplicationInsights": "2.4.0",
            "Microsoft.ApplicationInsights.DependencyCollector": "2.4.1",
            "Microsoft.AspNetCore.Hosting": "2.0.1",
            "Microsoft.Extensions.Configuration": "2.0.0",
            "Microsoft.Extensions.Configuration.Json": "2.0.0",
            "Microsoft.Extensions.DiagnosticAdapter": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "NETStandard.Library": "2.0.0",
            "System.Net.NameResolution": "4.3.0",
            "System.Text.Encodings.Web": "4.4.0"
          },
          "runtime": {
            "lib/netstandard1.6/Microsoft.ApplicationInsights.AspNetCore.dll": {}
          },
          "compile": {
            "lib/netstandard1.6/Microsoft.ApplicationInsights.AspNetCore.dll": {}
          }
        },
        "Microsoft.ApplicationInsights.DependencyCollector/2.4.1": {
          "dependencies": {
            "Microsoft.ApplicationInsights": "2.4.0",
            "Microsoft.Extensions.PlatformAbstractions": "1.1.0",
            "NETStandard.Library": "2.0.0",
            "System.Diagnostics.DiagnosticSource": "4.4.1",
            "System.Diagnostics.StackTrace": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.6/Microsoft.AI.DependencyCollector.dll": {}
          },
          "compile": {
            "lib/netstandard1.6/Microsoft.AI.DependencyCollector.dll": {}
          }
        },
        "Microsoft.AspNetCore/2.0.1": {
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
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.dll": {}
          }
        },
        "Microsoft.AspNetCore.All/2.0.5": {
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
          }
        },
        "Microsoft.AspNetCore.Antiforgery/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.DataProtection": "2.0.1",
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.AspNetCore.WebUtilities": "2.0.1",
            "Microsoft.Extensions.ObjectPool": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Antiforgery.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Antiforgery.dll": {}
          }
        },
        "Microsoft.AspNetCore.ApplicationInsights.HostingStartup/2.0.1": {
          "dependencies": {
            "Microsoft.ApplicationInsights.AspNetCore": "2.1.1",
            "Microsoft.AspNetCore.Hosting": "2.0.1",
            "Microsoft.AspNetCore.Razor.Runtime": "2.0.1",
            "Microsoft.Extensions.Configuration.Json": "2.0.0",
            "Microsoft.Extensions.DiagnosticAdapter": "2.0.0",
            "Microsoft.Extensions.Logging": "2.0.0",
            "Microsoft.Extensions.Logging.Configuration": "2.0.0"
          },
          "runtime": {
            "lib/netcoreapp2.0/Microsoft.AspNetCore.ApplicationInsights.HostingStartup.dll": {}
          },
          "compile": {
            "lib/netcoreapp2.0/Microsoft.AspNetCore.ApplicationInsights.HostingStartup.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.Core": "2.0.1",
            "Microsoft.AspNetCore.DataProtection": "2.0.1",
            "Microsoft.AspNetCore.Http": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "Microsoft.Extensions.WebEncoders": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.Abstractions/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.Cookies/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Authentication": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Cookies.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Cookies.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.Core/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Core.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Core.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.Facebook/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.OAuth": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Facebook.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Facebook.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.Google/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.OAuth": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Google.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Google.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.JwtBearer/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Authentication": "2.0.1",
            "Microsoft.IdentityModel.Protocols.OpenIdConnect": "2.1.4"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.JwtBearer.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.JwtBearer.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.MicrosoftAccount/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.OAuth": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.MicrosoftAccount.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.MicrosoftAccount.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.OAuth/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Authentication": "2.0.1",
            "Newtonsoft.Json": "10.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.OAuth.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.OAuth.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.OpenIdConnect/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.OAuth": "2.0.1",
            "Microsoft.IdentityModel.Protocols.OpenIdConnect": "2.1.4"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.OpenIdConnect.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.OpenIdConnect.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authentication.Twitter/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.OAuth": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Twitter.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authentication.Twitter.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authorization/2.0.1": {
          "dependencies": {
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authorization.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authorization.dll": {}
          }
        },
        "Microsoft.AspNetCore.Authorization.Policy/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Authorization": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authorization.Policy.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Authorization.Policy.dll": {}
          }
        },
        "Microsoft.AspNetCore.AzureAppServices.HostingStartup/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.AzureAppServicesIntegration": "2.0.1",
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1"
          },
          "runtime": {
            "lib/netcoreapp2.0/Microsoft.AspNetCore.AzureAppServices.HostingStartup.dll": {}
          },
          "compile": {
            "lib/netcoreapp2.0/Microsoft.AspNetCore.AzureAppServices.HostingStartup.dll": {}
          }
        },
        "Microsoft.AspNetCore.AzureAppServicesIntegration/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Hosting": "2.0.1",
            "Microsoft.Extensions.Logging.AzureAppServices": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.AzureAppServicesIntegration.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.AzureAppServicesIntegration.dll": {}
          }
        },
        "Microsoft.AspNetCore.CookiePolicy/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http": "2.0.1",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.CookiePolicy.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.CookiePolicy.dll": {}
          }
        },
        "Microsoft.AspNetCore.Cors/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0",
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Cors.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Cors.dll": {}
          }
        },
        "Microsoft.AspNetCore.Cryptography.Internal/2.0.1": {
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Cryptography.Internal.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Cryptography.Internal.dll": {}
          }
        },
        "Microsoft.AspNetCore.Cryptography.KeyDerivation/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Cryptography.Internal": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Cryptography.KeyDerivation.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Cryptography.KeyDerivation.dll": {}
          }
        },
        "Microsoft.AspNetCore.DataProtection/2.0.1": {
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
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.dll": {}
          }
        },
        "Microsoft.AspNetCore.DataProtection.Abstractions/2.0.1": {
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.DataProtection.AzureStorage/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.DataProtection": "2.0.1",
            "WindowsAzure.Storage": "8.1.4"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.AzureStorage.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.AzureStorage.dll": {}
          }
        },
        "Microsoft.AspNetCore.DataProtection.Extensions/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.DataProtection": "2.0.1",
            "Microsoft.Extensions.DependencyInjection": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.Extensions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.DataProtection.Extensions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Diagnostics/2.0.1": {
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
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.dll": {}
          }
        },
        "Microsoft.AspNetCore.Diagnostics.Abstractions/2.0.1": {
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.EntityFrameworkCore.Relational": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore.dll": {}
          }
        },
        "Microsoft.AspNetCore.Hosting/2.0.1": {
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
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.dll": {}
          }
        },
        "Microsoft.AspNetCore.Hosting.Abstractions/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Server.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0",
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0",
            "Microsoft.Extensions.Hosting.Abstractions": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Hosting.Server.Abstractions/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Features": "2.0.1",
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.Server.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Hosting.Server.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Html.Abstractions/2.0.0": {
          "dependencies": {
            "System.Text.Encodings.Web": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Html.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Html.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Http/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.WebUtilities": "2.0.1",
            "Microsoft.Extensions.ObjectPool": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "Microsoft.Net.Http.Headers": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.dll": {}
          }
        },
        "Microsoft.AspNetCore.Http.Abstractions/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Features": "2.0.1",
            "System.Text.Encodings.Web": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Http.Extensions/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0",
            "Microsoft.Net.Http.Headers": "2.0.1",
            "System.Buffers": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.Extensions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.Extensions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Http.Features/2.0.1": {
          "dependencies": {
            "Microsoft.Extensions.Primitives": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.Features.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Http.Features.dll": {}
          }
        },
        "Microsoft.AspNetCore.HttpOverrides/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.HttpOverrides.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.HttpOverrides.dll": {}
          }
        },
        "Microsoft.AspNetCore.Identity/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.Cookies": "2.0.1",
            "Microsoft.AspNetCore.Cryptography.KeyDerivation": "2.0.1",
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.Extensions.Identity.Core": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Identity.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Identity.dll": {}
          }
        },
        "Microsoft.AspNetCore.Identity.EntityFrameworkCore/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Identity": "2.0.1",
            "Microsoft.EntityFrameworkCore.Relational": "2.0.1",
            "Microsoft.Extensions.Identity.Stores": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Identity.EntityFrameworkCore.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Identity.EntityFrameworkCore.dll": {}
          }
        },
        "Microsoft.AspNetCore.JsonPatch/2.0.0": {
          "dependencies": {
            "Microsoft.CSharp": "4.4.0",
            "Newtonsoft.Json": "10.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.JsonPatch.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.JsonPatch.dll": {}
          }
        },
        "Microsoft.AspNetCore.Localization/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Localization.Abstractions": "2.0.1",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Localization.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Localization.dll": {}
          }
        },
        "Microsoft.AspNetCore.Localization.Routing/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Localization": "2.0.1",
            "Microsoft.AspNetCore.Routing.Abstractions": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Localization.Routing.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Localization.Routing.dll": {}
          }
        },
        "Microsoft.AspNetCore.MiddlewareAnalysis/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "System.Diagnostics.DiagnosticSource": "4.4.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.MiddlewareAnalysis.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.MiddlewareAnalysis.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc/2.0.2": {
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
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Abstractions/2.0.2": {
          "dependencies": {
            "Microsoft.AspNetCore.Routing.Abstractions": "2.0.1",
            "Microsoft.Net.Http.Headers": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.ApiExplorer/2.0.2": {
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.Core": "2.0.2"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.ApiExplorer.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.ApiExplorer.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Core/2.0.2": {
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
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Core.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Core.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Cors/2.0.2": {
          "dependencies": {
            "Microsoft.AspNetCore.Cors": "2.0.1",
            "Microsoft.AspNetCore.Mvc.Core": "2.0.2"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Cors.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Cors.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.DataAnnotations/2.0.2": {
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.Core": "2.0.2",
            "Microsoft.Extensions.Localization": "2.0.1",
            "System.ComponentModel.Annotations": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.DataAnnotations.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.DataAnnotations.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Formatters.Json/2.0.2": {
          "dependencies": {
            "Microsoft.AspNetCore.JsonPatch": "2.0.0",
            "Microsoft.AspNetCore.Mvc.Core": "2.0.2"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Formatters.Json.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Formatters.Json.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Formatters.Xml/2.0.2": {
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.Core": "2.0.2"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Formatters.Xml.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Formatters.Xml.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Localization/2.0.2": {
          "dependencies": {
            "Microsoft.AspNetCore.Localization": "2.0.1",
            "Microsoft.AspNetCore.Mvc.Razor": "2.0.2",
            "Microsoft.Extensions.DependencyInjection": "2.0.0",
            "Microsoft.Extensions.Localization": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Localization.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Localization.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Razor/2.0.2": {
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.Razor.Extensions": "2.0.1",
            "Microsoft.AspNetCore.Mvc.ViewFeatures": "2.0.2",
            "Microsoft.AspNetCore.Razor.Runtime": "2.0.1",
            "Microsoft.CodeAnalysis.CSharp": "2.3.1",
            "Microsoft.CodeAnalysis.Razor": "2.0.1",
            "Microsoft.Extensions.Caching.Memory": "2.0.0",
            "Microsoft.Extensions.FileProviders.Composite": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Razor.Extensions/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Razor.Language": "2.0.1",
            "Microsoft.CodeAnalysis.Razor": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.Extensions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.Razor.Extensions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.Razor.ViewCompilation/2.0.2": {
          "dependencies": {
            "Microsoft.AspNetCore.Hosting": "2.0.1",
            "Microsoft.AspNetCore.Mvc.RazorPages": "2.0.2"
          }
        },
        "Microsoft.AspNetCore.Mvc.RazorPages/2.0.2": {
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.Razor": "2.0.2"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.RazorPages.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.RazorPages.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.TagHelpers/2.0.2": {
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.Razor": "2.0.2",
            "Microsoft.AspNetCore.Razor.Runtime": "2.0.1",
            "Microsoft.AspNetCore.Routing.Abstractions": "2.0.1",
            "Microsoft.Extensions.Caching.Memory": "2.0.0",
            "Microsoft.Extensions.FileSystemGlobbing": "2.0.0",
            "Microsoft.Extensions.Primitives": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.TagHelpers.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.TagHelpers.dll": {}
          }
        },
        "Microsoft.AspNetCore.Mvc.ViewFeatures/2.0.2": {
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
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.ViewFeatures.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Mvc.ViewFeatures.dll": {}
          }
        },
        "Microsoft.AspNetCore.NodeServices/2.0.2": {
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.Extensions.Logging.Console": "2.0.0",
            "Newtonsoft.Json": "10.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.NodeServices.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.NodeServices.dll": {}
          }
        },
        "Microsoft.AspNetCore.Owin/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Owin.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Owin.dll": {}
          }
        },
        "Microsoft.AspNetCore.Razor/2.0.1": {
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Razor.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Razor.dll": {}
          }
        },
        "Microsoft.AspNetCore.Razor.Language/2.0.1": {
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Razor.Language.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Razor.Language.dll": {}
          }
        },
        "Microsoft.AspNetCore.Razor.Runtime/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Html.Abstractions": "2.0.0",
            "Microsoft.AspNetCore.Razor": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Razor.Runtime.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Razor.Runtime.dll": {}
          }
        },
        "Microsoft.AspNetCore.ResponseCaching/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.AspNetCore.ResponseCaching.Abstractions": "2.0.1",
            "Microsoft.Extensions.Caching.Memory": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCaching.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCaching.dll": {}
          }
        },
        "Microsoft.AspNetCore.ResponseCaching.Abstractions/2.0.1": {
          "dependencies": {
            "Microsoft.Extensions.Primitives": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCaching.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCaching.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.ResponseCompression/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCompression.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.ResponseCompression.dll": {}
          }
        },
        "Microsoft.AspNetCore.Rewrite/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0",
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Rewrite.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Rewrite.dll": {}
          }
        },
        "Microsoft.AspNetCore.Routing/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.AspNetCore.Routing.Abstractions": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.ObjectPool": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Routing.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Routing.dll": {}
          }
        },
        "Microsoft.AspNetCore.Routing.Abstractions/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Routing.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Routing.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Server.HttpSys/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Authentication.Core": "2.0.1",
            "Microsoft.AspNetCore.Hosting": "2.0.1",
            "Microsoft.Net.Http.Headers": "2.0.1",
            "Microsoft.Win32.Registry": "4.4.0",
            "System.Security.Principal.Windows": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.HttpSys.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.HttpSys.dll": {}
          }
        },
        "Microsoft.AspNetCore.Server.IISIntegration/2.0.1": {
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
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.IISIntegration.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.IISIntegration.dll": {}
          }
        },
        "Microsoft.AspNetCore.Server.Kestrel/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Hosting": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Core": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Transport.Libuv": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.dll": {}
          }
        },
        "Microsoft.AspNetCore.Server.Kestrel.Core/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.WebUtilities": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "Microsoft.Net.Http.Headers": "2.0.1",
            "System.Threading.Tasks.Extensions": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Core.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Core.dll": {}
          }
        },
        "Microsoft.AspNetCore.Server.Kestrel.Https/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Core": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Https.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Https.dll": {}
          }
        },
        "Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Features": "2.0.1",
            "System.Buffers": "4.4.0",
            "System.Numerics.Vectors": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions.dll": {}
          }
        },
        "Microsoft.AspNetCore.Server.Kestrel.Transport.Libuv/2.0.1": {
          "dependencies": {
            "Libuv": "1.10.0",
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Transport.Libuv.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Server.Kestrel.Transport.Libuv.dll": {}
          }
        },
        "Microsoft.AspNetCore.Session/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.DataProtection": "2.0.1",
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.Extensions.Caching.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Session.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.Session.dll": {}
          }
        },
        "Microsoft.AspNetCore.SpaServices/2.0.2": {
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.TagHelpers": "2.0.2",
            "Microsoft.AspNetCore.Mvc.ViewFeatures": "2.0.2",
            "Microsoft.AspNetCore.NodeServices": "2.0.2"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.SpaServices.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.SpaServices.dll": {}
          }
        },
        "Microsoft.AspNetCore.StaticFiles/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.WebEncoders": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.StaticFiles.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.StaticFiles.dll": {}
          }
        },
        "Microsoft.AspNetCore.WebSockets/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.Options": "2.0.0",
            "System.Numerics.Vectors": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.WebSockets.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.WebSockets.dll": {}
          }
        },
        "Microsoft.AspNetCore.WebUtilities/2.0.1": {
          "dependencies": {
            "Microsoft.Net.Http.Headers": "2.0.1",
            "System.Text.Encodings.Web": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.AspNetCore.WebUtilities.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.AspNetCore.WebUtilities.dll": {}
          }
        },
        "Microsoft.Azure.KeyVault/2.3.2": {
          "dependencies": {
            "Microsoft.Azure.KeyVault.WebKey": "2.0.7",
            "Microsoft.Rest.ClientRuntime": "2.3.8",
            "Microsoft.Rest.ClientRuntime.Azure": "3.3.7",
            "NETStandard.Library": "2.0.0",
            "Newtonsoft.Json": "10.0.1",
            "System.Net.Http": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.Azure.KeyVault.dll": {}
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.Azure.KeyVault.dll": {}
          }
        },
        "Microsoft.Azure.KeyVault.WebKey/2.0.7": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "NETStandard.Library": "2.0.0",
            "Newtonsoft.Json": "10.0.1",
            "System.Collections": "4.3.0",
            "System.Collections.Concurrent": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Security.Cryptography.Algorithms": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.Azure.KeyVault.WebKey.dll": {}
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.Azure.KeyVault.WebKey.dll": {}
          }
        },
        "Microsoft.CodeAnalysis.Analyzers/1.1.0": {},
        "Microsoft.CodeAnalysis.Common/2.3.1": {
          "dependencies": {
            "Microsoft.CodeAnalysis.Analyzers": "1.1.0",
            "System.AppContext": "4.3.0",
            "System.Collections": "4.3.0",
            "System.Collections.Concurrent": "4.3.0",
            "System.Collections.Immutable": "1.4.0",
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
            "System.Reflection.Metadata": "1.5.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Runtime.Numerics": "4.3.0",
            "System.Security.Cryptography.Algorithms": "4.3.0",
            "System.Security.Cryptography.Encoding": "4.3.0",
            "System.Security.Cryptography.X509Certificates": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Text.Encoding.CodePages": "4.4.0",
            "System.Text.Encoding.Extensions": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0",
            "System.Threading.Tasks.Parallel": "4.3.0",
            "System.Threading.Thread": "4.3.0",
            "System.ValueTuple": "4.4.0",
            "System.Xml.ReaderWriter": "4.3.0",
            "System.Xml.XDocument": "4.3.0",
            "System.Xml.XPath.XDocument": "4.3.0",
            "System.Xml.XmlDocument": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.dll": {}
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.dll": {}
          }
        },
        "Microsoft.CodeAnalysis.CSharp/2.3.1": {
          "dependencies": {
            "Microsoft.CodeAnalysis.Common": "2.3.1"
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.CSharp.dll": {}
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.CSharp.dll": {}
          }
        },
        "Microsoft.CodeAnalysis.CSharp.Workspaces/2.3.1": {
          "dependencies": {
            "Microsoft.CodeAnalysis.CSharp": "2.3.1",
            "Microsoft.CodeAnalysis.Workspaces.Common": "2.3.1"
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.CSharp.Workspaces.dll": {}
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.CSharp.Workspaces.dll": {}
          }
        },
        "Microsoft.CodeAnalysis.Razor/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Razor.Language": "2.0.1",
            "Microsoft.CodeAnalysis.CSharp": "2.3.1",
            "Microsoft.CodeAnalysis.Common": "2.3.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.CodeAnalysis.Razor.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.CodeAnalysis.Razor.dll": {}
          }
        },
        "Microsoft.CodeAnalysis.Workspaces.Common/2.3.1": {
          "dependencies": {
            "Microsoft.CodeAnalysis.Common": "2.3.1",
            "System.Composition": "1.0.31",
            "System.Diagnostics.Contracts": "4.3.0",
            "System.Linq.Parallel": "4.3.0",
            "System.ObjectModel": "4.3.0",
            "System.Text.RegularExpressions": "4.3.0",
            "System.Threading.Tasks.Parallel": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.Workspaces.dll": {}
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.CodeAnalysis.Workspaces.dll": {}
          }
        },
        "Microsoft.CSharp/4.4.0": {},
        "Microsoft.Data.Edm/5.8.2": {
          "runtime": {
            "lib/netstandard1.1/Microsoft.Data.Edm.dll": {}
          },
          "resources": {
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
          },
          "compile": {
            "lib/netstandard1.1/Microsoft.Data.Edm.dll": {}
          }
        },
        "Microsoft.Data.OData/5.8.2": {
          "dependencies": {
            "Microsoft.Data.Edm": "5.8.2",
            "System.Spatial": "5.8.2"
          },
          "runtime": {
            "lib/netstandard1.1/Microsoft.Data.OData.dll": {}
          },
          "resources": {
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
          },
          "compile": {
            "lib/netstandard1.1/Microsoft.Data.OData.dll": {}
          }
        },
        "Microsoft.Data.Sqlite/2.0.0": {
          "dependencies": {
            "Microsoft.Data.Sqlite.Core": "2.0.0",
            "SQLitePCLRaw.bundle_green": "1.1.7"
          }
        },
        "Microsoft.Data.Sqlite.Core/2.0.0": {
          "dependencies": {
            "SQLitePCLRaw.core": "1.1.7"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Data.Sqlite.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Data.Sqlite.dll": {}
          }
        },
        "Microsoft.DotNet.PlatformAbstractions/2.0.3": {
          "dependencies": {
            "System.AppContext": "4.3.0",
            "System.Collections": "4.3.0",
            "System.IO": "4.3.0",
            "System.IO.FileSystem": "4.3.0",
            "System.Reflection.TypeExtensions": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Runtime.InteropServices.RuntimeInformation": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.DotNet.PlatformAbstractions.dll": {}
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.DotNet.PlatformAbstractions.dll": {}
          }
        },
        "Microsoft.EntityFrameworkCore/2.0.1": {
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
          "runtime": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.dll": {}
          }
        },
        "Microsoft.EntityFrameworkCore.Design/2.0.1": {
          "dependencies": {
            "Microsoft.EntityFrameworkCore.Relational": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Design.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Design.dll": {}
          }
        },
        "Microsoft.EntityFrameworkCore.InMemory/2.0.1": {
          "dependencies": {
            "Microsoft.EntityFrameworkCore": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.InMemory.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.InMemory.dll": {}
          }
        },
        "Microsoft.EntityFrameworkCore.Relational/2.0.1": {
          "dependencies": {
            "Microsoft.CSharp": "4.4.0",
            "Microsoft.EntityFrameworkCore": "2.0.1",
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Relational.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Relational.dll": {}
          }
        },
        "Microsoft.EntityFrameworkCore.Sqlite/2.0.1": {
          "dependencies": {
            "Microsoft.EntityFrameworkCore.Sqlite.Core": "2.0.1",
            "SQLitePCLRaw.bundle_green": "1.1.7"
          }
        },
        "Microsoft.EntityFrameworkCore.Sqlite.Core/2.0.1": {
          "dependencies": {
            "Microsoft.Data.Sqlite.Core": "2.0.0",
            "Microsoft.EntityFrameworkCore.Relational": "2.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Sqlite.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.Sqlite.dll": {}
          }
        },
        "Microsoft.EntityFrameworkCore.SqlServer/2.0.1": {
          "dependencies": {
            "Microsoft.EntityFrameworkCore.Relational": "2.0.1",
            "System.Data.SqlClient": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.SqlServer.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.EntityFrameworkCore.SqlServer.dll": {}
          }
        },
        "Microsoft.EntityFrameworkCore.Tools/2.0.1": {
          "dependencies": {
            "Microsoft.EntityFrameworkCore.Design": "2.0.1"
          }
        },
        "Microsoft.Extensions.Caching.Abstractions/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Primitives": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.Abstractions.dll": {}
          }
        },
        "Microsoft.Extensions.Caching.Memory/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Caching.Abstractions": "2.0.0",
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.Memory.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.Memory.dll": {}
          }
        },
        "Microsoft.Extensions.Caching.Redis/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Caching.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "StackExchange.Redis.StrongName": "1.2.4"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.Redis.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.Redis.dll": {}
          }
        },
        "Microsoft.Extensions.Caching.SqlServer/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Caching.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "System.Data.SqlClient": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.SqlServer.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Caching.SqlServer.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.Abstractions/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Primitives": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Abstractions.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.AzureKeyVault/2.0.0": {
          "dependencies": {
            "Microsoft.Azure.KeyVault": "2.3.2",
            "Microsoft.Extensions.Configuration": "2.0.0",
            "Microsoft.Extensions.Configuration.FileExtensions": "2.0.0",
            "Microsoft.IdentityModel.Clients.ActiveDirectory": "3.14.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.AzureKeyVault.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.AzureKeyVault.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.Binder/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Configuration": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Binder.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Binder.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.CommandLine/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Configuration": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.CommandLine.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.CommandLine.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.EnvironmentVariables/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Configuration": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.EnvironmentVariables.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.EnvironmentVariables.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.FileExtensions/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Configuration": "2.0.0",
            "Microsoft.Extensions.FileProviders.Physical": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.FileExtensions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.FileExtensions.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.Ini/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Configuration": "2.0.0",
            "Microsoft.Extensions.Configuration.FileExtensions": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Ini.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Ini.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.Json/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Configuration": "2.0.0",
            "Microsoft.Extensions.Configuration.FileExtensions": "2.0.0",
            "Newtonsoft.Json": "10.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Json.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Json.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.UserSecrets/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Configuration.Json": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.UserSecrets.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.UserSecrets.dll": {}
          }
        },
        "Microsoft.Extensions.Configuration.Xml/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Configuration": "2.0.0",
            "Microsoft.Extensions.Configuration.FileExtensions": "2.0.0",
            "System.Security.Cryptography.Xml": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Xml.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Configuration.Xml.dll": {}
          }
        },
        "Microsoft.Extensions.DependencyInjection/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.DependencyInjection.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.DependencyInjection.dll": {}
          }
        },
        "Microsoft.Extensions.DependencyInjection.Abstractions/2.0.0": {
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.DependencyInjection.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.DependencyInjection.Abstractions.dll": {}
          }
        },
        "Microsoft.Extensions.DependencyModel/2.0.3": {
          "dependencies": {
            "Microsoft.DotNet.PlatformAbstractions": "2.0.3",
            "Newtonsoft.Json": "10.0.1",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Dynamic.Runtime": "4.3.0",
            "System.Linq": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.6/Microsoft.Extensions.DependencyModel.dll": {}
          },
          "compile": {
            "lib/netstandard1.6/Microsoft.Extensions.DependencyModel.dll": {}
          }
        },
        "Microsoft.Extensions.DiagnosticAdapter/2.0.0": {
          "dependencies": {
            "System.Diagnostics.DiagnosticSource": "4.4.1"
          },
          "runtime": {
            "lib/netcoreapp2.0/Microsoft.Extensions.DiagnosticAdapter.dll": {}
          },
          "compile": {
            "lib/netcoreapp2.0/Microsoft.Extensions.DiagnosticAdapter.dll": {}
          }
        },
        "Microsoft.Extensions.FileProviders.Abstractions/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Primitives": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Abstractions.dll": {}
          }
        },
        "Microsoft.Extensions.FileProviders.Composite/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Composite.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Composite.dll": {}
          }
        },
        "Microsoft.Extensions.FileProviders.Embedded/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Embedded.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Embedded.dll": {}
          }
        },
        "Microsoft.Extensions.FileProviders.Physical/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.FileProviders.Abstractions": "2.0.0",
            "Microsoft.Extensions.FileSystemGlobbing": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Physical.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.FileProviders.Physical.dll": {}
          }
        },
        "Microsoft.Extensions.FileSystemGlobbing/2.0.0": {
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.FileSystemGlobbing.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.FileSystemGlobbing.dll": {}
          }
        },
        "Microsoft.Extensions.Hosting.Abstractions/2.0.1": {
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Hosting.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Hosting.Abstractions.dll": {}
          }
        },
        "Microsoft.Extensions.Identity.Core/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Cryptography.KeyDerivation": "2.0.1",
            "Microsoft.Extensions.Logging": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "System.ComponentModel.Annotations": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Identity.Core.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Identity.Core.dll": {}
          }
        },
        "Microsoft.Extensions.Identity.Stores/2.0.1": {
          "dependencies": {
            "Microsoft.Extensions.Identity.Core": "2.0.1",
            "Microsoft.Extensions.Logging": "2.0.0",
            "System.ComponentModel.Annotations": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Identity.Stores.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Identity.Stores.dll": {}
          }
        },
        "Microsoft.Extensions.Localization/2.0.1": {
          "dependencies": {
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Localization.Abstractions": "2.0.1",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Localization.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Localization.dll": {}
          }
        },
        "Microsoft.Extensions.Localization.Abstractions/2.0.1": {
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Localization.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Localization.Abstractions.dll": {}
          }
        },
        "Microsoft.Extensions.Logging/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.dll": {}
          }
        },
        "Microsoft.Extensions.Logging.Abstractions/2.0.0": {
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Abstractions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Abstractions.dll": {}
          }
        },
        "Microsoft.Extensions.Logging.AzureAppServices/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Configuration.EnvironmentVariables": "2.0.0",
            "Microsoft.Extensions.Configuration.Json": "2.0.0",
            "Microsoft.Extensions.Logging": "2.0.0",
            "Microsoft.Extensions.Logging.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging.Configuration": "2.0.0",
            "System.ValueTuple": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.AzureAppServices.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.AzureAppServices.dll": {}
          }
        },
        "Microsoft.Extensions.Logging.Configuration/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Logging": "2.0.0",
            "Microsoft.Extensions.Options.ConfigurationExtensions": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Configuration.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Configuration.dll": {}
          }
        },
        "Microsoft.Extensions.Logging.Console/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0",
            "Microsoft.Extensions.Logging": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Console.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Console.dll": {}
          }
        },
        "Microsoft.Extensions.Logging.Debug/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Logging": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Debug.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.Debug.dll": {}
          }
        },
        "Microsoft.Extensions.Logging.EventSource/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Logging": "2.0.0",
            "Newtonsoft.Json": "10.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.EventSource.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.EventSource.dll": {}
          }
        },
        "Microsoft.Extensions.Logging.TraceSource/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Logging": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.TraceSource.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Logging.TraceSource.dll": {}
          }
        },
        "Microsoft.Extensions.ObjectPool/2.0.0": {
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.ObjectPool.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.ObjectPool.dll": {}
          }
        },
        "Microsoft.Extensions.Options/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Primitives": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Options.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Options.dll": {}
          }
        },
        "Microsoft.Extensions.Options.ConfigurationExtensions/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.Configuration.Abstractions": "2.0.0",
            "Microsoft.Extensions.Configuration.Binder": "2.0.0",
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Options.ConfigurationExtensions.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Options.ConfigurationExtensions.dll": {}
          }
        },
        "Microsoft.Extensions.PlatformAbstractions/1.1.0": {
          "dependencies": {
            "NETStandard.Library": "2.0.0",
            "System.Reflection.TypeExtensions": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.Extensions.PlatformAbstractions.dll": {}
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.Extensions.PlatformAbstractions.dll": {}
          }
        },
        "Microsoft.Extensions.Primitives/2.0.0": {
          "dependencies": {
            "System.Runtime.CompilerServices.Unsafe": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.Primitives.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.Primitives.dll": {}
          }
        },
        "Microsoft.Extensions.WebEncoders/2.0.0": {
          "dependencies": {
            "Microsoft.Extensions.DependencyInjection.Abstractions": "2.0.0",
            "Microsoft.Extensions.Options": "2.0.0",
            "System.Text.Encodings.Web": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Extensions.WebEncoders.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Extensions.WebEncoders.dll": {}
          }
        },
        "Microsoft.IdentityModel.Clients.ActiveDirectory/3.14.1": {
          "dependencies": {
            "NETStandard.Library": "2.0.0",
            "System.Runtime.Serialization.Json": "4.0.2",
            "System.Runtime.Serialization.Primitives": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.dll": {},
            "lib/netstandard1.3/Microsoft.IdentityModel.Clients.ActiveDirectory.dll": {}
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.IdentityModel.Clients.ActiveDirectory.Platform.dll": {},
            "lib/netstandard1.3/Microsoft.IdentityModel.Clients.ActiveDirectory.dll": {}
          }
        },
        "Microsoft.IdentityModel.Logging/1.1.4": {
          "dependencies": {
            "System.Diagnostics.Tracing": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.IO.FileSystem": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Logging.dll": {}
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Logging.dll": {}
          }
        },
        "Microsoft.IdentityModel.Protocols/2.1.4": {
          "dependencies": {
            "System.Collections.Specialized": "4.3.0",
            "System.Diagnostics.Contracts": "4.3.0",
            "System.IdentityModel.Tokens.Jwt": "5.1.4",
            "System.Net.Http": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Protocols.dll": {}
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Protocols.dll": {}
          }
        },
        "Microsoft.IdentityModel.Protocols.OpenIdConnect/2.1.4": {
          "dependencies": {
            "Microsoft.IdentityModel.Protocols": "2.1.4",
            "System.Dynamic.Runtime": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Protocols.OpenIdConnect.dll": {}
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Protocols.OpenIdConnect.dll": {}
          }
        },
        "Microsoft.IdentityModel.Tokens/5.1.4": {
          "dependencies": {
            "Microsoft.IdentityModel.Logging": "1.1.4",
            "Newtonsoft.Json": "10.0.1",
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
          "runtime": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Tokens.dll": {}
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.IdentityModel.Tokens.dll": {}
          }
        },
        "Microsoft.Net.Http.Headers/2.0.1": {
          "dependencies": {
            "Microsoft.Extensions.Primitives": "2.0.0",
            "System.Buffers": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.Net.Http.Headers.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.Net.Http.Headers.dll": {}
          }
        },
        "Microsoft.NETCore.Targets/1.1.0": {},
        "Microsoft.Rest.ClientRuntime/2.3.8": {
          "dependencies": {
            "NETStandard.Library": "2.0.0",
            "Newtonsoft.Json": "10.0.1"
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.Rest.ClientRuntime.dll": {}
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.Rest.ClientRuntime.dll": {}
          }
        },
        "Microsoft.Rest.ClientRuntime.Azure/3.3.7": {
          "dependencies": {
            "Microsoft.Rest.ClientRuntime": "2.3.8",
            "NETStandard.Library": "2.0.0",
            "Newtonsoft.Json": "10.0.1"
          },
          "runtime": {
            "lib/netstandard1.4/Microsoft.Rest.ClientRuntime.Azure.dll": {}
          },
          "compile": {
            "lib/netstandard1.4/Microsoft.Rest.ClientRuntime.Azure.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.BrowserLink/2.0.1": {
          "dependencies": {
            "Microsoft.AspNetCore.Hosting.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http.Abstractions": "2.0.1",
            "Microsoft.AspNetCore.Http.Extensions": "2.0.1",
            "Microsoft.Extensions.FileProviders.Physical": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.BrowserLink.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.BrowserLink.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGeneration/2.0.2": {
          "dependencies": {
            "Microsoft.Extensions.DependencyInjection": "2.0.0",
            "Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore": "2.0.2"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGeneration.Contracts/2.0.2": {
          "dependencies": {
            "Newtonsoft.Json": "10.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Contracts.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Contracts.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGeneration.Core/2.0.2": {
          "dependencies": {
            "Microsoft.Extensions.DependencyInjection": "2.0.0",
            "Microsoft.VisualStudio.Web.CodeGeneration.Templating": "2.0.2",
            "Newtonsoft.Json": "10.0.1"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Core.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Core.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGeneration.Design/2.0.2": {
          "dependencies": {
            "Microsoft.VisualStudio.Web.CodeGenerators.Mvc": "2.0.2"
          },
          "runtime": {
            "lib/netcoreapp2.0/dotnet-aspnet-codegenerator-design.dll": {}
          },
          "compile": {
            "lib/netcoreapp2.0/dotnet-aspnet-codegenerator-design.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore/2.0.2": {
          "dependencies": {
            "Microsoft.VisualStudio.Web.CodeGeneration.Core": "2.0.2"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGeneration.Templating/2.0.2": {
          "dependencies": {
            "Microsoft.AspNetCore.Mvc.Razor.Extensions": "2.0.1",
            "Microsoft.CodeAnalysis.CSharp": "2.3.1",
            "Microsoft.VisualStudio.Web.CodeGeneration.Utils": "2.0.2"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Templating.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Templating.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGeneration.Utils/2.0.2": {
          "dependencies": {
            "Microsoft.CodeAnalysis.CSharp.Workspaces": "2.3.1",
            "Microsoft.VisualStudio.Web.CodeGeneration.Contracts": "2.0.2",
            "Newtonsoft.Json": "10.0.1",
            "NuGet.Frameworks": "4.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Utils.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGeneration.Utils.dll": {}
          }
        },
        "Microsoft.VisualStudio.Web.CodeGenerators.Mvc/2.0.2": {
          "dependencies": {
            "Microsoft.VisualStudio.Web.CodeGeneration": "2.0.2"
          },
          "runtime": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGenerators.Mvc.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/Microsoft.VisualStudio.Web.CodeGenerators.Mvc.dll": {}
          }
        },
        "Microsoft.Win32.Primitives/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          }
        },
        "Microsoft.Win32.Registry/4.4.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "System.Security.AccessControl": "4.4.0",
            "System.Security.Principal.Windows": "4.4.0"
          },
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          },
          "compile": {
            "ref/netstandard2.0/Microsoft.Win32.Registry.dll": {}
          }
        },
        "Newtonsoft.Json/10.0.1": {
          "dependencies": {
            "Microsoft.CSharp": "4.4.0",
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
          "runtime": {
            "lib/netstandard1.3/Newtonsoft.Json.dll": {}
          },
          "compile": {
            "lib/netstandard1.3/Newtonsoft.Json.dll": {}
          }
        },
        "Newtonsoft.Json.Bson/1.0.1": {
          "dependencies": {
            "NETStandard.Library": "2.0.0",
            "Newtonsoft.Json": "10.0.1"
          },
          "runtime": {
            "lib/netstandard1.3/Newtonsoft.Json.Bson.dll": {}
          },
          "compile": {
            "lib/netstandard1.3/Newtonsoft.Json.Bson.dll": {}
          }
        },
        "NuGet.Frameworks/4.0.0": {
          "dependencies": {
            "NETStandard.Library": "2.0.0"
          },
          "runtime": {
            "lib/netstandard1.3/NuGet.Frameworks.dll": {}
          },
          "compile": {
            "lib/netstandard1.3/NuGet.Frameworks.dll": {}
          }
        },
        "popper.js/1.12.9": {},
        "Remotion.Linq/2.1.1": {
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Linq.Expressions": "4.3.0",
            "System.Linq.Queryable": "4.0.1",
            "System.ObjectModel": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Extensions": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Threading": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.0/Remotion.Linq.dll": {}
          },
          "compile": {
            "lib/netstandard1.0/Remotion.Linq.dll": {}
          }
        },
        "runtime.debian.8-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "runtimeTargets": {
            "runtime/debian.8-x64/native/_._": {
              "rid": "debian.8-x64",
              "assetType": "native"
            }
          }
        },
        "runtime.fedora.23-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "runtimeTargets": {
            "runtime/fedora.23-x64/native/_._": {
              "rid": "fedora.23-x64",
              "assetType": "native"
            }
          }
        },
        "runtime.fedora.24-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "runtimeTargets": {
            "runtime/fedora.24-x64/native/_._": {
              "rid": "fedora.24-x64",
              "assetType": "native"
            }
          }
        },
        "runtime.native.System/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0"
          }
        },
        "runtime.native.System.Data.SqlClient.sni/4.4.0": {
          "dependencies": {
            "runtime.win-arm64.runtime.native.System.Data.SqlClient.sni": "4.4.0",
            "runtime.win-x64.runtime.native.System.Data.SqlClient.sni": "4.4.0",
            "runtime.win-x86.runtime.native.System.Data.SqlClient.sni": "4.4.0"
          }
        },
        "runtime.native.System.IO.Compression/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0"
          }
        },
        "runtime.native.System.Net.Http/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0"
          }
        },
        "runtime.native.System.Net.Security/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0"
          }
        },
        "runtime.native.System.Security.Cryptography.Apple/4.3.0": {
          "dependencies": {
            "runtime.osx.10.10-x64.runtime.native.System.Security.Cryptography.Apple": "4.3.0"
          }
        },
        "runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
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
          }
        },
        "runtime.opensuse.13.2-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "runtimeTargets": {
            "runtime/opensuse.13.2-x64/native/_._": {
              "rid": "opensuse.13.2-x64",
              "assetType": "native"
            }
          }
        },
        "runtime.opensuse.42.1-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "runtimeTargets": {
            "runtime/opensuse.42.1-x64/native/_._": {
              "rid": "opensuse.42.1-x64",
              "assetType": "native"
            }
          }
        },
        "runtime.osx.10.10-x64.runtime.native.System.Security.Cryptography.Apple/4.3.0": {
          "runtimeTargets": {
            "runtime/osx.10.10-x64/native/_._": {
              "rid": "osx.10.10-x64",
              "assetType": "native"
            }
          }
        },
        "runtime.osx.10.10-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "runtimeTargets": {
            "runtime/osx.10.10-x64/native/_._": {
              "rid": "osx.10.10-x64",
              "assetType": "native"
            }
          }
        },
        "runtime.rhel.7-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "runtimeTargets": {
            "runtime/rhel.7-x64/native/_._": {
              "rid": "rhel.7-x64",
              "assetType": "native"
            }
          }
        },
        "runtime.ubuntu.14.04-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "runtimeTargets": {
            "runtime/ubuntu.14.04-x64/native/_._": {
              "rid": "ubuntu.14.04-x64",
              "assetType": "native"
            }
          }
        },
        "runtime.ubuntu.16.04-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "runtimeTargets": {
            "runtime/ubuntu.16.04-x64/native/_._": {
              "rid": "ubuntu.16.04-x64",
              "assetType": "native"
            }
          }
        },
        "runtime.ubuntu.16.10-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
          "runtimeTargets": {
            "runtime/ubuntu.16.10-x64/native/_._": {
              "rid": "ubuntu.16.10-x64",
              "assetType": "native"
            }
          }
        },
        "runtime.win-arm64.runtime.native.System.Data.SqlClient.sni/4.4.0": {
          "runtimeTargets": {
            "runtimes/win-arm64/native/sni.dll": {
              "rid": "win-arm64",
              "assetType": "native"
            }
          }
        },
        "runtime.win-x64.runtime.native.System.Data.SqlClient.sni/4.4.0": {
          "runtimeTargets": {
            "runtimes/win-x64/native/sni.dll": {
              "rid": "win-x64",
              "assetType": "native"
            }
          }
        },
        "runtime.win-x86.runtime.native.System.Data.SqlClient.sni/4.4.0": {
          "runtimeTargets": {
            "runtimes/win-x86/native/sni.dll": {
              "rid": "win-x86",
              "assetType": "native"
            }
          }
        },
        "SQLitePCLRaw.bundle_green/1.1.7": {
          "dependencies": {
            "SQLitePCLRaw.core": "1.1.7",
            "SQLitePCLRaw.lib.e_sqlite3.linux": "1.1.7",
            "SQLitePCLRaw.lib.e_sqlite3.osx": "1.1.7",
            "SQLitePCLRaw.lib.e_sqlite3.v110_xp": "1.1.7",
            "SQLitePCLRaw.provider.e_sqlite3.netstandard11": "1.1.7"
          },
          "runtime": {
            "lib/netcoreapp/SQLitePCLRaw.batteries_green.dll": {},
            "lib/netcoreapp/SQLitePCLRaw.batteries_v2.dll": {}
          },
          "compile": {
            "lib/netcoreapp/SQLitePCLRaw.batteries_green.dll": {},
            "lib/netcoreapp/SQLitePCLRaw.batteries_v2.dll": {}
          }
        },
        "SQLitePCLRaw.core/1.1.7": {
          "dependencies": {
            "NETStandard.Library": "2.0.0"
          },
          "runtime": {
            "lib/netstandard1.1/SQLitePCLRaw.core.dll": {}
          },
          "compile": {
            "lib/netstandard1.1/SQLitePCLRaw.core.dll": {}
          }
        },
        "SQLitePCLRaw.lib.e_sqlite3.linux/1.1.7": {
          "runtimeTargets": {
            "runtimes/linux-x64/native/libe_sqlite3.so": {
              "rid": "linux-x64",
              "assetType": "native"
            },
            "runtimes/linux-x86/native/libe_sqlite3.so": {
              "rid": "linux-x86",
              "assetType": "native"
            }
          }
        },
        "SQLitePCLRaw.lib.e_sqlite3.osx/1.1.7": {
          "runtimeTargets": {
            "runtimes/osx-x64/native/libe_sqlite3.dylib": {
              "rid": "osx-x64",
              "assetType": "native"
            }
          }
        },
        "SQLitePCLRaw.lib.e_sqlite3.v110_xp/1.1.7": {
          "runtimeTargets": {
            "runtimes/win7-x64/native/e_sqlite3.dll": {
              "rid": "win7-x64",
              "assetType": "native"
            },
            "runtimes/win7-x86/native/e_sqlite3.dll": {
              "rid": "win7-x86",
              "assetType": "native"
            }
          }
        },
        "SQLitePCLRaw.provider.e_sqlite3.netstandard11/1.1.7": {
          "dependencies": {
            "NETStandard.Library": "2.0.0",
            "SQLitePCLRaw.core": "1.1.7"
          },
          "runtime": {
            "lib/netstandard1.1/SQLitePCLRaw.provider.e_sqlite3.dll": {}
          },
          "compile": {
            "lib/netstandard1.1/SQLitePCLRaw.provider.e_sqlite3.dll": {}
          }
        },
        "StackExchange.Redis.StrongName/1.2.4": {
          "dependencies": {
            "NETStandard.Library": "2.0.0",
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
          "runtime": {
            "lib/netstandard1.5/StackExchange.Redis.StrongName.dll": {}
          },
          "compile": {
            "lib/netstandard1.5/StackExchange.Redis.StrongName.dll": {}
          }
        },
        "System.AppContext/4.3.0": {
          "dependencies": {
            "System.Runtime": "4.3.0"
          }
        },
        "System.Buffers/4.4.0": {},
        "System.Collections/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Collections.Concurrent/4.3.0": {
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
          }
        },
        "System.Collections.Immutable/1.4.0": {},
        "System.Collections.NonGeneric/4.3.0": {
          "dependencies": {
            "System.Diagnostics.Debug": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Threading": "4.3.0"
          }
        },
        "System.Collections.Specialized/4.3.0": {
          "dependencies": {
            "System.Collections.NonGeneric": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Globalization.Extensions": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Threading": "4.3.0"
          }
        },
        "System.ComponentModel/4.3.0": {
          "dependencies": {
            "System.Runtime": "4.3.0"
          }
        },
        "System.ComponentModel.Annotations/4.4.0": {},
        "System.ComponentModel.Primitives/4.3.0": {
          "dependencies": {
            "System.ComponentModel": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.ComponentModel.TypeConverter/4.3.0": {
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
          }
        },
        "System.Composition/1.0.31": {
          "dependencies": {
            "System.Composition.AttributedModel": "1.0.31",
            "System.Composition.Convention": "1.0.31",
            "System.Composition.Hosting": "1.0.31",
            "System.Composition.Runtime": "1.0.31",
            "System.Composition.TypedParts": "1.0.31"
          }
        },
        "System.Composition.AttributedModel/1.0.31": {
          "dependencies": {
            "System.Reflection": "4.3.0",
            "System.Runtime": "4.3.0"
          },
          "runtime": {
            "lib/netstandard1.0/System.Composition.AttributedModel.dll": {}
          },
          "compile": {
            "lib/netstandard1.0/System.Composition.AttributedModel.dll": {}
          }
        },
        "System.Composition.Convention/1.0.31": {
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
          "runtime": {
            "lib/netstandard1.0/System.Composition.Convention.dll": {}
          },
          "compile": {
            "lib/netstandard1.0/System.Composition.Convention.dll": {}
          }
        },
        "System.Composition.Hosting/1.0.31": {
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
          "runtime": {
            "lib/netstandard1.0/System.Composition.Hosting.dll": {}
          },
          "compile": {
            "lib/netstandard1.0/System.Composition.Hosting.dll": {}
          }
        },
        "System.Composition.Runtime/1.0.31": {
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
          "runtime": {
            "lib/netstandard1.0/System.Composition.Runtime.dll": {}
          },
          "compile": {
            "lib/netstandard1.0/System.Composition.Runtime.dll": {}
          }
        },
        "System.Composition.TypedParts/1.0.31": {
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
          "runtime": {
            "lib/netstandard1.0/System.Composition.TypedParts.dll": {}
          },
          "compile": {
            "lib/netstandard1.0/System.Composition.TypedParts.dll": {}
          }
        },
        "System.Console/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.IO": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Text.Encoding": "4.3.0"
          }
        },
        "System.Data.SqlClient/4.4.0": {
          "dependencies": {
            "Microsoft.Win32.Registry": "4.4.0",
            "System.Security.Principal.Windows": "4.4.0",
            "System.Text.Encoding.CodePages": "4.4.0",
            "runtime.native.System.Data.SqlClient.sni": "4.4.0"
          },
          "runtime": {
            "lib/netstandard2.0/System.Data.SqlClient.dll": {}
          },
          "runtimeTargets": {
            "runtimes/unix/lib/netstandard2.0/System.Data.SqlClient.dll": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtimes/win/lib/netstandard2.0/System.Data.SqlClient.dll": {
              "rid": "win",
              "assetType": "runtime"
            }
          },
          "compile": {
            "ref/netstandard2.0/System.Data.SqlClient.dll": {}
          }
        },
        "System.Diagnostics.Contracts/4.3.0": {
          "dependencies": {
            "System.Runtime": "4.3.0"
          }
        },
        "System.Diagnostics.Debug/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Diagnostics.DiagnosticSource/4.4.1": {},
        "System.Diagnostics.FileVersionInfo/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.IO.FileSystem": "4.3.0",
            "System.IO.FileSystem.Primitives": "4.3.0",
            "System.Reflection.Metadata": "1.5.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0"
          },
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          }
        },
        "System.Diagnostics.StackTrace/4.3.0": {
          "dependencies": {
            "System.IO.FileSystem": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Metadata": "1.5.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Diagnostics.Tools/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Diagnostics.Tracing/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Dynamic.Runtime/4.3.0": {
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
          }
        },
        "System.Globalization/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Globalization.Calendars/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Globalization": "4.3.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Globalization.Extensions/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "System.Globalization": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0"
          },
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          }
        },
        "System.IdentityModel.Tokens.Jwt/5.1.4": {
          "dependencies": {
            "Microsoft.IdentityModel.Tokens": "5.1.4"
          },
          "runtime": {
            "lib/netstandard1.4/System.IdentityModel.Tokens.Jwt.dll": {}
          },
          "compile": {
            "lib/netstandard1.4/System.IdentityModel.Tokens.Jwt.dll": {}
          }
        },
        "System.Interactive.Async/3.1.1": {
          "dependencies": {
            "NETStandard.Library": "2.0.0"
          },
          "runtime": {
            "lib/netstandard1.3/System.Interactive.Async.dll": {}
          },
          "compile": {
            "lib/netstandard1.3/System.Interactive.Async.dll": {}
          }
        },
        "System.IO/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Threading.Tasks": "4.3.0"
          }
        },
        "System.IO.Compression/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "System.Buffers": "4.4.0",
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
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          }
        },
        "System.IO.FileSystem/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.IO": "4.3.0",
            "System.IO.FileSystem.Primitives": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Handles": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Threading.Tasks": "4.3.0"
          }
        },
        "System.IO.FileSystem.Primitives/4.3.0": {
          "dependencies": {
            "System.Runtime": "4.3.0"
          }
        },
        "System.Linq/4.3.0": {
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0"
          }
        },
        "System.Linq.Expressions/4.3.0": {
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
          }
        },
        "System.Linq.Parallel/4.3.0": {
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
          }
        },
        "System.Linq.Queryable/4.0.1": {
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Linq.Expressions": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Extensions": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Net.Http/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Diagnostics.DiagnosticSource": "4.4.1",
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
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          }
        },
        "System.Net.NameResolution/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "System.Collections": "4.3.0",
            "System.Diagnostics.Tracing": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.Net.Primitives": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.Handles": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Security.Principal.Windows": "4.4.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0",
            "runtime.native.System": "4.3.0"
          },
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          }
        },
        "System.Net.Primitives/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Handles": "4.3.0"
          }
        },
        "System.Net.Security/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
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
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          }
        },
        "System.Net.Sockets/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.IO": "4.3.0",
            "System.Net.Primitives": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Threading.Tasks": "4.3.0"
          }
        },
        "System.Numerics.Vectors/4.4.0": {},
        "System.ObjectModel/4.3.0": {
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Threading": "4.3.0"
          }
        },
        "System.Private.DataContractSerialization/4.1.1": {
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Collections.Concurrent": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Emit.ILGeneration": "4.3.0",
            "System.Reflection.Emit.Lightweight": "4.3.0",
            "System.Reflection.Extensions": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Reflection.TypeExtensions": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Runtime.Serialization.Primitives": "4.3.0",
            "System.Text.Encoding": "4.3.0",
            "System.Text.Encoding.Extensions": "4.3.0",
            "System.Text.RegularExpressions": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0",
            "System.Xml.ReaderWriter": "4.3.0",
            "System.Xml.XmlDocument": "4.3.0",
            "System.Xml.XmlSerializer": "4.0.11"
          }
        },
        "System.Reflection/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.IO": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Reflection.Emit/4.3.0": {
          "dependencies": {
            "System.IO": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Emit.ILGeneration": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Reflection.Emit.ILGeneration/4.3.0": {
          "dependencies": {
            "System.Reflection": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Reflection.Emit.Lightweight/4.3.0": {
          "dependencies": {
            "System.Reflection": "4.3.0",
            "System.Reflection.Emit.ILGeneration": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Reflection.Extensions/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Reflection": "4.3.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Reflection.Metadata/1.5.0": {},
        "System.Reflection.Primitives/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Reflection.TypeExtensions/4.3.0": {
          "dependencies": {
            "System.Reflection": "4.3.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Resources.ResourceManager/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Globalization": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Runtime/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0"
          }
        },
        "System.Runtime.CompilerServices.Unsafe/4.4.0": {
          "runtime": {
            "lib/netstandard2.0/System.Runtime.CompilerServices.Unsafe.dll": {}
          },
          "compile": {
            "ref/netstandard2.0/System.Runtime.CompilerServices.Unsafe.dll": {}
          }
        },
        "System.Runtime.Extensions/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Runtime.Handles/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Runtime.InteropServices/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Handles": "4.3.0"
          }
        },
        "System.Runtime.InteropServices.RuntimeInformation/4.3.0": {
          "dependencies": {
            "System.Reflection": "4.3.0",
            "System.Reflection.Extensions": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.InteropServices": "4.3.0",
            "System.Threading": "4.3.0",
            "runtime.native.System": "4.3.0"
          },
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          }
        },
        "System.Runtime.Numerics/4.3.0": {
          "dependencies": {
            "System.Globalization": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0"
          }
        },
        "System.Runtime.Serialization.Formatters/4.3.0": {
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Serialization.Primitives": "4.3.0"
          }
        },
        "System.Runtime.Serialization.Json/4.0.2": {
          "dependencies": {
            "System.IO": "4.3.0",
            "System.Private.DataContractSerialization": "4.1.1",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Runtime.Serialization.Primitives/4.3.0": {
          "dependencies": {
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Security.AccessControl/4.4.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "System.Security.Principal.Windows": "4.4.0"
          },
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          },
          "compile": {
            "ref/netstandard2.0/System.Security.AccessControl.dll": {}
          }
        },
        "System.Security.Claims/4.3.0": {
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Security.Principal": "4.3.0"
          }
        },
        "System.Security.Cryptography.Algorithms/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
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
          "runtimeTargets": {
            "runtime/osx/lib/_._": {
              "rid": "osx",
              "assetType": "runtime"
            },
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          }
        },
        "System.Security.Cryptography.Cng/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
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
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          }
        },
        "System.Security.Cryptography.Csp/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
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
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          }
        },
        "System.Security.Cryptography.Encoding/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
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
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          }
        },
        "System.Security.Cryptography.OpenSsl/4.3.0": {
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
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            }
          }
        },
        "System.Security.Cryptography.Primitives/4.3.0": {
          "dependencies": {
            "System.Diagnostics.Debug": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0"
          }
        },
        "System.Security.Cryptography.X509Certificates/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
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
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          }
        },
        "System.Security.Cryptography.Xml/4.4.0": {
          "runtime": {
            "lib/netstandard2.0/System.Security.Cryptography.Xml.dll": {}
          },
          "compile": {
            "ref/netstandard2.0/System.Security.Cryptography.Xml.dll": {}
          }
        },
        "System.Security.Principal/4.3.0": {
          "dependencies": {
            "System.Runtime": "4.3.0"
          }
        },
        "System.Security.Principal.Windows/4.4.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0"
          },
          "runtimeTargets": {
            "runtime/unix/lib/_._": {
              "rid": "unix",
              "assetType": "runtime"
            },
            "runtime/win/lib/_._": {
              "rid": "win",
              "assetType": "runtime"
            }
          },
          "compile": {
            "ref/netstandard2.0/System.Security.Principal.Windows.dll": {}
          }
        },
        "System.Spatial/5.8.2": {
          "runtime": {
            "lib/netstandard1.1/System.Spatial.dll": {}
          },
          "resources": {
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
          },
          "compile": {
            "lib/netstandard1.1/System.Spatial.dll": {}
          }
        },
        "System.Text.Encoding/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Text.Encoding.CodePages/4.4.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0"
          },
          "runtime": {
            "lib/netstandard2.0/System.Text.Encoding.CodePages.dll": {}
          },
          "runtimeTargets": {
            "runtimes/win/lib/netcoreapp2.0/System.Text.Encoding.CodePages.dll": {
              "rid": "win",
              "assetType": "runtime"
            }
          }
        },
        "System.Text.Encoding.Extensions/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0",
            "System.Text.Encoding": "4.3.0"
          }
        },
        "System.Text.Encodings.Web/4.4.0": {
          "runtime": {
            "lib/netstandard2.0/System.Text.Encodings.Web.dll": {}
          },
          "compile": {
            "lib/netstandard2.0/System.Text.Encodings.Web.dll": {}
          }
        },
        "System.Text.RegularExpressions/4.3.0": {
          "dependencies": {
            "System.Runtime": "4.3.0"
          }
        },
        "System.Threading/4.3.0": {
          "dependencies": {
            "System.Runtime": "4.3.0",
            "System.Threading.Tasks": "4.3.0"
          }
        },
        "System.Threading.Tasks/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.Threading.Tasks.Extensions/4.4.0": {},
        "System.Threading.Tasks.Parallel/4.3.0": {
          "dependencies": {
            "System.Collections.Concurrent": "4.3.0",
            "System.Diagnostics.Debug": "4.3.0",
            "System.Diagnostics.Tracing": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Threading.Tasks": "4.3.0"
          }
        },
        "System.Threading.Thread/4.3.0": {
          "dependencies": {
            "System.Runtime": "4.3.0"
          }
        },
        "System.Threading.ThreadPool/4.3.0": {
          "dependencies": {
            "System.Runtime": "4.3.0",
            "System.Runtime.Handles": "4.3.0"
          }
        },
        "System.Threading.Timer/4.3.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0",
            "Microsoft.NETCore.Targets": "1.1.0",
            "System.Runtime": "4.3.0"
          }
        },
        "System.ValueTuple/4.4.0": {},
        "System.Xml.ReaderWriter/4.3.0": {
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
            "System.Threading.Tasks.Extensions": "4.4.0"
          }
        },
        "System.Xml.XDocument/4.3.0": {
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
          }
        },
        "System.Xml.XmlDocument/4.3.0": {
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
          }
        },
        "System.Xml.XmlSerializer/4.0.11": {
          "dependencies": {
            "System.Collections": "4.3.0",
            "System.Globalization": "4.3.0",
            "System.IO": "4.3.0",
            "System.Linq": "4.3.0",
            "System.Reflection": "4.3.0",
            "System.Reflection.Emit": "4.3.0",
            "System.Reflection.Emit.ILGeneration": "4.3.0",
            "System.Reflection.Extensions": "4.3.0",
            "System.Reflection.Primitives": "4.3.0",
            "System.Reflection.TypeExtensions": "4.3.0",
            "System.Resources.ResourceManager": "4.3.0",
            "System.Runtime": "4.3.0",
            "System.Runtime.Extensions": "4.3.0",
            "System.Text.RegularExpressions": "4.3.0",
            "System.Threading": "4.3.0",
            "System.Xml.ReaderWriter": "4.3.0",
            "System.Xml.XmlDocument": "4.3.0"
          }
        },
        "System.Xml.XPath/4.3.0": {
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
          }
        },
        "System.Xml.XPath.XDocument/4.3.0": {
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
          }
        },
        "WindowsAzure.Storage/8.1.4": {
          "dependencies": {
            "Microsoft.Data.OData": "5.8.2",
            "NETStandard.Library": "2.0.0",
            "Newtonsoft.Json": "10.0.1",
            "System.Spatial": "5.8.2"
          },
          "runtime": {
            "lib/netstandard1.3/Microsoft.WindowsAzure.Storage.dll": {}
          },
          "compile": {
            "lib/netstandard1.3/Microsoft.WindowsAzure.Storage.dll": {}
          }
        },
        "Microsoft.NETCore.App/2.0.0": {
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
          "compileOnly": true
        },
        "Microsoft.NETCore.DotNetAppHost/2.0.0": {
          "compileOnly": true
        },
        "Microsoft.NETCore.DotNetHostPolicy/2.0.0": {
          "dependencies": {
            "Microsoft.NETCore.DotNetHostResolver": "2.0.0"
          },
          "compileOnly": true
        },
        "Microsoft.NETCore.DotNetHostResolver/2.0.0": {
          "dependencies": {
            "Microsoft.NETCore.DotNetAppHost": "2.0.0"
          },
          "compileOnly": true
        },
        "Microsoft.NETCore.Platforms/2.0.0": {
          "compileOnly": true
        },
        "NETStandard.Library/2.0.0": {
          "dependencies": {
            "Microsoft.NETCore.Platforms": "2.0.0"
          },
          "compileOnly": true
        }
      }
    },
    "libraries": {
      "DevelopmentCode/1.0.0": {
        "type": "project",
        "serviceable": false,
        "sha512": ""
      },
      "bootstrap/4.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-aW3kJMmptC2GD4+hIa3x3fSrPF4VkrWQ2PRBEJg+o7lMRMi7u4UW9igY/GP02/wrIpH/CusL+mQIM42YhvA3XQ==",
        "path": "bootstrap/4.0.0",
        "hashPath": "bootstrap.4.0.0.nupkg.sha512"
      },
      "jQuery/3.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-xFfntV19HzCtKdJWOp/XT9PUY3SslokTDDLFJZdBug36j1XVhw1+vPQ/n7Gd5y+jdpesn5B1m1yn1qIUq57jlA==",
        "path": "jquery/3.0.0",
        "hashPath": "jquery.3.0.0.nupkg.sha512"
      },
      "Libuv/1.10.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-GsCf4q+eyaI49rCPlgYxdxa1SQCysXFFdSJWdstrwxytg4+VPYLYrXD4AT2rjHVJ+UF7SSWX9CapWEYaU4ejVQ==",
        "path": "libuv/1.10.0",
        "hashPath": "libuv.1.10.0.nupkg.sha512"
      },
      "Microsoft.ApplicationInsights/2.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-4dX/zu3Psz9oM3ErU64xfOHuSxOwMxN6q5RabSkeYbX42Yn6dR/kDToqjs+txCRjrfHUxyYjfeJHu+MbCfvAsg==",
        "path": "microsoft.applicationinsights/2.4.0",
        "hashPath": "microsoft.applicationinsights.2.4.0.nupkg.sha512"
      },
      "Microsoft.ApplicationInsights.AspNetCore/2.1.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-kiGmzl9Cav34dF7AHVMoJxdJJQEeLB8KZGNwX1LjImG9iem5hGk4DkHpW7/m9Nh3DrL8IKSL3mqQo+IPqWfMRQ==",
        "path": "microsoft.applicationinsights.aspnetcore/2.1.1",
        "hashPath": "microsoft.applicationinsights.aspnetcore.2.1.1.nupkg.sha512"
      },
      "Microsoft.ApplicationInsights.DependencyCollector/2.4.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-RWxdX90MY6tNF8S5lwRvJcHiBMIWwVLCxd4TGIEl3X0yAKaolY2vs4zTCvyCIVkEAMs1aInTgWkYwOjzYvAHWw==",
        "path": "microsoft.applicationinsights.dependencycollector/2.4.1",
        "hashPath": "microsoft.applicationinsights.dependencycollector.2.4.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-12IBPqyTHIAEReaV/JhHsRImbpASKs4SokhHTl/yn5Q6+IHZQtCpOeEaPJrThVgjtnljReGqUlsnFXpx6IQK6g==",
        "path": "microsoft.aspnetcore/2.0.1",
        "hashPath": "microsoft.aspnetcore.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.All/2.0.5": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-0A+EnH/RT2syj9NaTh73wf90/d4Vs8p5nE8m9hoZUk2zWO4PIB7/G0RyiWkNSS/jmhcH9de3M6pfXWVj8BrocQ==",
        "path": "microsoft.aspnetcore.all/2.0.5",
        "hashPath": "microsoft.aspnetcore.all.2.0.5.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Antiforgery/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-WJdyrhYlggFY5VfFCvrcfPjc5zp3TiwbldFeDZ0xhRESEnT0icus8rq86Qyc82gMb8YNtOBGkvOv6rfXSKhFwA==",
        "path": "microsoft.aspnetcore.antiforgery/2.0.1",
        "hashPath": "microsoft.aspnetcore.antiforgery.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.ApplicationInsights.HostingStartup/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-nf2/CJ5O27o0oLM9vaArF1SBqM9GLEH0YL+oTmHAnfOH7wyXb63wRPxly3zJNee5k53M47K7BPYrpZIDaP6IyA==",
        "path": "microsoft.aspnetcore.applicationinsights.hostingstartup/2.0.1",
        "hashPath": "microsoft.aspnetcore.applicationinsights.hostingstartup.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Authentication/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-DD+8BB3eBB+l7oqloFZLKv+mrWvcHyhiW3qrqg0pC8Qv717rJZd3iKULgwEs8i0GBupn/Qn0BGK+ohy1OBevIw==",
        "path": "microsoft.aspnetcore.authentication/2.0.1",
        "hashPath": "microsoft.aspnetcore.authentication.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Authentication.Abstractions/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-7PHMl0nVjaYCrypBSsS2MYZmmOm8UqJmkFRuGzfcEpkYKT/2TjEZ8z2F0QBkU7YOfDmeupanrD5vcnJvupdWJg==",
        "path": "microsoft.aspnetcore.authentication.abstractions/2.0.1",
        "hashPath": "microsoft.aspnetcore.authentication.abstractions.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Authentication.Cookies/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-4Wsh6hfTDK9bIiNN3PS3HrZKZkv33L07qq1FqY+hIS5pYSdf7lZVjJobjIQgTTIO16e4Z+5afRbzcVXogIriWA==",
        "path": "microsoft.aspnetcore.authentication.cookies/2.0.1",
        "hashPath": "microsoft.aspnetcore.authentication.cookies.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Authentication.Core/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-iYr/rnoafq+pl9p4O+6GitU1iXh4FJYFsRt6oi1fcITWy7FHy5eA4N7T5ypNImsyY/MFTiIpH0g7XXUeDUVgww==",
        "path": "microsoft.aspnetcore.authentication.core/2.0.1",
        "hashPath": "microsoft.aspnetcore.authentication.core.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Authentication.Facebook/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-TPKzhxEb1KevANRtJ2ph5bM7/Y209iOnC25RUGA8OwtLHRw0A/K1tEebbbfRXOrDnOujEBkbhdcoChOK2YOHbQ==",
        "path": "microsoft.aspnetcore.authentication.facebook/2.0.1",
        "hashPath": "microsoft.aspnetcore.authentication.facebook.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Authentication.Google/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-VlvpEJLbLIcXtHFzV8WI4OaivKlQ9mjX+sxRv97QipRTnOLPVZEM64o1er4saxcaoatv0WhJpkC7M8OnL1trnA==",
        "path": "microsoft.aspnetcore.authentication.google/2.0.1",
        "hashPath": "microsoft.aspnetcore.authentication.google.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Authentication.JwtBearer/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-GH1qVsm6b0JqWnlhnVKRl6JOux6t52KhjHkMV3gjEcRe0Rg6mOPjQh/TrIZuxpktfgGp8j4DYBOaMn+jjOL1wA==",
        "path": "microsoft.aspnetcore.authentication.jwtbearer/2.0.1",
        "hashPath": "microsoft.aspnetcore.authentication.jwtbearer.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Authentication.MicrosoftAccount/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-vzyRuJpQs+/s0tP9Znql3DrEGP4pNJdh69oITu3gfkh0nTVUUD/KQsBQmHk9CF350HMjoBRyFkU/CbIu5kns+g==",
        "path": "microsoft.aspnetcore.authentication.microsoftaccount/2.0.1",
        "hashPath": "microsoft.aspnetcore.authentication.microsoftaccount.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Authentication.OAuth/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-GpPv8ojFzn3LjD6Q6aCDE8Q382ug4D7fVwjnGyZwEESLNeg6r3w/zffAN18smjKznJuTTUcsZS4lYWDmbsFoGQ==",
        "path": "microsoft.aspnetcore.authentication.oauth/2.0.1",
        "hashPath": "microsoft.aspnetcore.authentication.oauth.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Authentication.OpenIdConnect/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-kN8wCKq1T4nV9V7G91eeHjD6d21x9nXVIcIDNXUyiN6AOZK1ow2qgaLJkUkwobFH+MU3QrU3U764OkwtknWZmQ==",
        "path": "microsoft.aspnetcore.authentication.openidconnect/2.0.1",
        "hashPath": "microsoft.aspnetcore.authentication.openidconnect.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Authentication.Twitter/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-/xHqTp7vRmClyi+AC61ttAuB11Yc/Igul73vKDfe92WyfdDp6ZXe8LsiZDo32bYbDaQSmxZwcI1sLFNBvETtFw==",
        "path": "microsoft.aspnetcore.authentication.twitter/2.0.1",
        "hashPath": "microsoft.aspnetcore.authentication.twitter.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Authorization/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-0nZ5slZMwvtEgoR5b/T/MB4uM5qPQqVhPxbtrWb9W0QsIktB0gkAmpD6ciNj4ltZ+zRaY3rWZSS09SaFrsUTIQ==",
        "path": "microsoft.aspnetcore.authorization/2.0.1",
        "hashPath": "microsoft.aspnetcore.authorization.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Authorization.Policy/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-AJEJjYkN3L9VyHuKnUsQNp4nbH2ABBePWi+5soA+9L1NHGexP5S1TnMksOef1I+4fiVhp8OhlG+Ensz56ucBcw==",
        "path": "microsoft.aspnetcore.authorization.policy/2.0.1",
        "hashPath": "microsoft.aspnetcore.authorization.policy.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.AzureAppServices.HostingStartup/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-hdneJMBdHdrlMc/NYaNS8GFWlR/3tN7TsV/jOSBuc61+gWULwu45t+I7g5IF/iCHWI9PLMLNP5VOj+d1Tv1zUA==",
        "path": "microsoft.aspnetcore.azureappservices.hostingstartup/2.0.1",
        "hashPath": "microsoft.aspnetcore.azureappservices.hostingstartup.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.AzureAppServicesIntegration/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-r2JMiK8RB2mHGKWIc+NVViT++2ZxCAGJBbLtptINB32F/c3DrNEtKWVNs2MEldEb822llBjrRmsJ7cScCW+P7g==",
        "path": "microsoft.aspnetcore.azureappservicesintegration/2.0.1",
        "hashPath": "microsoft.aspnetcore.azureappservicesintegration.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.CookiePolicy/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-KvwxvTU83usDK0amo5T4ElaixJ3wpIWUXAVrqvnJBQ1U+DXU4R0bRpMCMii/5emAqZPhi0aggYG5axkcV1kheQ==",
        "path": "microsoft.aspnetcore.cookiepolicy/2.0.1",
        "hashPath": "microsoft.aspnetcore.cookiepolicy.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Cors/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-9CkzhCVdqV4lYDuf6jNqjUfQQ0lbnxg1npGIu8Wl7G9xsghSERgfrj7ddCmzparqZ1igD16gcTY3KyjwZczXEQ==",
        "path": "microsoft.aspnetcore.cors/2.0.1",
        "hashPath": "microsoft.aspnetcore.cors.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Cryptography.Internal/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-zmERIuyMufMcEOf0nLM9ApgH4VHhUnFGzmrgp2mkFL5unXfzDFg7Itdq4PsKMjrBZScGt3ayN0ct7F5ttdZ1eA==",
        "path": "microsoft.aspnetcore.cryptography.internal/2.0.1",
        "hashPath": "microsoft.aspnetcore.cryptography.internal.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Cryptography.KeyDerivation/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-rLj4xn0dwWslmk2LSrLUNlJ8pGDspj8MQ6EyLQO+saGobnGXhJa+k92d6X0w2qhZddHhLebXurRFlyKOpdkWNQ==",
        "path": "microsoft.aspnetcore.cryptography.keyderivation/2.0.1",
        "hashPath": "microsoft.aspnetcore.cryptography.keyderivation.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.DataProtection/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-wQbnO+4xEalM/80V27UqAoRe0Hxo13W2lNNnJ3816zwDv1404tiLwE7YLPM68b6H+QYOaqvQFGqKkj4FBrN4mw==",
        "path": "microsoft.aspnetcore.dataprotection/2.0.1",
        "hashPath": "microsoft.aspnetcore.dataprotection.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.DataProtection.Abstractions/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-2sXEwqRIdQsbdfuGr0G5N0G+No2ormNyAkAudtVgoFzbjdf6zbCtbLK9skoNb4bg3/ZyE0qa1iOJELfEM4GUjA==",
        "path": "microsoft.aspnetcore.dataprotection.abstractions/2.0.1",
        "hashPath": "microsoft.aspnetcore.dataprotection.abstractions.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.DataProtection.AzureStorage/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-ySkJwPJodnLvM10xkCzeAxEY79jtaZurdoznuuU5uH3ZfcjHHHOyW9/+Y0DGF+oiSjQ6FCGULnmE7bdwuIsIPw==",
        "path": "microsoft.aspnetcore.dataprotection.azurestorage/2.0.1",
        "hashPath": "microsoft.aspnetcore.dataprotection.azurestorage.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.DataProtection.Extensions/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-rKkcV63GZG1+Rs5PZ6RNFV/SgbQacnVvKMcqpgey21zPos2pCM0HNffgju7RMbPTIIog6RAivoounbUkc+ZNEA==",
        "path": "microsoft.aspnetcore.dataprotection.extensions/2.0.1",
        "hashPath": "microsoft.aspnetcore.dataprotection.extensions.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Diagnostics/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-aYyMlv17p647mv9f3BUQdFkwVvWQ2i3hkw6jCiUhMAflRpjEOxhu4PrC1mia++Z7ZdghIgdZNzJXpDH2XMq25Q==",
        "path": "microsoft.aspnetcore.diagnostics/2.0.1",
        "hashPath": "microsoft.aspnetcore.diagnostics.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Diagnostics.Abstractions/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-NHBnnQYuBxcqHNoOw0+uTkHrAHAp7xA2G3P1j3oFUSGd/RhIJ2A9xE2+CAWPRGIGwsa+zY3zfogx5lUzwhFgcA==",
        "path": "microsoft.aspnetcore.diagnostics.abstractions/2.0.1",
        "hashPath": "microsoft.aspnetcore.diagnostics.abstractions.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-VZ563Qjbgg4vaEVwsVYL1Ez6h90X4QrPfMmhECt4Eh4e8BBMTUc84bLxwuciiZpNb0G2853Py5XL6dlrDlC4Ng==",
        "path": "microsoft.aspnetcore.diagnostics.entityframeworkcore/2.0.1",
        "hashPath": "microsoft.aspnetcore.diagnostics.entityframeworkcore.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Hosting/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-vqQK+SQybdYWmkDhjbvgde7riR6DIp/oD8Voj4zJiaAB1atvEm1ZjXVFj7sAXdy6NUZlUyeU7lTwYYzmkiFqWQ==",
        "path": "microsoft.aspnetcore.hosting/2.0.1",
        "hashPath": "microsoft.aspnetcore.hosting.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Hosting.Abstractions/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-1/Pifm1al6wA12UkAGpro2vsF31oF8Zw2ZCi9PphxTFGreTsJbqPzd39YcTlw3Knb9n/8F9/lTZ3l1m2RjWGXg==",
        "path": "microsoft.aspnetcore.hosting.abstractions/2.0.1",
        "hashPath": "microsoft.aspnetcore.hosting.abstractions.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Hosting.Server.Abstractions/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-uVOdxjpxJdwR5C3RdByht/cm9FwyqeTEm58NnPwOxMAUPE9nqbXdVnq1Hff2VjtSlvVtPVT0NiJjHM6pDkEeKA==",
        "path": "microsoft.aspnetcore.hosting.server.abstractions/2.0.1",
        "hashPath": "microsoft.aspnetcore.hosting.server.abstractions.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Html.Abstractions/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-Tdy0VkAnSeynmnbqF1JLchyPg5iQwmxTTG16byenoD2SXn/W8DR6HagZOZxvDb7gc4IerjdhIwuY8aV8nm7FAA==",
        "path": "microsoft.aspnetcore.html.abstractions/2.0.0",
        "hashPath": "microsoft.aspnetcore.html.abstractions.2.0.0.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Http/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-mTXDCNF83pV6qe+IzJ166p1re2or25Xj0vjdqj5JDakz9ClNZHncSkyAk63vSpBZbgFXGHiz+PuVyYcfurs5ew==",
        "path": "microsoft.aspnetcore.http/2.0.1",
        "hashPath": "microsoft.aspnetcore.http.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Http.Abstractions/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-i3mGpHEGnMq/x9eDxdWVP4e+VdPD8DuhdVYR4sH0wxWiM6oa0tNAhwDGoOrDop548PSwLM8Qs7DGPvrZqIqjmQ==",
        "path": "microsoft.aspnetcore.http.abstractions/2.0.1",
        "hashPath": "microsoft.aspnetcore.http.abstractions.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Http.Extensions/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-iG6FtbPQI3AOb3LskrY23AUiaZUGSfXWxMf1cJh9lB/h309qiMTPM6Du4stGwwSvw3yR2EKNaV+O4aZWmuvfog==",
        "path": "microsoft.aspnetcore.http.extensions/2.0.1",
        "hashPath": "microsoft.aspnetcore.http.extensions.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Http.Features/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-J9JvFF7gC2SDJTV/4XWXQaKX4zdjR2ixlGy/KUD7Og+dkeHleD7f8+wtRUthuQV1yCU3t/gz/IrmbpmQj+Tlzg==",
        "path": "microsoft.aspnetcore.http.features/2.0.1",
        "hashPath": "microsoft.aspnetcore.http.features.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.HttpOverrides/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-/F/IL5tkwF58n/CyLDsXzyhpOM0L23GWQVf1QtAyku1GVVralKVK1Y+/6SNar0btoSyqgQt83tmwdyrUNUHwjw==",
        "path": "microsoft.aspnetcore.httpoverrides/2.0.1",
        "hashPath": "microsoft.aspnetcore.httpoverrides.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Identity/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-dJzQ3AhwEWFYbWNSigHc/RutA+P8xiW6eh4KnLmQaxjikRfSVfRLf4Da4tOByD6ddJsaBqfstWJnd3KBDKzJAw==",
        "path": "microsoft.aspnetcore.identity/2.0.1",
        "hashPath": "microsoft.aspnetcore.identity.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Identity.EntityFrameworkCore/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-H59BaisdTVX/feI2MJ+V5wrb4P0wSxBLk10HyPrXVze8YAcpi5kGyissuRhbPzMztPyPGuiq+M+i/Wl4sk3uyA==",
        "path": "microsoft.aspnetcore.identity.entityframeworkcore/2.0.1",
        "hashPath": "microsoft.aspnetcore.identity.entityframeworkcore.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.JsonPatch/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-US78cfi7nrPTXeONgcSWbgrUBLs1Aca4kCJTieWXDLg0G0gwmdfPbd6S3c5TdJRQdA69K3UhPAs9r9ZAMjIFAA==",
        "path": "microsoft.aspnetcore.jsonpatch/2.0.0",
        "hashPath": "microsoft.aspnetcore.jsonpatch.2.0.0.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Localization/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-c2u/AU2CscYYmH1nMbkYyJp5Zy2elVuZYryEEV+M0cL/aKGFfDRnQ5iTGoa4HPNELjpqhFWTGwIneeUlpJWUDg==",
        "path": "microsoft.aspnetcore.localization/2.0.1",
        "hashPath": "microsoft.aspnetcore.localization.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Localization.Routing/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-Ve5jN3Y56924iVPrd7vKeZA9vRM7aD51Md2bLLH3rrpkRdJ4nhIQNPIscqFEiRg3X41PLKj1Owdjws7ya73mmA==",
        "path": "microsoft.aspnetcore.localization.routing/2.0.1",
        "hashPath": "microsoft.aspnetcore.localization.routing.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.MiddlewareAnalysis/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-wUs8H0rhiAHjSp20W+mynHiGEIvqhOCSPOsabOA/Qx5/EiGFKVJjfb3F0m8CJX837SCoJOZGn1NPraEiaddatA==",
        "path": "microsoft.aspnetcore.middlewareanalysis/2.0.1",
        "hashPath": "microsoft.aspnetcore.middlewareanalysis.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-SMbHiQZ/nYoaR+kR74dyot5wh4nuian+l9G7Q+zXkFJpI69ALr96Fc3ie1n/Zr1WTBVgB8cwK2ce8VKJxw2RWw==",
        "path": "microsoft.aspnetcore.mvc/2.0.2",
        "hashPath": "microsoft.aspnetcore.mvc.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc.Abstractions/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-V3KadHB5zoDr4hWII666BnfzGlGy2wou1K3/gh7p//xG6CV5/oFWLdzFllFjmoIvnIy1xqdt7cfqo45sgVpwXw==",
        "path": "microsoft.aspnetcore.mvc.abstractions/2.0.2",
        "hashPath": "microsoft.aspnetcore.mvc.abstractions.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc.ApiExplorer/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-d9+IL6Uo46B5sWvbwFQaSJSyq+1F+ncXwSP9Eenv06D2MO7MUmfTnGc96SPY5CAm+z2qYDfrz+OQ5v8679pRAw==",
        "path": "microsoft.aspnetcore.mvc.apiexplorer/2.0.2",
        "hashPath": "microsoft.aspnetcore.mvc.apiexplorer.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc.Core/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-fFBZgOS9eImndyzpTnSUI4xCvFnqMm0MKAKNIop1LJ8wMKxbWMhyfxt1ZfMHQ8JmkSSSThiqSDOiEwgyx5+k8Q==",
        "path": "microsoft.aspnetcore.mvc.core/2.0.2",
        "hashPath": "microsoft.aspnetcore.mvc.core.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc.Cors/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-PDHskgYjMhb0aJjLrqAirtTBe8BI4vfPBBcUYBlVm49sgBzbhrPnLIaB6W4yTck47oUDnQu0po7ttf3NqzMEvg==",
        "path": "microsoft.aspnetcore.mvc.cors/2.0.2",
        "hashPath": "microsoft.aspnetcore.mvc.cors.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc.DataAnnotations/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-YXEgI6RBIMKtW8rIgh9LATSw4yf06Ij6EhMiNks0XOAjjz7EkmzvdKQNBLNXS5lHAOv9173Q4/ss6BksxBcSZQ==",
        "path": "microsoft.aspnetcore.mvc.dataannotations/2.0.2",
        "hashPath": "microsoft.aspnetcore.mvc.dataannotations.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc.Formatters.Json/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-ROE9OaxgPSID4LcX1v85c75deLw0WEmFjGeugEMBIpSakGtOmMQwMZcJTQBJ7kVUSxJ+aTnLYqZcyL3qgREQIQ==",
        "path": "microsoft.aspnetcore.mvc.formatters.json/2.0.2",
        "hashPath": "microsoft.aspnetcore.mvc.formatters.json.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc.Formatters.Xml/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-DTHJJh/ZUS6VT9QvnAOVv2Ll2ieN79SmtJ7FoeDMwgEPEXvbl/ElxduIoKK7ZPavQsI11vHQfTYGsxtGdmvF0g==",
        "path": "microsoft.aspnetcore.mvc.formatters.xml/2.0.2",
        "hashPath": "microsoft.aspnetcore.mvc.formatters.xml.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc.Localization/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-0q94OvzH3DjQVRB0U2qGRqbXr8UPNugXw2Mz4OXAUOxiF1cRE1/onb6dahCaNvYJbZ2Xs/F4BBIY3MJ/LGRLdw==",
        "path": "microsoft.aspnetcore.mvc.localization/2.0.2",
        "hashPath": "microsoft.aspnetcore.mvc.localization.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc.Razor/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-E3yG6bAiOGq5+A6zjcJ1JYnhcRF7lbFhLCgYy/Z7cKmL8q5QRmomZm/EsjVaCbfTG0yHKOsoLEKMDKMBf8f3ng==",
        "path": "microsoft.aspnetcore.mvc.razor/2.0.2",
        "hashPath": "microsoft.aspnetcore.mvc.razor.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc.Razor.Extensions/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-voxpNz4zq9RxOPnK5oYchyA1ggNVpnz34mFsqwH7G9RUJHFLhjlRaeaKXi8gGwWU3RomGF9ahhH9o8DHgdxmPA==",
        "path": "microsoft.aspnetcore.mvc.razor.extensions/2.0.1",
        "hashPath": "microsoft.aspnetcore.mvc.razor.extensions.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc.Razor.ViewCompilation/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-umyzHhXoyc8uWWYNPXghv0CaM/kw60SofYNClDJ/gnmgBVZvx6NO8AV89ANT6PA1N9l3I8qkSK3drzUWnQnRng==",
        "path": "microsoft.aspnetcore.mvc.razor.viewcompilation/2.0.2",
        "hashPath": "microsoft.aspnetcore.mvc.razor.viewcompilation.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc.RazorPages/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-xXuo3mLHybD8j1IWVfVuBZs7DvwgngADTqOWLCcPnoNtqpxqoHIz7IlyZL+NYU/pvImQLkkJePWNm1jJvow1pw==",
        "path": "microsoft.aspnetcore.mvc.razorpages/2.0.2",
        "hashPath": "microsoft.aspnetcore.mvc.razorpages.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc.TagHelpers/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-WjZZRn446ryGnC7CsTJ9QSov+NE9qa/aqtAolLTcs90/gTDb93B952Js9U5IpCr/OlzyTIk8qoqgvpA138h/mg==",
        "path": "microsoft.aspnetcore.mvc.taghelpers/2.0.2",
        "hashPath": "microsoft.aspnetcore.mvc.taghelpers.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Mvc.ViewFeatures/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-KANH2/5vbTI/jfwJcItbzSuPLAex6HfG9sqKus2dJc0TgWHc6Buc4BFT1qDKl6MW2JAZcQQ7/r5iNd50jtCHeg==",
        "path": "microsoft.aspnetcore.mvc.viewfeatures/2.0.2",
        "hashPath": "microsoft.aspnetcore.mvc.viewfeatures.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.NodeServices/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-HGRA2q4SNaJ3KKocrXdQYKllmPJyTa6ZvszLQRhjsBNyDQf1FsnKi2bCBBIBk6Nwk1Cp45H2NcZQvMdv59S7hQ==",
        "path": "microsoft.aspnetcore.nodeservices/2.0.2",
        "hashPath": "microsoft.aspnetcore.nodeservices.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Owin/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-K54YgOdNwVQbjXg/EPucK20oRCSdJ5gS2wQsN1Twk434yLTTzaSYaipYZ3oFwHgClEdxVQvlHcDiKXii2NtJwg==",
        "path": "microsoft.aspnetcore.owin/2.0.1",
        "hashPath": "microsoft.aspnetcore.owin.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Razor/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-IGtreZEfTOSKndAZcAaMEGwTa7rLnuqSRbCS3l3Mn2D68Ba9c4enuVOMACivDowMAsfAUqZju3vhiuCUAMvGHg==",
        "path": "microsoft.aspnetcore.razor/2.0.1",
        "hashPath": "microsoft.aspnetcore.razor.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Razor.Language/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-zzvx4EnZoOf/1rKUcn5lEY98GOt30KJiQGS3tVhc2HihBubcvMZZT6+oqNiFi7oJoM5bnYaEUNM8C7kA8Iu8RQ==",
        "path": "microsoft.aspnetcore.razor.language/2.0.1",
        "hashPath": "microsoft.aspnetcore.razor.language.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Razor.Runtime/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-CMxOywYKmMe7knPXXaKSTvsPRtM88PHieFCf74KjWnbq7Oz9d5TuNwlQuC+V+Y65tBUpGicfTDM9IfG8engyzQ==",
        "path": "microsoft.aspnetcore.razor.runtime/2.0.1",
        "hashPath": "microsoft.aspnetcore.razor.runtime.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.ResponseCaching/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-DME1X7TXwMLlq+i/rZ7r8TkifCMSUGahoJ7/hkulHkqlgoQJ/lYLGTBlEQy2ndWX1oc1DUJEWVlWeoptlv/A9A==",
        "path": "microsoft.aspnetcore.responsecaching/2.0.1",
        "hashPath": "microsoft.aspnetcore.responsecaching.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.ResponseCaching.Abstractions/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-ZIwA+KjQRd1bF5MlNA3HhvpZR4e0SMqQHyMlaTXArmTXwS86AoOR22v3xvJXrjIbyEPUC+WHeKBNa+AbReMf3w==",
        "path": "microsoft.aspnetcore.responsecaching.abstractions/2.0.1",
        "hashPath": "microsoft.aspnetcore.responsecaching.abstractions.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.ResponseCompression/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-TBjky9V/d+/Bkmhmb4QEZ4jMF/MQzLBViEYMvD2/uWl73cnjvhKauIm8PjIFZqQsWBHNliHPgNWxcChY5+TsjQ==",
        "path": "microsoft.aspnetcore.responsecompression/2.0.1",
        "hashPath": "microsoft.aspnetcore.responsecompression.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Rewrite/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-oYyeTr6s2iTSMbriJt3eOLfdzDaiIVtP5ECFGUZx20hGF6elBabq2rhR9sAoc4vQNwBCirT03ndcCK7VZtAUVw==",
        "path": "microsoft.aspnetcore.rewrite/2.0.1",
        "hashPath": "microsoft.aspnetcore.rewrite.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Routing/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-jfvgBuVu4qbNALj+EQJzGFz5aP/pqBdPowif1Oyube2EkmrIx1JDmCQ+LeLUygflLYdV2gYffPEeB7ifYegz0g==",
        "path": "microsoft.aspnetcore.routing/2.0.1",
        "hashPath": "microsoft.aspnetcore.routing.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Routing.Abstractions/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-ZJJj11f1oClXp11KAoT2p2I/6rUrPtnKoXQBwnCa3NhpI0/WfsyXo4MvJJB87H1GWCCHNFYylAoxhhie25pC7Q==",
        "path": "microsoft.aspnetcore.routing.abstractions/2.0.1",
        "hashPath": "microsoft.aspnetcore.routing.abstractions.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Server.HttpSys/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-pbD9OCmnr/TKJdWo0uUEr2njtY41ZzpymvK3Su+07WeHmno1p2kiSPb200U9IQ5BuVxaYjShs4cExxCJc0jx1A==",
        "path": "microsoft.aspnetcore.server.httpsys/2.0.1",
        "hashPath": "microsoft.aspnetcore.server.httpsys.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Server.IISIntegration/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-bagPgHYvSqF91M7SZv4qZ8hZZqdej3R4aclPOFNzroLxlFgbAAXwbApRbDG/1ZTCYtXFQ83QCHwUXgZ5hmmMcg==",
        "path": "microsoft.aspnetcore.server.iisintegration/2.0.1",
        "hashPath": "microsoft.aspnetcore.server.iisintegration.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Server.Kestrel/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-SX7+2E6npBQ7vO5xn8dAo1vnWnjBE3t9b+tEsLNL7ewjQTJE85TkJ9cyjIorOtOn+duUxshmgzbMzhpf7uUn3Q==",
        "path": "microsoft.aspnetcore.server.kestrel/2.0.1",
        "hashPath": "microsoft.aspnetcore.server.kestrel.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Server.Kestrel.Core/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-xTteJ7Wfh9QLoeMOIsG5TjQf4eHaUvC12kinmvxZ2kzm5r1UtyC1f+07N8dxY3Co1RquvlXO4b3EuNJMamc1Pg==",
        "path": "microsoft.aspnetcore.server.kestrel.core/2.0.1",
        "hashPath": "microsoft.aspnetcore.server.kestrel.core.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Server.Kestrel.Https/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-L8C0q6HHMs6Bu17QCLXwGUNlsGTOrz7d0b5gaEqIMYO94zsg+gAmv7YHYK43mGJ4dteXxWxBdoUI8WRKY+H0zg==",
        "path": "microsoft.aspnetcore.server.kestrel.https/2.0.1",
        "hashPath": "microsoft.aspnetcore.server.kestrel.https.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Server.Kestrel.Transport.Abstractions/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-I0X3ZmWFv4TeH6q/FO5Pv5GsT1X0TffclbZzs/Pf69TGznVIqlfSsSambWT8tGNUx8Y1EC5ffXvvoNhN0ci0rQ==",
        "path": "microsoft.aspnetcore.server.kestrel.transport.abstractions/2.0.1",
        "hashPath": "microsoft.aspnetcore.server.kestrel.transport.abstractions.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Server.Kestrel.Transport.Libuv/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-4GT9cQfP5arzReMTzxrbZyveHAQFbjIUaBN2xip4jwNn3rAhRKSty/6UhwrLDZ9+BSfSvb3qOjBklJPWeYFLOA==",
        "path": "microsoft.aspnetcore.server.kestrel.transport.libuv/2.0.1",
        "hashPath": "microsoft.aspnetcore.server.kestrel.transport.libuv.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.Session/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-ERowmL/UQUJ5mzbEQrQcLXqSgRAN3A78SLweI1lB6ce4suQ8+dtgi9qm56mePrVLnRhdN10XTrcAkZZIje7PAA==",
        "path": "microsoft.aspnetcore.session/2.0.1",
        "hashPath": "microsoft.aspnetcore.session.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.SpaServices/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-9rx4x8TH+PuZokLzYmeb6wVmgQTt4fLUzoW35rDKxTAvBW0hQCYiWsK6xfDVMzWYMLwCD36T3j0ZtOpfejy/Sw==",
        "path": "microsoft.aspnetcore.spaservices/2.0.2",
        "hashPath": "microsoft.aspnetcore.spaservices.2.0.2.nupkg.sha512"
      },
      "Microsoft.AspNetCore.StaticFiles/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-F5qVFsyKsVWKS2tgnJ8MVXkc4FNt6NMybRl7gsZw90G7rhscu4M9k2rW0sEtaUS2ZyKu0ObMU2BVu8OjPCUZjQ==",
        "path": "microsoft.aspnetcore.staticfiles/2.0.1",
        "hashPath": "microsoft.aspnetcore.staticfiles.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.WebSockets/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-J7JAWvl/q/eUm0JsJZ/FdzU6WS08L8ErVCsDiL+kYz4hLcutR84qkpi7cxbPYT0LEE8bhUWYPNCUOJ1rFSlcBQ==",
        "path": "microsoft.aspnetcore.websockets/2.0.1",
        "hashPath": "microsoft.aspnetcore.websockets.2.0.1.nupkg.sha512"
      },
      "Microsoft.AspNetCore.WebUtilities/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-shzRZs574ir2Im5hJBSKnLlNbf8SKA2d5Mkcto5fv6LUcYqu0ravmVHfuRAqnAeo2Z0GpcpFW2DKmNbFjvzWRg==",
        "path": "microsoft.aspnetcore.webutilities/2.0.1",
        "hashPath": "microsoft.aspnetcore.webutilities.2.0.1.nupkg.sha512"
      },
      "Microsoft.Azure.KeyVault/2.3.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-A82ESUdfLz2wMhYuPxrwf/fA7JVt3IARgeMCG3TsaLtxUxa9RBKX3f0zdnKmvBvJ/u1/5g03OLR26GPekqY5HQ==",
        "path": "microsoft.azure.keyvault/2.3.2",
        "hashPath": "microsoft.azure.keyvault.2.3.2.nupkg.sha512"
      },
      "Microsoft.Azure.KeyVault.WebKey/2.0.7": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-MVSYao62R9rwl9KF+IsJm+XBLupJj1ma2lfwNeFlSWziXGAopnYK+YkDWqABOqNIV9kpza/MvNBxITzhlJIyIw==",
        "path": "microsoft.azure.keyvault.webkey/2.0.7",
        "hashPath": "microsoft.azure.keyvault.webkey.2.0.7.nupkg.sha512"
      },
      "Microsoft.CodeAnalysis.Analyzers/1.1.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-HS3iRWZKcUw/8eZ/08GXKY2Bn7xNzQPzf8gRPHGSowX7u7XXu9i9YEaBeBNKUXWfI7qjvT2zXtLUvbN0hds8vg==",
        "path": "microsoft.codeanalysis.analyzers/1.1.0",
        "hashPath": "microsoft.codeanalysis.analyzers.1.1.0.nupkg.sha512"
      },
      "Microsoft.CodeAnalysis.Common/2.3.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-nGATpUW09zOGFLQZ3JXIObJyNlk2dvgNgC7Kh+iDpxGWgKHSgpHMXnGmXUecJa4CNi0HhUENKSnEack1aF/MwQ==",
        "path": "microsoft.codeanalysis.common/2.3.1",
        "hashPath": "microsoft.codeanalysis.common.2.3.1.nupkg.sha512"
      },
      "Microsoft.CodeAnalysis.CSharp/2.3.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-fvO7Q8FqzmWX8gzzCk4Bf34Ms06bZ6r/A9tUz1ndj3ioitAxSC2QUXbUQOJ4ExzohTtXhczJAFirgs//Nasz6A==",
        "path": "microsoft.codeanalysis.csharp/2.3.1",
        "hashPath": "microsoft.codeanalysis.csharp.2.3.1.nupkg.sha512"
      },
      "Microsoft.CodeAnalysis.CSharp.Workspaces/2.3.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-LpK7zgRU9TQ9KOZe7vDo4DEaPj6PM6HOpvTCOpBtS7GAbwOHU2IWUgnAJvFxILXKsqJDKrM0+O6zqZhG0sBYIw==",
        "path": "microsoft.codeanalysis.csharp.workspaces/2.3.1",
        "hashPath": "microsoft.codeanalysis.csharp.workspaces.2.3.1.nupkg.sha512"
      },
      "Microsoft.CodeAnalysis.Razor/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-Ncqt6UEh5s451dZHPwTK8YDbl5t4isn0q1Xs3I2JTjUs4xdCOSo2t0KPeb1PUeNDrTJ0vKDV6xMtQf1uqiTjoQ==",
        "path": "microsoft.codeanalysis.razor/2.0.1",
        "hashPath": "microsoft.codeanalysis.razor.2.0.1.nupkg.sha512"
      },
      "Microsoft.CodeAnalysis.Workspaces.Common/2.3.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-/Y9zLXlvWVvGxLyNWvLrSRRZ6c1F3L2yVwhUcmGd9un7u/TJguOyY2BEOD10uA/KBDKbA4pmnWnJFq+2n5IYPg==",
        "path": "microsoft.codeanalysis.workspaces.common/2.3.1",
        "hashPath": "microsoft.codeanalysis.workspaces.common.2.3.1.nupkg.sha512"
      },
      "Microsoft.CSharp/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-vvVR/B08YVghQ4jHEloxqw2ZWzEGE1AOA5E0DioUM3ujbXz6FD3AfB/0Jl2ohJPd0nXYGwmPe1En6HTsSriq1A==",
        "path": "microsoft.csharp/4.4.0",
        "hashPath": "microsoft.csharp.4.4.0.nupkg.sha512"
      },
      "Microsoft.Data.Edm/5.8.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-P/d8DxA6MFHroBEn/jW0LMQSIKnsRRibrZtRCLfov2boQfrQ1R1BVgkJ5oIhcQsOm0l4POv+I2ny6RBsclNbOw==",
        "path": "microsoft.data.edm/5.8.2",
        "hashPath": "microsoft.data.edm.5.8.2.nupkg.sha512"
      },
      "Microsoft.Data.OData/5.8.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-oEIUtXcRiKogF0yZxA+QdgxoBJ34989qL/5xOSrTfxAhzNJV5Hw6DRdWgUCpeXFMoJUQx7ptbHCN+My/LCQfsg==",
        "path": "microsoft.data.odata/5.8.2",
        "hashPath": "microsoft.data.odata.5.8.2.nupkg.sha512"
      },
      "Microsoft.Data.Sqlite/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-9zw3cOfLaPkskrXRik3XxVhHbjUc3lkS68pExvZ/kBRXKo5g2kH+SDyLYyJoxii4ENXaaPL0U/juGmA030lIRg==",
        "path": "microsoft.data.sqlite/2.0.0",
        "hashPath": "microsoft.data.sqlite.2.0.0.nupkg.sha512"
      },
      "Microsoft.Data.Sqlite.Core/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-PBA2ay1gc4mMzLuBU4VfpZ2mjQOMaqCzwmwj+15FWNC33tFuOS6pSfH7MlV/Ql8wRKXBi/7yH6PqK9jm8JkvfA==",
        "path": "microsoft.data.sqlite.core/2.0.0",
        "hashPath": "microsoft.data.sqlite.core.2.0.0.nupkg.sha512"
      },
      "Microsoft.DotNet.PlatformAbstractions/2.0.3": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-cXgVdJmW3fLwmSxsv0RlTe4BIKs6slVXV5xRvsO4CV4aUeY67GelaujxY/lP5yVlaMjMM22pXKbKtUY9x050Mw==",
        "path": "microsoft.dotnet.platformabstractions/2.0.3",
        "hashPath": "microsoft.dotnet.platformabstractions.2.0.3.nupkg.sha512"
      },
      "Microsoft.EntityFrameworkCore/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-RlwInZHfIUWwFgQJCpUMKrLeE8QJ64MA/GxD881oTMFa9j7iiGKCtI0xK4J1NNgRKvgVDPJbh9CIGJiu0KEdeA==",
        "path": "microsoft.entityframeworkcore/2.0.1",
        "hashPath": "microsoft.entityframeworkcore.2.0.1.nupkg.sha512"
      },
      "Microsoft.EntityFrameworkCore.Design/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-gEdT/YSI/buO15X/UN+gQY6D7qeozRYU80WuesZCj33jJBw4wCHHn8SYcp38k2BPOBDC4I2AfsOFH6Vaf8CeLQ==",
        "path": "microsoft.entityframeworkcore.design/2.0.1",
        "hashPath": "microsoft.entityframeworkcore.design.2.0.1.nupkg.sha512"
      },
      "Microsoft.EntityFrameworkCore.InMemory/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-PIkjqb3gqli8d86OX2HeQpPv5vGXareCuf2IBrVf1+GoIyveZlwLSmsRtqgR3yXPbdeDZzqjCq4X/BDocvYrPg==",
        "path": "microsoft.entityframeworkcore.inmemory/2.0.1",
        "hashPath": "microsoft.entityframeworkcore.inmemory.2.0.1.nupkg.sha512"
      },
      "Microsoft.EntityFrameworkCore.Relational/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-aZgfEDEzub+n9Kmsz/l4iiUHfB+R2iDDAFtW55OLpT7ANj7mS8k/bq8mqd60rVPgWKKy1l0+BK26ao4el/07lA==",
        "path": "microsoft.entityframeworkcore.relational/2.0.1",
        "hashPath": "microsoft.entityframeworkcore.relational.2.0.1.nupkg.sha512"
      },
      "Microsoft.EntityFrameworkCore.Sqlite/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-DviCFjsYHkLHQMRKUFEG/rx65NbaP0NGFskBnw1t9lPdkkLG8KoAzxOs4KvTHnuykPHs6V7qR9f703dH6WCwkQ==",
        "path": "microsoft.entityframeworkcore.sqlite/2.0.1",
        "hashPath": "microsoft.entityframeworkcore.sqlite.2.0.1.nupkg.sha512"
      },
      "Microsoft.EntityFrameworkCore.Sqlite.Core/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-TOmLflU7sD3QLLRgPPPadUsouAG2XSKxgpIPnLKIr1GoAYwl7t80HtYMd6402Mkg3MuN3fz1s3lXZLeNj6wfpg==",
        "path": "microsoft.entityframeworkcore.sqlite.core/2.0.1",
        "hashPath": "microsoft.entityframeworkcore.sqlite.core.2.0.1.nupkg.sha512"
      },
      "Microsoft.EntityFrameworkCore.SqlServer/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-+UnKJpkVpuNWRjF3BWSzbkQLL7gxY18Hnh5uXmlagO4Ua8BstqWIJaIUV+Ps2rw/2n62UPTQQV9RQWggV7OH9Q==",
        "path": "microsoft.entityframeworkcore.sqlserver/2.0.1",
        "hashPath": "microsoft.entityframeworkcore.sqlserver.2.0.1.nupkg.sha512"
      },
      "Microsoft.EntityFrameworkCore.Tools/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-/z1xawAD0oL5AyFd3vn9E7L6mE2UfEU91KwMDWEp8o0+AOrP4ZocJS5Kot5VYJMfDUeAzDBBZPmJs+r6/YUEiA==",
        "path": "microsoft.entityframeworkcore.tools/2.0.1",
        "hashPath": "microsoft.entityframeworkcore.tools.2.0.1.nupkg.sha512"
      },
      "Microsoft.Extensions.Caching.Abstractions/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-kGMEV53Od1ES0BDh7OOKbTW9Zu5dbbQ72yI936dvvbHlde3puuq/WRKAccFgcB2PuRjox1HFhA9+t53RYqfuEA==",
        "path": "microsoft.extensions.caching.abstractions/2.0.0",
        "hashPath": "microsoft.extensions.caching.abstractions.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Caching.Memory/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-NqvVdYLbX7N2J2Wz9y3zjhE66JRdROiZZsGhA2u4a9IcIq/jzINC/cLM96BHA+TSOZFPxVdWneqB6/yt9u846A==",
        "path": "microsoft.extensions.caching.memory/2.0.0",
        "hashPath": "microsoft.extensions.caching.memory.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Caching.Redis/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-FWKu406Tb/muSY6y9Zy9G2IwKOkN/8gsLhz/iUUyovY6t/6iK+IOza5enKPv7KgaY1kgSuxPD22tWlXLV5GmIQ==",
        "path": "microsoft.extensions.caching.redis/2.0.0",
        "hashPath": "microsoft.extensions.caching.redis.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Caching.SqlServer/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-ZPZZHu3LC43wNKvfjp/lDu5Qn1T/iLlOeEJcKoeafBQnMbGph8BR639o5XX/V1D5wMkK7RjQF5iosu9RMf9mmw==",
        "path": "microsoft.extensions.caching.sqlserver/2.0.0",
        "hashPath": "microsoft.extensions.caching.sqlserver.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Configuration/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-SsI4RqI8EH00+cYO96tbftlh87sNUv1eeyuBU1XZdQkG0RrHAOjWgl7P0FoLeTSMXJpOnfweeOWj2d1/5H3FxA==",
        "path": "microsoft.extensions.configuration/2.0.0",
        "hashPath": "microsoft.extensions.configuration.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Configuration.Abstractions/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-rHFrXqMIvQNq51H8RYTO4IWmDOYh8NUzyqGlh0xHWTP6XYnKk7Ryinys2uDs+Vu88b3AMlM3gBBSs78m6OQpYQ==",
        "path": "microsoft.extensions.configuration.abstractions/2.0.0",
        "hashPath": "microsoft.extensions.configuration.abstractions.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Configuration.AzureKeyVault/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-HjuOFvIz9xtzfg9AddX9pjFvghpYKxDwUleLfPORT5Pm7YO1RTq2uN9uc1TxhMglDabkpSuwlfWG1BN64fOHQQ==",
        "path": "microsoft.extensions.configuration.azurekeyvault/2.0.0",
        "hashPath": "microsoft.extensions.configuration.azurekeyvault.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Configuration.Binder/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-IznHHzGUtrdpuQqIUdmzF6TYPcsYHONhHh3o9dGp39sX/9Zfmt476UnhvU0UhXgJnXXAikt/MpN6AuSLCCMdEQ==",
        "path": "microsoft.extensions.configuration.binder/2.0.0",
        "hashPath": "microsoft.extensions.configuration.binder.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Configuration.CommandLine/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-Vf2YKZFLx0lZjgGLhliYyhXzZOkpgrcF5RhpgjPsvdbxJ97jD/kPNXP0wmYnaF3IPzP/ro6z2zph6QzUophrkA==",
        "path": "microsoft.extensions.configuration.commandline/2.0.0",
        "hashPath": "microsoft.extensions.configuration.commandline.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Configuration.EnvironmentVariables/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-islcwe05LWFtAxGaJxoDbl4pj2nmG8nuW6dqYMZkPWIuHK7/46YELCbL+3Frl6X89qzDh5sj2PHgyWXTOAmwdA==",
        "path": "microsoft.extensions.configuration.environmentvariables/2.0.0",
        "hashPath": "microsoft.extensions.configuration.environmentvariables.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Configuration.FileExtensions/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-ebFbu+vsz4rzeAICWavk9a0FutWVs7aNZap5k/IVxVhu2CnnhOp/H/gNtpzplrqjYDaNYdmv9a/DoUvH2ynVEQ==",
        "path": "microsoft.extensions.configuration.fileextensions/2.0.0",
        "hashPath": "microsoft.extensions.configuration.fileextensions.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Configuration.Ini/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-9nYhMNBO9zASwLrAR1xosrnf4SamRI2TQwXHn+DOZ5PpjzGtu7XNQ0PMmGZ6WjFbD/6iIQfbuxzd7tM7+Ziz2A==",
        "path": "microsoft.extensions.configuration.ini/2.0.0",
        "hashPath": "microsoft.extensions.configuration.ini.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Configuration.Json/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-thPz4SckRGNqeLbdvJ619YxRFSkWuL1K5QqTMb3TVdEwjQj4O39yfUtjtI/XlWJiY7JKK4MUKAiQZVYc8ohKKg==",
        "path": "microsoft.extensions.configuration.json/2.0.0",
        "hashPath": "microsoft.extensions.configuration.json.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Configuration.UserSecrets/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-Nn9Gd4MsMKAzIwXhoz/pzPlngbgZDPlbWKWLSyL4nMFAnlQ8EubbealF69JvGBcK7DwdsMV5pz7a9EZFZQF6ww==",
        "path": "microsoft.extensions.configuration.usersecrets/2.0.0",
        "hashPath": "microsoft.extensions.configuration.usersecrets.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Configuration.Xml/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-MxH2kk0846Og65bDiOoi+5u9GcnUF55qCBj2wo1r3rQcea53rFhHiGNEQyDaKFbsis8lPP8kq3Zaol1ZsZI4XQ==",
        "path": "microsoft.extensions.configuration.xml/2.0.0",
        "hashPath": "microsoft.extensions.configuration.xml.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.DependencyInjection/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-wakg18gHYiUL1pcjjyZuYk6OvDpbSw1E7IWxm78TMepsr+gQ8W0tWzuRm0q/9RFblngwPwo15rrgZSUV51W5Iw==",
        "path": "microsoft.extensions.dependencyinjection/2.0.0",
        "hashPath": "microsoft.extensions.dependencyinjection.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.DependencyInjection.Abstractions/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-eUdJ0Q/GfVyUJc0Jal5L1QZLceL78pvEM9wEKcHeI24KorqMDoVX+gWsMGLulQMfOwsUaPtkpQM2pFERTzSfSg==",
        "path": "microsoft.extensions.dependencyinjection.abstractions/2.0.0",
        "hashPath": "microsoft.extensions.dependencyinjection.abstractions.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.DependencyModel/2.0.3": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-OiNYN/QeZLuYcn4CvYrOmYgODPB1Jpqft+cT4F3Hkq5poj+1DLfbIBftMI/Pn8J7DyHhYeBMLxJUuugjvk/Fuw==",
        "path": "microsoft.extensions.dependencymodel/2.0.3",
        "hashPath": "microsoft.extensions.dependencymodel.2.0.3.nupkg.sha512"
      },
      "Microsoft.Extensions.DiagnosticAdapter/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-b+LG3hhpIrNOAG+5Fxdt25wynlzawteFEuSUblM4a7flLpQpiZ0mAJMBuA+bIluGAfcJnFDTghF8MfE57fR6Hg==",
        "path": "microsoft.extensions.diagnosticadapter/2.0.0",
        "hashPath": "microsoft.extensions.diagnosticadapter.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.FileProviders.Abstractions/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-Z0AK+hmLO33WAXQ5P1uPzhH7z5yjDHX/XnUefXxE//SyvCb9x4cVjND24dT5566t/yzGp8/WLD7EG9KQKZZklQ==",
        "path": "microsoft.extensions.fileproviders.abstractions/2.0.0",
        "hashPath": "microsoft.extensions.fileproviders.abstractions.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.FileProviders.Composite/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-/Q95H1pFJuss7np9Pp6mKxg4ornSrBnrYwNkgHnW+YRqhjfaQLVgL+X+LN95M9YeGPNA4QHJDkbrqQ/n+jYc9g==",
        "path": "microsoft.extensions.fileproviders.composite/2.0.0",
        "hashPath": "microsoft.extensions.fileproviders.composite.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.FileProviders.Embedded/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-A1pniIZjS/8z8HQWIzm/datI6J0X4R9wngmVLGbfZ1LIj78oOR+sdqNHo5yvAwJz38TR9fG2E3b410wuoGxBKw==",
        "path": "microsoft.extensions.fileproviders.embedded/2.0.0",
        "hashPath": "microsoft.extensions.fileproviders.embedded.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.FileProviders.Physical/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-DKO2j2socZbHNCCVEWsLVpB3AQIIzKYFNyITVeWdA1jQ829GJIQf4MUD04+1c+Q2kbK03pIKQZmEy4CGIfgDZw==",
        "path": "microsoft.extensions.fileproviders.physical/2.0.0",
        "hashPath": "microsoft.extensions.fileproviders.physical.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.FileSystemGlobbing/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-UC87vRDUB7/vSaNY/FVhbdAyRkfFBTkYmcUoglxk6TyTojhSqYaG5pZsoP4e1ZuXktFXJXJBTvK8U/QwCo0z3g==",
        "path": "microsoft.extensions.filesystemglobbing/2.0.0",
        "hashPath": "microsoft.extensions.filesystemglobbing.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Hosting.Abstractions/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-A43O0JzdTE+u5t2pFeraN+3fjlV6jcX3Ra5wIscCX1cM2RHDoOLDQmoDpvDti0ct5TsBEDHVTycbyFqtu0fm+Q==",
        "path": "microsoft.extensions.hosting.abstractions/2.0.1",
        "hashPath": "microsoft.extensions.hosting.abstractions.2.0.1.nupkg.sha512"
      },
      "Microsoft.Extensions.Identity.Core/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-2VEghVORmv8FFE1utIcw/7ct8pyzvzst8uELnftf+xKVFiTPYFThlTFzq+ZuVCGgI7r9YayUUdZGuoDFvmJfFA==",
        "path": "microsoft.extensions.identity.core/2.0.1",
        "hashPath": "microsoft.extensions.identity.core.2.0.1.nupkg.sha512"
      },
      "Microsoft.Extensions.Identity.Stores/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-A/sig+Oq5wQ2dUHawd2oH4QMqZVT9LLDZhsWCd+lfLavxEUJ7Lv2KI2wUeP84SQyeJjirsOAet0zkwVMS0nkMw==",
        "path": "microsoft.extensions.identity.stores/2.0.1",
        "hashPath": "microsoft.extensions.identity.stores.2.0.1.nupkg.sha512"
      },
      "Microsoft.Extensions.Localization/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-47oTU1KBYU4xzJZlhQPJRbDCmjokjEtq5Iroy59nAGbPOfUrhBTgp7ALsoba/PVR/gURnosCg0YjHORyijhzUA==",
        "path": "microsoft.extensions.localization/2.0.1",
        "hashPath": "microsoft.extensions.localization.2.0.1.nupkg.sha512"
      },
      "Microsoft.Extensions.Localization.Abstractions/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-A5uClthpWrEtqiK9tqwm8LIW449FLhSPIBs4hU/pINGXGgxqQC4dr2ZW0JmbGe/xL3riU7Me3jYJDR4uznzN7g==",
        "path": "microsoft.extensions.localization.abstractions/2.0.1",
        "hashPath": "microsoft.extensions.localization.abstractions.2.0.1.nupkg.sha512"
      },
      "Microsoft.Extensions.Logging/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-VP10syWV/vxYYMKgZ2eDESmUsz3gPxvBn5J6tkVN8lI4M+dF43RN8fWsEPbcAneDmZrHl3Pv23z05nmyGkJlpg==",
        "path": "microsoft.extensions.logging/2.0.0",
        "hashPath": "microsoft.extensions.logging.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Logging.Abstractions/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-6ZCllUYGFukkymSTx3Yr0G/ajRxoNJp7/FqSxSB4fGISST54ifBhgu4Nc0ItGi3i6DqwuNd8SUyObmiC++AO2Q==",
        "path": "microsoft.extensions.logging.abstractions/2.0.0",
        "hashPath": "microsoft.extensions.logging.abstractions.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Logging.AzureAppServices/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-cxfmUAnNsETcGHlGFpaihN/wILPDD+4p4VrFzcskvOquwMSxt6O6SmPLybnbbvUvs26SCmP7Y4eptjO2ehfduA==",
        "path": "microsoft.extensions.logging.azureappservices/2.0.0",
        "hashPath": "microsoft.extensions.logging.azureappservices.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Logging.Configuration/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-jUjA+ROjh1R1TggLh4aw6PZFxHce4UYeTsX3NUjdrOd9RbuDSzJ8bkNhcPgYjLvoTNIRIlHUSByw3PjBTbxExA==",
        "path": "microsoft.extensions.logging.configuration/2.0.0",
        "hashPath": "microsoft.extensions.logging.configuration.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Logging.Console/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-NBjNp899FW7byDsex2ch/CkwNd2GbuHQIXCbvUVqOzSbnIsYrxOaR//BY2h2apJhnqm10IPLGkcjXxUyfAcIKA==",
        "path": "microsoft.extensions.logging.console/2.0.0",
        "hashPath": "microsoft.extensions.logging.console.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Logging.Debug/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-29Zn5m9yb4NEP+qbeLl+7F2lDskDfrs8NbrM8eJ+k/pYE8JksRUEFxHp1bcpGSfGP9w0pMQMOKrVcwD3u5sPog==",
        "path": "microsoft.extensions.logging.debug/2.0.0",
        "hashPath": "microsoft.extensions.logging.debug.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Logging.EventSource/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-dsEyjnChr3F0rJZFAgfJC6aoIPLHfpBBTw3CYfEMEc7Pv7h0u6RaFO9gAq6dhfeBLhLfn0hyUrGmYIRDpSxs3w==",
        "path": "microsoft.extensions.logging.eventsource/2.0.0",
        "hashPath": "microsoft.extensions.logging.eventsource.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Logging.TraceSource/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-lbNYFjLU4RJvhYtO5jLa+d+T8OC495SkSfXFwFDeR9qtFqhrrCHe8Htjx4wR8HmFqugaJ2Yhzw9AqdvZbEy3Eg==",
        "path": "microsoft.extensions.logging.tracesource/2.0.0",
        "hashPath": "microsoft.extensions.logging.tracesource.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.ObjectPool/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-drOmgNZCJiNEqFM/TvyqwtogS8wqoWGQCW5KB/CVGKL6VXHw8OOMdaHyspp8HPstP9UDnrnuq+8eaCaAcQg6tA==",
        "path": "microsoft.extensions.objectpool/2.0.0",
        "hashPath": "microsoft.extensions.objectpool.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Options/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-sAKBgjl2gWsECBLLR9K54T7/uZaP2n9GhMYHay/oOLfvpvX0+iNAlQ2NJgVE352C9Fs5CDV3VbNTK8T2aNKQFA==",
        "path": "microsoft.extensions.options/2.0.0",
        "hashPath": "microsoft.extensions.options.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Options.ConfigurationExtensions/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-Y/lGICwO27fCkQRK3tZseVzFjZaxfGmui990E67sB4MuiPzdJHnJDS/BeYWrHShSSBgCl4KyKRx4ux686fftPg==",
        "path": "microsoft.extensions.options.configurationextensions/2.0.0",
        "hashPath": "microsoft.extensions.options.configurationextensions.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.PlatformAbstractions/1.1.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-H6ZsQzxYw/6k2DfEQRXdC+vQ6obd6Uba3uGJrnJ2vG4PRXjQZ7seB13JdCfE72abp8E6Fk3gGgDzfJiLZi5ZpQ==",
        "path": "microsoft.extensions.platformabstractions/1.1.0",
        "hashPath": "microsoft.extensions.platformabstractions.1.1.0.nupkg.sha512"
      },
      "Microsoft.Extensions.Primitives/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-ukg53qNlqTrK38WA30b5qhw0GD7y3jdI9PHHASjdKyTcBHTevFM2o23tyk3pWCgAV27Bbkm+CPQ2zUe1ZOuYSA==",
        "path": "microsoft.extensions.primitives/2.0.0",
        "hashPath": "microsoft.extensions.primitives.2.0.0.nupkg.sha512"
      },
      "Microsoft.Extensions.WebEncoders/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-5lXmAmfMaVssZwruaPM5hgk7QfzL1dfAaPEw9Ex24wt/D3EPRt7kOqsZoJP3IhVBoccjsTj8DsFJHtQ8bZIFkA==",
        "path": "microsoft.extensions.webencoders/2.0.0",
        "hashPath": "microsoft.extensions.webencoders.2.0.0.nupkg.sha512"
      },
      "Microsoft.IdentityModel.Clients.ActiveDirectory/3.14.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-GlyzF4FWsn3LXC6rrzw6Yg2nMbGLx+7JS9a6Z8n7jhqPa5cMiNEX01tBUO1v3A9p1mk+gQzHWJheAsSpOLp/ew==",
        "path": "microsoft.identitymodel.clients.activedirectory/3.14.1",
        "hashPath": "microsoft.identitymodel.clients.activedirectory.3.14.1.nupkg.sha512"
      },
      "Microsoft.IdentityModel.Logging/1.1.4": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-j7t22EsDOuo0IXqAbp6ijdB1GuaY8cu3YoPNZpymOhUMTVC+wRTV0IHqxL31HacCnJHU/igsqe70fDKZgZu3oA==",
        "path": "microsoft.identitymodel.logging/1.1.4",
        "hashPath": "microsoft.identitymodel.logging.1.1.4.nupkg.sha512"
      },
      "Microsoft.IdentityModel.Protocols/2.1.4": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-9aefRN9sL8XZo90Aix88IHHpAvfBl6UOiYpcKHiXbCYE2nB+zA3B8dZdNMOUH4pqXdnpYrHRDQZ2k7A4/CUgTQ==",
        "path": "microsoft.identitymodel.protocols/2.1.4",
        "hashPath": "microsoft.identitymodel.protocols.2.1.4.nupkg.sha512"
      },
      "Microsoft.IdentityModel.Protocols.OpenIdConnect/2.1.4": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-LF8JcG9BqGRwVjhu/IebuZQer6TJGDv2uxNnmg2Zkzh/d+MIC1ShsC1U3U7pVaw03SKyXmCgYm+JG0WM0mcOUw==",
        "path": "microsoft.identitymodel.protocols.openidconnect/2.1.4",
        "hashPath": "microsoft.identitymodel.protocols.openidconnect.2.1.4.nupkg.sha512"
      },
      "Microsoft.IdentityModel.Tokens/5.1.4": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-SsJbZVPvjSlKFDAQmR2wpL6ZD/vCFlIsf0jxRlBJwyzKXZy3Wi/Xo+fE2MzAerLsJgG1UCdtplRwqDyq1euayw==",
        "path": "microsoft.identitymodel.tokens/5.1.4",
        "hashPath": "microsoft.identitymodel.tokens.5.1.4.nupkg.sha512"
      },
      "Microsoft.Net.Http.Headers/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-A61ddihPbPy9764AtCysy73oj/PA/9hsv21mXLX5QJYp9lkeyygTufTSGUmh9hz/SiZKy5GBreSlgD2Tm2ab9w==",
        "path": "microsoft.net.http.headers/2.0.1",
        "hashPath": "microsoft.net.http.headers.2.0.1.nupkg.sha512"
      },
      "Microsoft.NETCore.Targets/1.1.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-aOZA3BWfz9RXjpzt0sRJJMjAscAUm3Hoa4UWAfceV9UTYxgwZ1lZt5nO2myFf+/jetYQo4uTP7zS8sJY67BBxg==",
        "path": "microsoft.netcore.targets/1.1.0",
        "hashPath": "microsoft.netcore.targets.1.1.0.nupkg.sha512"
      },
      "Microsoft.Rest.ClientRuntime/2.3.8": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-Hj96LBoCwKY2VQKfSCVGGPV1sSumVjuYnrlpBwL4JSTnSK4b6ZxjLtXj8LgmKav8xJ2gps+UN7eI3hHVFKvBFw==",
        "path": "microsoft.rest.clientruntime/2.3.8",
        "hashPath": "microsoft.rest.clientruntime.2.3.8.nupkg.sha512"
      },
      "Microsoft.Rest.ClientRuntime.Azure/3.3.7": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-6u8JIuvrztse4tPOcvNzAJuzGBP0uY+Ijggk8ZYhp0siGEZ1XfZylf1vpNGUicvwcrhhoIgDW73Z1L6QGssr2g==",
        "path": "microsoft.rest.clientruntime.azure/3.3.7",
        "hashPath": "microsoft.rest.clientruntime.azure.3.3.7.nupkg.sha512"
      },
      "Microsoft.VisualStudio.Web.BrowserLink/2.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-StbHXXY9tIPdcr6VbZRtn3nyZaBSMZnOVqJqjrXcTYjn3jdjLkgK+I67jNm4yREoKpjK+j71XQOS8sc8+tN8hQ==",
        "path": "microsoft.visualstudio.web.browserlink/2.0.1",
        "hashPath": "microsoft.visualstudio.web.browserlink.2.0.1.nupkg.sha512"
      },
      "Microsoft.VisualStudio.Web.CodeGeneration/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-hyPNYu/jZIXfH/ymxQHRxkB2qb8qpQnb9R+sajyxCBA66XjYJsh+2zROmR0ZOgIXawNuEVcjFnq+CAtGLdO/GQ==",
        "path": "microsoft.visualstudio.web.codegeneration/2.0.2",
        "hashPath": "microsoft.visualstudio.web.codegeneration.2.0.2.nupkg.sha512"
      },
      "Microsoft.VisualStudio.Web.CodeGeneration.Contracts/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-AJfxuwaqbTl2ITFR99y8PZx08ErXCPDjJLLzr0uNnq9MOIIvDcfLQgbaxOgae05RL/xTl936LHQFXAAJchArbw==",
        "path": "microsoft.visualstudio.web.codegeneration.contracts/2.0.2",
        "hashPath": "microsoft.visualstudio.web.codegeneration.contracts.2.0.2.nupkg.sha512"
      },
      "Microsoft.VisualStudio.Web.CodeGeneration.Core/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-of36Gj6SaoQ3qvrt+VQsycOUGSW+WZtpvJH1yvDaolXdWiNW254yC4Gd1AM0x3+bKQqrkJYoVu2LaloWvYYa8A==",
        "path": "microsoft.visualstudio.web.codegeneration.core/2.0.2",
        "hashPath": "microsoft.visualstudio.web.codegeneration.core.2.0.2.nupkg.sha512"
      },
      "Microsoft.VisualStudio.Web.CodeGeneration.Design/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-jhtIx2Qj9muaoLnYSkry4imTHCLvQ2wQTXVWf+l7YaneFkowcqAzdWnqXwYnART4UhWxlXbQtCxrGcyJgaL4hg==",
        "path": "microsoft.visualstudio.web.codegeneration.design/2.0.2",
        "hashPath": "microsoft.visualstudio.web.codegeneration.design.2.0.2.nupkg.sha512"
      },
      "Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-xMGyLe+IvlVZMwrcaZd2ztZUDq4OAB5pu1JhV0hnqXae7Rg9SFp8XqqVgvEbeXv37UWDrAJ3aaiDEQP/jPO0Yg==",
        "path": "microsoft.visualstudio.web.codegeneration.entityframeworkcore/2.0.2",
        "hashPath": "microsoft.visualstudio.web.codegeneration.entityframeworkcore.2.0.2.nupkg.sha512"
      },
      "Microsoft.VisualStudio.Web.CodeGeneration.Templating/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-XGBMEv0Co6Cs7Axoow9AlMWZtqH5WCJQwQyFgNCgxo2QysDdLur6M2WHsvuShA8zAIjJu0+JQzOzeDd6jlP4fA==",
        "path": "microsoft.visualstudio.web.codegeneration.templating/2.0.2",
        "hashPath": "microsoft.visualstudio.web.codegeneration.templating.2.0.2.nupkg.sha512"
      },
      "Microsoft.VisualStudio.Web.CodeGeneration.Utils/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-iHFv23BBc2+PDu2hHf7PMIedeZn9l8azlnrew0TgDj6eBp5yRd//1PSlhp81gYyPKJoi8BfJYhqVH6ZIuMCN8g==",
        "path": "microsoft.visualstudio.web.codegeneration.utils/2.0.2",
        "hashPath": "microsoft.visualstudio.web.codegeneration.utils.2.0.2.nupkg.sha512"
      },
      "Microsoft.VisualStudio.Web.CodeGenerators.Mvc/2.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-+H5eqw+SiEZvTzKDJXSUVSQvH/wYN0iSfftA0UL6OgJw+zLfPt6HQ5BZNSrCOBBobDSD/6eBC6PTMzZgsZTUmA==",
        "path": "microsoft.visualstudio.web.codegenerators.mvc/2.0.2",
        "hashPath": "microsoft.visualstudio.web.codegenerators.mvc.2.0.2.nupkg.sha512"
      },
      "Microsoft.Win32.Primitives/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-9ZQKCWxH7Ijp9BfahvL2Zyf1cJIk8XYLF6Yjzr2yi0b2cOut/HQ31qf1ThHAgCc3WiZMdnWcfJCgN82/0UunxA==",
        "path": "microsoft.win32.primitives/4.3.0",
        "hashPath": "microsoft.win32.primitives.4.3.0.nupkg.sha512"
      },
      "Microsoft.Win32.Registry/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-dA36TlNVn/XfrZtmf0fiI/z1nd3Wfp2QVzTdj26pqgP9LFWq0i1hYEUAW50xUjGFYn1+/cP3KGuxT2Yn1OUNBQ==",
        "path": "microsoft.win32.registry/4.4.0",
        "hashPath": "microsoft.win32.registry.4.4.0.nupkg.sha512"
      },
      "Newtonsoft.Json/10.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-ebWzW9j2nwxQeBo59As2TYn7nYr9BHicqqCwHOD1Vdo+50HBtLPuqdiCYJcLdTRknpYis/DSEOQz5KmZxwrIAg==",
        "path": "newtonsoft.json/10.0.1",
        "hashPath": "newtonsoft.json.10.0.1.nupkg.sha512"
      },
      "Newtonsoft.Json.Bson/1.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-5PYT/IqQ+UK31AmZiSS102R6EsTo+LGTSI8bp7WAUqDKaF4wHXD8U9u4WxTI1vc64tYi++8p3dk3WWNqPFgldw==",
        "path": "newtonsoft.json.bson/1.0.1",
        "hashPath": "newtonsoft.json.bson.1.0.1.nupkg.sha512"
      },
      "NuGet.Frameworks/4.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-WCkN68c8q+USG+Ot1MmBDH+9DUo5dk7UB0QDMiwCYhrH7ZoFLKFGGNzJ8C3LTR1DvB1LW9BOxKeznnZznKiCTA==",
        "path": "nuget.frameworks/4.0.0",
        "hashPath": "nuget.frameworks.4.0.0.nupkg.sha512"
      },
      "popper.js/1.12.9": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-WfoI8YXFx31zr8w6AvYMmqKihR3a/wLc5wBhu41ApgBukTM8C2UHNSRFrO6485SDQ/HKoSn9yiEMgfBx1LVNNw==",
        "path": "popper.js/1.12.9",
        "hashPath": "popper.js.1.12.9.nupkg.sha512"
      },
      "Remotion.Linq/2.1.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-IJn0BqkvwEDpP+2qjvci7n4/a9f7DhKESLWb2/uG4xQh3rTkGTBUz69bI4IivCoKkTFAqjXxYDZw2K/npohjsw==",
        "path": "remotion.linq/2.1.1",
        "hashPath": "remotion.linq.2.1.1.nupkg.sha512"
      },
      "runtime.debian.8-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-HdSSp5MnJSsg08KMfZThpuLPJpPwE5hBXvHwoKWosyHHfe8Mh5WKT0ylEOf6yNzX6Ngjxe4Whkafh5q7Ymac4Q==",
        "path": "runtime.debian.8-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "hashPath": "runtime.debian.8-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512"
      },
      "runtime.fedora.23-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-+yH1a49wJMy8Zt4yx5RhJrxO/DBDByAiCzNwiETI+1S4mPdCu0OY4djdciC7Vssk0l22wQaDLrXxXkp+3+7bVA==",
        "path": "runtime.fedora.23-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "hashPath": "runtime.fedora.23-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512"
      },
      "runtime.fedora.24-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-c3YNH1GQJbfIPJeCnr4avseugSqPrxwIqzthYyZDN6EuOyNOzq+y2KSUfRcXauya1sF4foESTgwM5e1A8arAKw==",
        "path": "runtime.fedora.24-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "hashPath": "runtime.fedora.24-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512"
      },
      "runtime.native.System/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-c/qWt2LieNZIj1jGnVNsE2Kl23Ya2aSTBuXMD6V7k9KWr6l16Tqdwq+hJScEpWER9753NWC8h96PaVNY5Ld7Jw==",
        "path": "runtime.native.system/4.3.0",
        "hashPath": "runtime.native.system.4.3.0.nupkg.sha512"
      },
      "runtime.native.System.Data.SqlClient.sni/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-A8v6PGmk+UGbfWo5Ixup0lPM4swuSwOiayJExZwKIOjTlFFQIsu3QnDXECosBEyrWSPryxBVrdqtJyhK3BaupQ==",
        "path": "runtime.native.system.data.sqlclient.sni/4.4.0",
        "hashPath": "runtime.native.system.data.sqlclient.sni.4.4.0.nupkg.sha512"
      },
      "runtime.native.System.IO.Compression/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-INBPonS5QPEgn7naufQFXJEp3zX6L4bwHgJ/ZH78aBTpeNfQMtf7C6VrAFhlq2xxWBveIOWyFzQjJ8XzHMhdOQ==",
        "path": "runtime.native.system.io.compression/4.3.0",
        "hashPath": "runtime.native.system.io.compression.4.3.0.nupkg.sha512"
      },
      "runtime.native.System.Net.Http/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-ZVuZJqnnegJhd2k/PtAbbIcZ3aZeITq3sj06oKfMBSfphW3HDmk/t4ObvbOk/JA/swGR0LNqMksAh/f7gpTROg==",
        "path": "runtime.native.system.net.http/4.3.0",
        "hashPath": "runtime.native.system.net.http.4.3.0.nupkg.sha512"
      },
      "runtime.native.System.Net.Security/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-M2nN92ePS8BgQ2oi6Jj3PlTUzadYSIWLdZrHY1n1ZcW9o4wAQQ6W+aQ2lfq1ysZQfVCgDwY58alUdowrzezztg==",
        "path": "runtime.native.system.net.security/4.3.0",
        "hashPath": "runtime.native.system.net.security.4.3.0.nupkg.sha512"
      },
      "runtime.native.System.Security.Cryptography.Apple/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-DloMk88juo0OuOWr56QG7MNchmafTLYWvABy36izkrLI5VledI0rq28KGs1i9wbpeT9NPQrx/wTf8U2vazqQ3Q==",
        "path": "runtime.native.system.security.cryptography.apple/4.3.0",
        "hashPath": "runtime.native.system.security.cryptography.apple.4.3.0.nupkg.sha512"
      },
      "runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-NS1U+700m4KFRHR5o4vo9DSlTmlCKu/u7dtE5sUHVIPB+xpXxYQvgBgA6wEIeCz6Yfn0Z52/72WYsToCEPJnrw==",
        "path": "runtime.native.system.security.cryptography.openssl/4.3.0",
        "hashPath": "runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512"
      },
      "runtime.opensuse.13.2-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-b3pthNgxxFcD+Pc0WSEoC0+md3MyhRS6aCEeenvNE3Fdw1HyJ18ZhRFVJJzIeR/O/jpxPboB805Ho0T3Ul7w8A==",
        "path": "runtime.opensuse.13.2-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "hashPath": "runtime.opensuse.13.2-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512"
      },
      "runtime.opensuse.42.1-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-KeLz4HClKf+nFS7p/6Fi/CqyLXh81FpiGzcmuS8DGi9lUqSnZ6Es23/gv2O+1XVGfrbNmviF7CckBpavkBoIFQ==",
        "path": "runtime.opensuse.42.1-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "hashPath": "runtime.opensuse.42.1-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512"
      },
      "runtime.osx.10.10-x64.runtime.native.System.Security.Cryptography.Apple/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-kVXCuMTrTlxq4XOOMAysuNwsXWpYeboGddNGpIgNSZmv1b6r/s/DPk0fYMB7Q5Qo4bY68o48jt4T4y5BVecbCQ==",
        "path": "runtime.osx.10.10-x64.runtime.native.system.security.cryptography.apple/4.3.0",
        "hashPath": "runtime.osx.10.10-x64.runtime.native.system.security.cryptography.apple.4.3.0.nupkg.sha512"
      },
      "runtime.osx.10.10-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-X7IdhILzr4ROXd8mI1BUCQMSHSQwelUlBjF1JyTKCjXaOGn2fB4EKBxQbCK2VjO3WaWIdlXZL3W6TiIVnrhX4g==",
        "path": "runtime.osx.10.10-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "hashPath": "runtime.osx.10.10-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512"
      },
      "runtime.rhel.7-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-nyFNiCk/r+VOiIqreLix8yN+q3Wga9+SE8BCgkf+2BwEKiNx6DyvFjCgkfV743/grxv8jHJ8gUK4XEQw7yzRYg==",
        "path": "runtime.rhel.7-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "hashPath": "runtime.rhel.7-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512"
      },
      "runtime.ubuntu.14.04-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-ytoewC6wGorL7KoCAvRfsgoJPJbNq+64k2SqW6JcOAebWsFUvCCYgfzQMrnpvPiEl4OrblUlhF2ji+Q1+SVLrQ==",
        "path": "runtime.ubuntu.14.04-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "hashPath": "runtime.ubuntu.14.04-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512"
      },
      "runtime.ubuntu.16.04-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-I8bKw2I8k58Wx7fMKQJn2R8lamboCAiHfHeV/pS65ScKWMMI0+wJkLYlEKvgW1D/XvSl/221clBoR2q9QNNM7A==",
        "path": "runtime.ubuntu.16.04-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "hashPath": "runtime.ubuntu.16.04-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512"
      },
      "runtime.ubuntu.16.10-x64.runtime.native.System.Security.Cryptography.OpenSsl/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-VB5cn/7OzUfzdnC8tqAIMQciVLiq2epm2NrAm1E9OjNRyG4lVhfR61SMcLizejzQP8R8Uf/0l5qOIbUEi+RdEg==",
        "path": "runtime.ubuntu.16.10-x64.runtime.native.system.security.cryptography.openssl/4.3.0",
        "hashPath": "runtime.ubuntu.16.10-x64.runtime.native.system.security.cryptography.openssl.4.3.0.nupkg.sha512"
      },
      "runtime.win-arm64.runtime.native.System.Data.SqlClient.sni/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-LbrynESTp3bm5O/+jGL8v0Qg5SJlTV08lpIpFesXjF6uGNMWqFnUQbYBJwZTeua6E/Y7FIM1C54Ey1btLWupdg==",
        "path": "runtime.win-arm64.runtime.native.system.data.sqlclient.sni/4.4.0",
        "hashPath": "runtime.win-arm64.runtime.native.system.data.sqlclient.sni.4.4.0.nupkg.sha512"
      },
      "runtime.win-x64.runtime.native.System.Data.SqlClient.sni/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-38ugOfkYJqJoX9g6EYRlZB5U2ZJH51UP8ptxZgdpS07FgOEToV+lS11ouNK2PM12Pr6X/PpT5jK82G3DwH/SxQ==",
        "path": "runtime.win-x64.runtime.native.system.data.sqlclient.sni/4.4.0",
        "hashPath": "runtime.win-x64.runtime.native.system.data.sqlclient.sni.4.4.0.nupkg.sha512"
      },
      "runtime.win-x86.runtime.native.System.Data.SqlClient.sni/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-YhEdSQUsTx+C8m8Bw7ar5/VesXvCFMItyZF7G1AUY+OM0VPZUOeAVpJ4Wl6fydBGUYZxojTDR3I6Bj/+BPkJNA==",
        "path": "runtime.win-x86.runtime.native.system.data.sqlclient.sni/4.4.0",
        "hashPath": "runtime.win-x86.runtime.native.system.data.sqlclient.sni.4.4.0.nupkg.sha512"
      },
      "SQLitePCLRaw.bundle_green/1.1.7": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-Kw+n4CUhQ8S4YAPmpRUldO8S7c4LU7HHukJF0v5Sfggf8Ia9YVdIh0dYkMvKvS+DTX+OBORSMqPM0CGfAzFtVA==",
        "path": "sqlitepclraw.bundle_green/1.1.7",
        "hashPath": "sqlitepclraw.bundle_green.1.1.7.nupkg.sha512"
      },
      "SQLitePCLRaw.core/1.1.7": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-u9k9ZFkyTU6CVyXWpRuuXOvKi/cy/xt1oGKVSW8aUKcTL4RdH34yFNtVykEeiR68ojIEvmoZfL51h/xx2IQk5g==",
        "path": "sqlitepclraw.core/1.1.7",
        "hashPath": "sqlitepclraw.core.1.1.7.nupkg.sha512"
      },
      "SQLitePCLRaw.lib.e_sqlite3.linux/1.1.7": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-KRqMd1qLwJ4pzPybj8q95s+wV6jby5F0O/rp0vw3wa2Z2wHxRm0VqxS2Sejlr7Ctz+LxSr8DpNg1l1u6n/PAPA==",
        "path": "sqlitepclraw.lib.e_sqlite3.linux/1.1.7",
        "hashPath": "sqlitepclraw.lib.e_sqlite3.linux.1.1.7.nupkg.sha512"
      },
      "SQLitePCLRaw.lib.e_sqlite3.osx/1.1.7": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-hdZx1DKHbDi4li6abmJ+A29mxY8D6BcM0s8VMT8p4MWEyrj54CZFUm402jTV6OgZCsFGkbRFnuFdBXf4vSDO7g==",
        "path": "sqlitepclraw.lib.e_sqlite3.osx/1.1.7",
        "hashPath": "sqlitepclraw.lib.e_sqlite3.osx.1.1.7.nupkg.sha512"
      },
      "SQLitePCLRaw.lib.e_sqlite3.v110_xp/1.1.7": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-roIdTH4a4iFa08HOwTWnzj2QYBIpSZRYfLSvHjtbH67I4DSWregrd4jkSnoOuwC5GHG08FNahBfEx3HAsVqW+g==",
        "path": "sqlitepclraw.lib.e_sqlite3.v110_xp/1.1.7",
        "hashPath": "sqlitepclraw.lib.e_sqlite3.v110_xp.1.1.7.nupkg.sha512"
      },
      "SQLitePCLRaw.provider.e_sqlite3.netstandard11/1.1.7": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-Zdug2wETm6847337EtD8MoCAtOdwM6prEXL/UsJ97Zxvoeyk/gUpdtuFNBxgJzceuty0jymjxm5yur5QajdApg==",
        "path": "sqlitepclraw.provider.e_sqlite3.netstandard11/1.1.7",
        "hashPath": "sqlitepclraw.provider.e_sqlite3.netstandard11.1.1.7.nupkg.sha512"
      },
      "StackExchange.Redis.StrongName/1.2.4": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-qrfSB1BnmM17V20A4yvvNA0HNiDgnBd/CcjaeMKMA4qtup1uuBUMyhl20oj31fRVo71E/fXTbmQCuM9ytBJs6w==",
        "path": "stackexchange.redis.strongname/1.2.4",
        "hashPath": "stackexchange.redis.strongname.1.2.4.nupkg.sha512"
      },
      "System.AppContext/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-fKC+rmaLfeIzUhagxY17Q9siv/sPrjjKcfNg1Ic8IlQkZLipo8ljcaZQu4VtI4Jqbzjc2VTjzGLF6WmsRXAEgA==",
        "path": "system.appcontext/4.3.0",
        "hashPath": "system.appcontext.4.3.0.nupkg.sha512"
      },
      "System.Buffers/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-AwarXzzoDwX6BgrhjoJsk6tUezZEozOT5Y9QKF94Gl4JK91I4PIIBkBco9068Y9/Dra8Dkbie99kXB8+1BaYKw==",
        "path": "system.buffers/4.4.0",
        "hashPath": "system.buffers.4.4.0.nupkg.sha512"
      },
      "System.Collections/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-3Dcj85/TBdVpL5Zr+gEEBUuFe2icOnLalmEh9hfck1PTYbbyWuZgh4fmm2ysCLTrqLQw6t3TgTyJ+VLp+Qb+Lw==",
        "path": "system.collections/4.3.0",
        "hashPath": "system.collections.4.3.0.nupkg.sha512"
      },
      "System.Collections.Concurrent/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-ztl69Xp0Y/UXCL+3v3tEU+lIy+bvjKNUmopn1wep/a291pVPK7dxBd6T7WnlQqRog+d1a/hSsgRsmFnIBKTPLQ==",
        "path": "system.collections.concurrent/4.3.0",
        "hashPath": "system.collections.concurrent.4.3.0.nupkg.sha512"
      },
      "System.Collections.Immutable/1.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-71hw5RUJRu5+q/geUY69gpXD8Upd12cH+F3MwpXV2zle7Bqqkrmc1JblOTuvUcgmdnUtQvBlV5e1d6RH+H2lvA==",
        "path": "system.collections.immutable/1.4.0",
        "hashPath": "system.collections.immutable.1.4.0.nupkg.sha512"
      },
      "System.Collections.NonGeneric/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-prtjIEMhGUnQq6RnPEYLpFt8AtLbp9yq2zxOSrY7KJJZrw25Fi97IzBqY7iqssbM61Ek5b8f3MG/sG1N2sN5KA==",
        "path": "system.collections.nongeneric/4.3.0",
        "hashPath": "system.collections.nongeneric.4.3.0.nupkg.sha512"
      },
      "System.Collections.Specialized/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-Epx8PoVZR0iuOnJJDzp7pWvdfMMOAvpUo95pC4ScH2mJuXkKA2Y4aR3cG9qt2klHgSons1WFh4kcGW7cSXvrxg==",
        "path": "system.collections.specialized/4.3.0",
        "hashPath": "system.collections.specialized.4.3.0.nupkg.sha512"
      },
      "System.ComponentModel/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-VyGn1jGRZVfxnh8EdvDCi71v3bMXrsu8aYJOwoV7SNDLVhiEqwP86pPMyRGsDsxhXAm2b3o9OIqeETfN5qfezw==",
        "path": "system.componentmodel/4.3.0",
        "hashPath": "system.componentmodel.4.3.0.nupkg.sha512"
      },
      "System.ComponentModel.Annotations/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-29K3DQ+IGU7LBaMjTo7SI7T7X/tsMtLvz1p56LJ556Iu0Dw3pKZw5g8yCYCWMRxrOF0Hr0FU0FwW0o42y2sb3A==",
        "path": "system.componentmodel.annotations/4.4.0",
        "hashPath": "system.componentmodel.annotations.4.4.0.nupkg.sha512"
      },
      "System.ComponentModel.Primitives/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-j8GUkCpM8V4d4vhLIIoBLGey2Z5bCkMVNjEZseyAlm4n5arcsJOeI3zkUP+zvZgzsbLTYh4lYeP/ZD/gdIAPrw==",
        "path": "system.componentmodel.primitives/4.3.0",
        "hashPath": "system.componentmodel.primitives.4.3.0.nupkg.sha512"
      },
      "System.ComponentModel.TypeConverter/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-16pQ6P+EdhcXzPiEK4kbA953Fu0MNG2ovxTZU81/qsCd1zPRsKc3uif5NgvllCY598k6bI0KUyKW8fanlfaDQg==",
        "path": "system.componentmodel.typeconverter/4.3.0",
        "hashPath": "system.componentmodel.typeconverter.4.3.0.nupkg.sha512"
      },
      "System.Composition/1.0.31": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-I+D26qpYdoklyAVUdqwUBrEIckMNjAYnuPJy/h9dsQItpQwVREkDFs4b4tkBza0kT2Yk48Lcfsv2QQ9hWsh9Iw==",
        "path": "system.composition/1.0.31",
        "hashPath": "system.composition.1.0.31.nupkg.sha512"
      },
      "System.Composition.AttributedModel/1.0.31": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-NHWhkM3ZkspmA0XJEsKdtTt1ViDYuojgSND3yHhTzwxepiwqZf+BCWuvCbjUt4fe0NxxQhUDGJ5km6sLjo9qnQ==",
        "path": "system.composition.attributedmodel/1.0.31",
        "hashPath": "system.composition.attributedmodel.1.0.31.nupkg.sha512"
      },
      "System.Composition.Convention/1.0.31": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-GLjh2Ju71k6C0qxMMtl4efHa68NmWeIUYh4fkUI8xbjQrEBvFmRwMDFcylT8/PR9SQbeeL48IkFxU/+gd0nYEQ==",
        "path": "system.composition.convention/1.0.31",
        "hashPath": "system.composition.convention.1.0.31.nupkg.sha512"
      },
      "System.Composition.Hosting/1.0.31": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-fN1bT4RX4vUqjbgoyuJFVUizAl2mYF5VAb+bVIxIYZSSc0BdnX+yGAxcavxJuDDCQ1K+/mdpgyEFc8e9ikjvrg==",
        "path": "system.composition.hosting/1.0.31",
        "hashPath": "system.composition.hosting.1.0.31.nupkg.sha512"
      },
      "System.Composition.Runtime/1.0.31": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-0LEJN+2NVM89CE4SekDrrk5tHV5LeATltkp+9WNYrR+Huiyt0vaCqHbbHtVAjPyeLWIc8dOz/3kthRBj32wGQg==",
        "path": "system.composition.runtime/1.0.31",
        "hashPath": "system.composition.runtime.1.0.31.nupkg.sha512"
      },
      "System.Composition.TypedParts/1.0.31": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-0Zae/FtzeFgDBBuILeIbC/T9HMYbW4olAmi8XqqAGosSOWvXfiQLfARZEhiGd0LVXaYgXr0NhxiU1LldRP1fpQ==",
        "path": "system.composition.typedparts/1.0.31",
        "hashPath": "system.composition.typedparts.1.0.31.nupkg.sha512"
      },
      "System.Console/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-DHDrIxiqk1h03m6khKWV2X8p/uvN79rgSqpilL6uzpmSfxfU5ng8VcPtW4qsDsQDHiTv6IPV9TmD5M/vElPNLg==",
        "path": "system.console/4.3.0",
        "hashPath": "system.console.4.3.0.nupkg.sha512"
      },
      "System.Data.SqlClient/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-fxb9ghn1k1Ua7FFdlvtiBOD4/PsQvD/fk2KnhS+FK7VC6OggEx6P+lP1P0+KMb5V2dqS1+FbR7HCenoqzJMNIA==",
        "path": "system.data.sqlclient/4.4.0",
        "hashPath": "system.data.sqlclient.4.4.0.nupkg.sha512"
      },
      "System.Diagnostics.Contracts/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-eelRRbnm+OloiQvp9CXS0ixjNQldjjkHO4iIkR5XH2VIP8sUB/SIpa1TdUW6/+HDcQ+MlhP3pNa1u5SbzYuWGA==",
        "path": "system.diagnostics.contracts/4.3.0",
        "hashPath": "system.diagnostics.contracts.4.3.0.nupkg.sha512"
      },
      "System.Diagnostics.Debug/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-ZUhUOdqmaG5Jk3Xdb8xi5kIyQYAA4PnTNlHx1mu9ZY3qv4ELIdKbnL/akbGaKi2RnNUWaZsAs31rvzFdewTj2g==",
        "path": "system.diagnostics.debug/4.3.0",
        "hashPath": "system.diagnostics.debug.4.3.0.nupkg.sha512"
      },
      "System.Diagnostics.DiagnosticSource/4.4.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-U/KcC19fyLsPN1GLmeU2zQq15MMVcPwMOYPADVo1+WIoJpvMHxrzvl+BLLZwTEZSneGwaPFZ0aWr0nJ7B7LSdA==",
        "path": "system.diagnostics.diagnosticsource/4.4.1",
        "hashPath": "system.diagnostics.diagnosticsource.4.4.1.nupkg.sha512"
      },
      "System.Diagnostics.FileVersionInfo/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-omCF64wzQ3Q2CeIqkD6lmmxeMZtGHUmzgFMPjfVaOsyqpR66p/JaZzManMw1s33osoAb5gqpncsjie67+yUPHQ==",
        "path": "system.diagnostics.fileversioninfo/4.3.0",
        "hashPath": "system.diagnostics.fileversioninfo.4.3.0.nupkg.sha512"
      },
      "System.Diagnostics.StackTrace/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-BiHg0vgtd35/DM9jvtaC1eKRpWZxr0gcQd643ABG7GnvSlf5pOkY2uyd42mMOJoOmKvnpNj0F4tuoS1pacTwYw==",
        "path": "system.diagnostics.stacktrace/4.3.0",
        "hashPath": "system.diagnostics.stacktrace.4.3.0.nupkg.sha512"
      },
      "System.Diagnostics.Tools/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-UUvkJfSYJMM6x527dJg2VyWPSRqIVB0Z7dbjHst1zmwTXz5CcXSYJFWRpuigfbO1Lf7yfZiIaEUesfnl/g5EyA==",
        "path": "system.diagnostics.tools/4.3.0",
        "hashPath": "system.diagnostics.tools.4.3.0.nupkg.sha512"
      },
      "System.Diagnostics.Tracing/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-rswfv0f/Cqkh78rA5S8eN8Neocz234+emGCtTF3lxPY96F+mmmUen6tbn0glN6PMvlKQb9bPAY5e9u7fgPTkKw==",
        "path": "system.diagnostics.tracing/4.3.0",
        "hashPath": "system.diagnostics.tracing.4.3.0.nupkg.sha512"
      },
      "System.Dynamic.Runtime/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-SNVi1E/vfWUAs/WYKhE9+qlS6KqK0YVhnlT0HQtr8pMIA8YX3lwy3uPMownDwdYISBdmAF/2holEIldVp85Wag==",
        "path": "system.dynamic.runtime/4.3.0",
        "hashPath": "system.dynamic.runtime.4.3.0.nupkg.sha512"
      },
      "System.Globalization/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-kYdVd2f2PAdFGblzFswE4hkNANJBKRmsfa2X5LG2AcWE1c7/4t0pYae1L8vfZ5xvE2nK/R9JprtToA61OSHWIg==",
        "path": "system.globalization/4.3.0",
        "hashPath": "system.globalization.4.3.0.nupkg.sha512"
      },
      "System.Globalization.Calendars/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-GUlBtdOWT4LTV3I+9/PJW+56AnnChTaOqqTLFtdmype/L500M2LIyXgmtd9X2P2VOkmJd5c67H5SaC2QcL1bFA==",
        "path": "system.globalization.calendars/4.3.0",
        "hashPath": "system.globalization.calendars.4.3.0.nupkg.sha512"
      },
      "System.Globalization.Extensions/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-FhKmdR6MPG+pxow6wGtNAWdZh7noIOpdD5TwQ3CprzgIE1bBBoim0vbR1+AWsWjQmU7zXHgQo4TWSP6lCeiWcQ==",
        "path": "system.globalization.extensions/4.3.0",
        "hashPath": "system.globalization.extensions.4.3.0.nupkg.sha512"
      },
      "System.IdentityModel.Tokens.Jwt/5.1.4": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-hLUU1N99aL9uyxiTraBnCKlpUKsbP/+5ygD7cswspH9/+M7fAAL0hRzt2aA4w7VEQlSSiu8j+xWFk3NRcqhfQQ==",
        "path": "system.identitymodel.tokens.jwt/5.1.4",
        "hashPath": "system.identitymodel.tokens.jwt.5.1.4.nupkg.sha512"
      },
      "System.Interactive.Async/3.1.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-hZccYiIE5RS1/J9Tb/BNtosAGVggdlsJm4Ojdu+gDV0p4AIi+LUfUogMKkRacljQEJd2AG6vYzvcjhQFkqoZmw==",
        "path": "system.interactive.async/3.1.1",
        "hashPath": "system.interactive.async.3.1.1.nupkg.sha512"
      },
      "System.IO/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-3qjaHvxQPDpSOYICjUoTsmoq5u6QJAFRUITgeT/4gqkF1bajbSmb1kwSxEA8AHlofqgcKJcM8udgieRNhaJ5Cg==",
        "path": "system.io/4.3.0",
        "hashPath": "system.io.4.3.0.nupkg.sha512"
      },
      "System.IO.Compression/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-YHndyoiV90iu4iKG115ibkhrG+S3jBm8Ap9OwoUAzO5oPDAWcr0SFwQFm0HjM8WkEZWo0zvLTyLmbvTkW1bXgg==",
        "path": "system.io.compression/4.3.0",
        "hashPath": "system.io.compression.4.3.0.nupkg.sha512"
      },
      "System.IO.FileSystem/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-3wEMARTnuio+ulnvi+hkRNROYwa1kylvYahhcLk4HSoVdl+xxTFVeVlYOfLwrDPImGls0mDqbMhrza8qnWPTdA==",
        "path": "system.io.filesystem/4.3.0",
        "hashPath": "system.io.filesystem.4.3.0.nupkg.sha512"
      },
      "System.IO.FileSystem.Primitives/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-6QOb2XFLch7bEc4lIcJH49nJN2HV+OC3fHDgsLVsBVBk3Y4hFAnOBGzJ2lUu7CyDDFo9IBWkSsnbkT6IBwwiMw==",
        "path": "system.io.filesystem.primitives/4.3.0",
        "hashPath": "system.io.filesystem.primitives.4.3.0.nupkg.sha512"
      },
      "System.Linq/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-5DbqIUpsDp0dFftytzuMmc0oeMdQwjcP/EWxsksIz/w1TcFRkZ3yKKz0PqiYFMmEwPSWw+qNVqD7PJ889JzHbw==",
        "path": "system.linq/4.3.0",
        "hashPath": "system.linq.4.3.0.nupkg.sha512"
      },
      "System.Linq.Expressions/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-PGKkrd2khG4CnlyJwxwwaWWiSiWFNBGlgXvJpeO0xCXrZ89ODrQ6tjEWS/kOqZ8GwEOUATtKtzp1eRgmYNfclg==",
        "path": "system.linq.expressions/4.3.0",
        "hashPath": "system.linq.expressions.4.3.0.nupkg.sha512"
      },
      "System.Linq.Parallel/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-td7x21K8LalpjTWCzW/nQboQIFbq9i0r+PCyBBCdLWWnm4NBcdN18vpz/G9hCpUaCIfRL+ZxJNVTywlNlB1aLQ==",
        "path": "system.linq.parallel/4.3.0",
        "hashPath": "system.linq.parallel.4.3.0.nupkg.sha512"
      },
      "System.Linq.Queryable/4.0.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-Yn/WfYe9RoRfmSLvUt2JerP0BTGGykCZkQPgojaxgzF2N0oPo+/AhB8TXOpdCcNlrG3VRtsamtK2uzsp3cqRVw==",
        "path": "system.linq.queryable/4.0.1",
        "hashPath": "system.linq.queryable.4.0.1.nupkg.sha512"
      },
      "System.Net.Http/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-sYg+FtILtRQuYWSIAuNOELwVuVsxVyJGWQyOnlAzhV4xvhyFnON1bAzYYC+jjRW8JREM45R0R5Dgi8MTC5sEwA==",
        "path": "system.net.http/4.3.0",
        "hashPath": "system.net.http.4.3.0.nupkg.sha512"
      },
      "System.Net.NameResolution/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-AFYl08R7MrsrEjqpQWTZWBadqXyTzNDaWpMqyxhb0d6sGhV6xMDKueuBXlLL30gz+DIRY6MpdgnHWlCh5wmq9w==",
        "path": "system.net.nameresolution/4.3.0",
        "hashPath": "system.net.nameresolution.4.3.0.nupkg.sha512"
      },
      "System.Net.Primitives/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-qOu+hDwFwoZPbzPvwut2qATe3ygjeQBDQj91xlsaqGFQUI5i4ZnZb8yyQuLGpDGivEPIt8EJkd1BVzVoP31FXA==",
        "path": "system.net.primitives/4.3.0",
        "hashPath": "system.net.primitives.4.3.0.nupkg.sha512"
      },
      "System.Net.Security/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-IgJKNfALqw7JRWp5LMQ5SWHNKvXVz094U6wNE3c1i8bOkMQvgBL+MMQuNt3xl9Qg9iWpj3lFxPZEY6XHmROjMQ==",
        "path": "system.net.security/4.3.0",
        "hashPath": "system.net.security.4.3.0.nupkg.sha512"
      },
      "System.Net.Sockets/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-m6icV6TqQOAdgt5N/9I5KNpjom/5NFtkmGseEH+AK/hny8XrytLH3+b5M8zL/Ycg3fhIocFpUMyl/wpFnVRvdw==",
        "path": "system.net.sockets/4.3.0",
        "hashPath": "system.net.sockets.4.3.0.nupkg.sha512"
      },
      "System.Numerics.Vectors/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-UiLzLW+Lw6HLed1Hcg+8jSRttrbuXv7DANVj0DkL9g6EnnzbL75EB7EWsw5uRbhxd/4YdG8li5XizGWepmG3PQ==",
        "path": "system.numerics.vectors/4.4.0",
        "hashPath": "system.numerics.vectors.4.4.0.nupkg.sha512"
      },
      "System.ObjectModel/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-bdX+80eKv9bN6K4N+d77OankKHGn6CH711a6fcOpMQu2Fckp/Ft4L/kW9WznHpyR0NRAvJutzOMHNNlBGvxQzQ==",
        "path": "system.objectmodel/4.3.0",
        "hashPath": "system.objectmodel.4.3.0.nupkg.sha512"
      },
      "System.Private.DataContractSerialization/4.1.1": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-lcqFBUaCZxPiUkA4dlSOoPZGtZsAuuElH2XHgLwGLxd7ZozWetV5yiz0qGAV2AUYOqw97MtZBjbLMN16Xz4vXA==",
        "path": "system.private.datacontractserialization/4.1.1",
        "hashPath": "system.private.datacontractserialization.4.1.1.nupkg.sha512"
      },
      "System.Reflection/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-KMiAFoW7MfJGa9nDFNcfu+FpEdiHpWgTcS2HdMpDvt9saK3y/G4GwprPyzqjFH9NTaGPQeWNHU+iDlDILj96aQ==",
        "path": "system.reflection/4.3.0",
        "hashPath": "system.reflection.4.3.0.nupkg.sha512"
      },
      "System.Reflection.Emit/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-228FG0jLcIwTVJyz8CLFKueVqQK36ANazUManGaJHkO0icjiIypKW7YLWLIWahyIkdh5M7mV2dJepllLyA1SKg==",
        "path": "system.reflection.emit/4.3.0",
        "hashPath": "system.reflection.emit.4.3.0.nupkg.sha512"
      },
      "System.Reflection.Emit.ILGeneration/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-59tBslAk9733NXLrUJrwNZEzbMAcu8k344OYo+wfSVygcgZ9lgBdGIzH/nrg3LYhXceynyvTc8t5/GD4Ri0/ng==",
        "path": "system.reflection.emit.ilgeneration/4.3.0",
        "hashPath": "system.reflection.emit.ilgeneration.4.3.0.nupkg.sha512"
      },
      "System.Reflection.Emit.Lightweight/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-oadVHGSMsTmZsAF864QYN1t1QzZjIcuKU3l2S9cZOwDdDueNTrqq1yRj7koFfIGEnKpt6NjpL3rOzRhs4ryOgA==",
        "path": "system.reflection.emit.lightweight/4.3.0",
        "hashPath": "system.reflection.emit.lightweight.4.3.0.nupkg.sha512"
      },
      "System.Reflection.Extensions/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-rJkrJD3kBI5B712aRu4DpSIiHRtr6QlfZSQsb0hYHrDCZORXCFjQfoipo2LaMUHoT9i1B7j7MnfaEKWDFmFQNQ==",
        "path": "system.reflection.extensions/4.3.0",
        "hashPath": "system.reflection.extensions.4.3.0.nupkg.sha512"
      },
      "System.Reflection.Metadata/1.5.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-423hF/x1/1/aBT6hjgrp8RH2zdKOd1iTujlHisSesTW/cgv1ixUitfk23ZknVzItMm6jnwp9CBwI2P3r9jpitw==",
        "path": "system.reflection.metadata/1.5.0",
        "hashPath": "system.reflection.metadata.1.5.0.nupkg.sha512"
      },
      "System.Reflection.Primitives/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-5RXItQz5As4xN2/YUDxdpsEkMhvw3e6aNveFXUn4Hl/udNTCNhnKp8lT9fnc3MhvGKh1baak5CovpuQUXHAlIA==",
        "path": "system.reflection.primitives/4.3.0",
        "hashPath": "system.reflection.primitives.4.3.0.nupkg.sha512"
      },
      "System.Reflection.TypeExtensions/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-7u6ulLcZbyxB5Gq0nMkQttcdBTx57ibzw+4IOXEfR+sXYQoHvjW5LTLyNr8O22UIMrqYbchJQJnos4eooYzYJA==",
        "path": "system.reflection.typeextensions/4.3.0",
        "hashPath": "system.reflection.typeextensions.4.3.0.nupkg.sha512"
      },
      "System.Resources.ResourceManager/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-/zrcPkkWdZmI4F92gL/TPumP98AVDu/Wxr3CSJGQQ+XN6wbRZcyfSKVoPo17ilb3iOr0cCRqJInGwNMolqhS8A==",
        "path": "system.resources.resourcemanager/4.3.0",
        "hashPath": "system.resources.resourcemanager.4.3.0.nupkg.sha512"
      },
      "System.Runtime/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-JufQi0vPQ0xGnAczR13AUFglDyVYt4Kqnz1AZaiKZ5+GICq0/1MH/mO/eAJHt/mHW1zjKBJd7kV26SrxddAhiw==",
        "path": "system.runtime/4.3.0",
        "hashPath": "system.runtime.4.3.0.nupkg.sha512"
      },
      "System.Runtime.CompilerServices.Unsafe/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-9dLLuBxr5GNmOfl2jSMcsHuteEg32BEfUotmmUkmZjpR3RpVHE8YQwt0ow3p6prwA1ME8WqDVZqrr8z6H8G+Kw==",
        "path": "system.runtime.compilerservices.unsafe/4.4.0",
        "hashPath": "system.runtime.compilerservices.unsafe.4.4.0.nupkg.sha512"
      },
      "System.Runtime.Extensions/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-guW0uK0fn5fcJJ1tJVXYd7/1h5F+pea1r7FLSOz/f8vPEqbR2ZAknuRDvTQ8PzAilDveOxNjSfr0CHfIQfFk8g==",
        "path": "system.runtime.extensions/4.3.0",
        "hashPath": "system.runtime.extensions.4.3.0.nupkg.sha512"
      },
      "System.Runtime.Handles/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-OKiSUN7DmTWeYb3l51A7EYaeNMnvxwE249YtZz7yooT4gOZhmTjIn48KgSsw2k2lYdLgTKNJw/ZIfSElwDRVgg==",
        "path": "system.runtime.handles/4.3.0",
        "hashPath": "system.runtime.handles.4.3.0.nupkg.sha512"
      },
      "System.Runtime.InteropServices/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-uv1ynXqiMK8mp1GM3jDqPCFN66eJ5w5XNomaK2XD+TuCroNTLFGeZ+WCmBMcBDyTFKou3P6cR6J/QsaqDp7fGQ==",
        "path": "system.runtime.interopservices/4.3.0",
        "hashPath": "system.runtime.interopservices.4.3.0.nupkg.sha512"
      },
      "System.Runtime.InteropServices.RuntimeInformation/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-cbz4YJMqRDR7oLeMRbdYv7mYzc++17lNhScCX0goO2XpGWdvAt60CGN+FHdePUEHCe/Jy9jUlvNAiNdM+7jsOw==",
        "path": "system.runtime.interopservices.runtimeinformation/4.3.0",
        "hashPath": "system.runtime.interopservices.runtimeinformation.4.3.0.nupkg.sha512"
      },
      "System.Runtime.Numerics/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-yMH+MfdzHjy17l2KESnPiF2dwq7T+xLnSJar7slyimAkUh/gTrS9/UQOtv7xarskJ2/XDSNvfLGOBQPjL7PaHQ==",
        "path": "system.runtime.numerics/4.3.0",
        "hashPath": "system.runtime.numerics.4.3.0.nupkg.sha512"
      },
      "System.Runtime.Serialization.Formatters/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-KT591AkTNFOTbhZlaeMVvfax3RqhH1EJlcwF50Wm7sfnBLuHiOeZRRKrr1ns3NESkM20KPZ5Ol/ueMq5vg4QoQ==",
        "path": "system.runtime.serialization.formatters/4.3.0",
        "hashPath": "system.runtime.serialization.formatters.4.3.0.nupkg.sha512"
      },
      "System.Runtime.Serialization.Json/4.0.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-+7DIJhnKYgCzUgcLbVTtRQb2l1M0FP549XFlFkQM5lmNiUBl44AfNbx4bz61xA8PzLtlYwfmif4JJJW7MPPnjg==",
        "path": "system.runtime.serialization.json/4.0.2",
        "hashPath": "system.runtime.serialization.json.4.0.2.nupkg.sha512"
      },
      "System.Runtime.Serialization.Primitives/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-Wz+0KOukJGAlXjtKr+5Xpuxf8+c8739RI1C+A2BoQZT+wMCCoMDDdO8/4IRHfaVINqL78GO8dW8G2lW/e45Mcw==",
        "path": "system.runtime.serialization.primitives/4.3.0",
        "hashPath": "system.runtime.serialization.primitives.4.3.0.nupkg.sha512"
      },
      "System.Security.AccessControl/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-2NRFPX/V81ucKQmqNgGBZrKGH/5ejsvivSGMRum0SMgPnJxwhuNkzVS1+7gC3R2X0f57CtwrPrXPPSe6nOp82g==",
        "path": "system.security.accesscontrol/4.4.0",
        "hashPath": "system.security.accesscontrol.4.4.0.nupkg.sha512"
      },
      "System.Security.Claims/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-P/+BR/2lnc4PNDHt/TPBAWHVMLMRHsyYZbU1NphW4HIWzCggz8mJbTQQ3MKljFE7LS3WagmVFuBgoLcFzYXlkA==",
        "path": "system.security.claims/4.3.0",
        "hashPath": "system.security.claims.4.3.0.nupkg.sha512"
      },
      "System.Security.Cryptography.Algorithms/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-W1kd2Y8mYSCgc3ULTAZ0hOP2dSdG5YauTb1089T0/kRcN2MpSAW1izOFROrJgxSlMn3ArsgHXagigyi+ibhevg==",
        "path": "system.security.cryptography.algorithms/4.3.0",
        "hashPath": "system.security.cryptography.algorithms.4.3.0.nupkg.sha512"
      },
      "System.Security.Cryptography.Cng/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-03idZOqFlsKRL4W+LuCpJ6dBYDUWReug6lZjBa3uJWnk5sPCUXckocevTaUA8iT/MFSrY/2HXkOt753xQ/cf8g==",
        "path": "system.security.cryptography.cng/4.3.0",
        "hashPath": "system.security.cryptography.cng.4.3.0.nupkg.sha512"
      },
      "System.Security.Cryptography.Csp/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-X4s/FCkEUnRGnwR3aSfVIkldBmtURMhmexALNTwpjklzxWU7yjMk7GHLKOZTNkgnWnE0q7+BCf9N2LVRWxewaA==",
        "path": "system.security.cryptography.csp/4.3.0",
        "hashPath": "system.security.cryptography.csp.4.3.0.nupkg.sha512"
      },
      "System.Security.Cryptography.Encoding/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-1DEWjZZly9ae9C79vFwqaO5kaOlI5q+3/55ohmq/7dpDyDfc8lYe7YVxJUZ5MF/NtbkRjwFRo14yM4OEo9EmDw==",
        "path": "system.security.cryptography.encoding/4.3.0",
        "hashPath": "system.security.cryptography.encoding.4.3.0.nupkg.sha512"
      },
      "System.Security.Cryptography.OpenSsl/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-h4CEgOgv5PKVF/HwaHzJRiVboL2THYCou97zpmhjghx5frc7fIvlkY1jL+lnIQyChrJDMNEXS6r7byGif8Cy4w==",
        "path": "system.security.cryptography.openssl/4.3.0",
        "hashPath": "system.security.cryptography.openssl.4.3.0.nupkg.sha512"
      },
      "System.Security.Cryptography.Primitives/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-7bDIyVFNL/xKeFHjhobUAQqSpJq9YTOpbEs6mR233Et01STBMXNAc/V+BM6dwYGc95gVh/Zf+iVXWzj3mE8DWg==",
        "path": "system.security.cryptography.primitives/4.3.0",
        "hashPath": "system.security.cryptography.primitives.4.3.0.nupkg.sha512"
      },
      "System.Security.Cryptography.X509Certificates/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-t2Tmu6Y2NtJ2um0RtcuhP7ZdNNxXEgUm2JeoA/0NvlMjAhKCnM1NX07TDl3244mVp3QU6LPEhT3HTtH1uF7IYw==",
        "path": "system.security.cryptography.x509certificates/4.3.0",
        "hashPath": "system.security.cryptography.x509certificates.4.3.0.nupkg.sha512"
      },
      "System.Security.Cryptography.Xml/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-1Xubvo4i+K+DO6YzVh6vBKmCl5xx/cAoiJEze6VQ+XwVQU25KQC9pPrmniz2EbbJnmoQ5Rm2FFjHsfQAi0Rs+Q==",
        "path": "system.security.cryptography.xml/4.4.0",
        "hashPath": "system.security.cryptography.xml.4.4.0.nupkg.sha512"
      },
      "System.Security.Principal/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-I1tkfQlAoMM2URscUtpcRo/hX0jinXx6a/KUtEQoz3owaYwl3qwsO8cbzYVVnjxrzxjHo3nJC+62uolgeGIS9A==",
        "path": "system.security.principal/4.3.0",
        "hashPath": "system.security.principal.4.3.0.nupkg.sha512"
      },
      "System.Security.Principal.Windows/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-pP+AOzt1o3jESOuLmf52YQTF7H3Ng9hTnrOESQiqsnl2IbBh1HInsAMHYtoh75iUYV0OIkHmjvveraYB6zM97w==",
        "path": "system.security.principal.windows/4.4.0",
        "hashPath": "system.security.principal.windows.4.4.0.nupkg.sha512"
      },
      "System.Spatial/5.8.2": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-0RfZZJ8RlrfjoBPAF6pczX4Nd2kyLM8EX1PCP5Rqs/jOhJBUPYhpXjIsVAYN7kocj9IJ9XoJWAxWgXIDtJY2Ag==",
        "path": "system.spatial/5.8.2",
        "hashPath": "system.spatial.5.8.2.nupkg.sha512"
      },
      "System.Text.Encoding/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-BiIg+KWaSDOITze6jGQynxg64naAPtqGHBwDrLaCtixsa5bKiR8dpPOHA7ge3C0JJQizJE+sfkz1wV+BAKAYZw==",
        "path": "system.text.encoding/4.3.0",
        "hashPath": "system.text.encoding.4.3.0.nupkg.sha512"
      },
      "System.Text.Encoding.CodePages/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-6JX7ZdaceBiLKLkYt8zJcp4xTJd1uYyXXEkPw6mnlUIjh1gZPIVKPtRXPmY5kLf6DwZmf5YLwR3QUrRonl7l0A==",
        "path": "system.text.encoding.codepages/4.4.0",
        "hashPath": "system.text.encoding.codepages.4.4.0.nupkg.sha512"
      },
      "System.Text.Encoding.Extensions/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-YVMK0Bt/A43RmwizJoZ22ei2nmrhobgeiYwFzC4YAN+nue8RF6djXDMog0UCn+brerQoYVyaS+ghy9P/MUVcmw==",
        "path": "system.text.encoding.extensions/4.3.0",
        "hashPath": "system.text.encoding.extensions.4.3.0.nupkg.sha512"
      },
      "System.Text.Encodings.Web/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-l/tYeikqMHX2MD2jzrHDfR9ejrpTTF7wvAEbR51AMvzip1wSJgiURbDik4iv/w7ZgytmTD/hlwpplEhF9bmFNw==",
        "path": "system.text.encodings.web/4.4.0",
        "hashPath": "system.text.encodings.web.4.4.0.nupkg.sha512"
      },
      "System.Text.RegularExpressions/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-RpT2DA+L660cBt1FssIE9CAGpLFdFPuheB7pLpKpn6ZXNby7jDERe8Ua/Ne2xGiwLVG2JOqziiaVCGDon5sKFA==",
        "path": "system.text.regularexpressions/4.3.0",
        "hashPath": "system.text.regularexpressions.4.3.0.nupkg.sha512"
      },
      "System.Threading/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-VkUS0kOBcUf3Wwm0TSbrevDDZ6BlM+b/HRiapRFWjM5O0NS0LviG0glKmFK+hhPDd1XFeSdU1GmlLhb2CoVpIw==",
        "path": "system.threading/4.3.0",
        "hashPath": "system.threading.4.3.0.nupkg.sha512"
      },
      "System.Threading.Tasks/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-LbSxKEdOUhVe8BezB/9uOGGppt+nZf6e1VFyw6v3DN6lqitm0OSn2uXMOdtP0M3W4iMcqcivm2J6UgqiwwnXiA==",
        "path": "system.threading.tasks/4.3.0",
        "hashPath": "system.threading.tasks.4.3.0.nupkg.sha512"
      },
      "System.Threading.Tasks.Extensions/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-SPKfFGbpQsK5Srz2Kq3URgvC90yoOyBE8H1quDA2+MAJ2HAzFmV3biOgPv2Ck3mPAvdKngo3QHi2BNwUQDRVvA==",
        "path": "system.threading.tasks.extensions/4.4.0",
        "hashPath": "system.threading.tasks.extensions.4.4.0.nupkg.sha512"
      },
      "System.Threading.Tasks.Parallel/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-cbjBNZHf/vQCfcdhzx7knsiygoCKgxL8mZOeocXZn5gWhCdzHIq6bYNKWX0LAJCWYP7bds4yBK8p06YkP0oa0g==",
        "path": "system.threading.tasks.parallel/4.3.0",
        "hashPath": "system.threading.tasks.parallel.4.3.0.nupkg.sha512"
      },
      "System.Threading.Thread/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-OHmbT+Zz065NKII/ZHcH9XO1dEuLGI1L2k7uYss+9C1jLxTC9kTZZuzUOyXHayRk+dft9CiDf3I/QZ0t8JKyBQ==",
        "path": "system.threading.thread/4.3.0",
        "hashPath": "system.threading.thread.4.3.0.nupkg.sha512"
      },
      "System.Threading.ThreadPool/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-k/+g4b7vjdd4aix83sTgC9VG6oXYKAktSfNIJUNGxPEj7ryEOfzHHhfnmsZvjxawwcD9HyWXKCXmPjX8U4zeSw==",
        "path": "system.threading.threadpool/4.3.0",
        "hashPath": "system.threading.threadpool.4.3.0.nupkg.sha512"
      },
      "System.Threading.Timer/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-Z6YfyYTCg7lOZjJzBjONJTFKGN9/NIYKSxhU5GRd+DTwHSZyvWp1xuI5aR+dLg+ayyC5Xv57KiY4oJ0tMO89fQ==",
        "path": "system.threading.timer/4.3.0",
        "hashPath": "system.threading.timer.4.3.0.nupkg.sha512"
      },
      "System.ValueTuple/4.4.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-BahUww/+mdP4ARCAh2RQhQTg13wYLVrBb9SYVgW8ZlrwjraGCXHGjo0oIiUfZ34LUZkMMR+RAzR7dEY4S1HeQQ==",
        "path": "system.valuetuple/4.4.0",
        "hashPath": "system.valuetuple.4.4.0.nupkg.sha512"
      },
      "System.Xml.ReaderWriter/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-GrprA+Z0RUXaR4N7/eW71j1rgMnEnEVlgii49GZyAjTH7uliMnrOU3HNFBr6fEDBCJCIdlVNq9hHbaDR621XBA==",
        "path": "system.xml.readerwriter/4.3.0",
        "hashPath": "system.xml.readerwriter.4.3.0.nupkg.sha512"
      },
      "System.Xml.XDocument/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-5zJ0XDxAIg8iy+t4aMnQAu0MqVbqyvfoUVl1yDV61xdo3Vth45oA2FoY4pPkxYAH5f8ixpmTqXeEIya95x0aCQ==",
        "path": "system.xml.xdocument/4.3.0",
        "hashPath": "system.xml.xdocument.4.3.0.nupkg.sha512"
      },
      "System.Xml.XmlDocument/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-lJ8AxvkX7GQxpC6GFCeBj8ThYVyQczx2+f/cWHJU8tjS7YfI6Cv6bon70jVEgs2CiFbmmM8b9j1oZVx0dSI2Ww==",
        "path": "system.xml.xmldocument/4.3.0",
        "hashPath": "system.xml.xmldocument.4.3.0.nupkg.sha512"
      },
      "System.Xml.XmlSerializer/4.0.11": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-FrazwwqfIXTfq23mfv4zH+BjqkSFNaNFBtjzu3I9NRmG8EELYyrv/fJnttCIwRMFRR/YKXF1hmsMmMEnl55HGw==",
        "path": "system.xml.xmlserializer/4.0.11",
        "hashPath": "system.xml.xmlserializer.4.0.11.nupkg.sha512"
      },
      "System.Xml.XPath/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-v1JQ5SETnQusqmS3RwStF7vwQ3L02imIzl++sewmt23VGygix04pEH+FCj1yWb+z4GDzKiljr1W7Wfvrx0YwgA==",
        "path": "system.xml.xpath/4.3.0",
        "hashPath": "system.xml.xpath.4.3.0.nupkg.sha512"
      },
      "System.Xml.XPath.XDocument/4.3.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-jw9oHHEIVW53mHY9PgrQa98Xo2IZ0ZjrpdOTmtvk+Rvg4tq7dydmxdNqUvJ5YwjDqhn75mBXWttWjiKhWP53LQ==",
        "path": "system.xml.xpath.xdocument/4.3.0",
        "hashPath": "system.xml.xpath.xdocument.4.3.0.nupkg.sha512"
      },
      "WindowsAzure.Storage/8.1.4": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-W6ZZ0/o7+3Qb77mRAQyLjPudHG3OMeeQ4p9yY13PUdJArmRCx2cLMm5F4tpIjJXxzHC0ew0oK7DMDGILMdfCnw==",
        "path": "windowsazure.storage/8.1.4",
        "hashPath": "windowsazure.storage.8.1.4.nupkg.sha512"
      },
      "Microsoft.NETCore.App/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-/mzXF+UtZef+VpzzN88EpvFq5U6z4rj54ZMq/J968H6pcvyLOmcupmTRpJ3CJm8ILoCGh9WI7qpDdiKtuzswrQ==",
        "path": "microsoft.netcore.app/2.0.0",
        "hashPath": "microsoft.netcore.app.2.0.0.nupkg.sha512"
      },
      "Microsoft.NETCore.DotNetAppHost/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-L4GGkcI/Mxl8PKLRpFdGmLb5oI8sGIR05bDTGkzCoamAjdUl1Zhkov2swjEsZvKYT8kkdiz39LtwyGYuCJxm1A==",
        "path": "microsoft.netcore.dotnetapphost/2.0.0",
        "hashPath": "microsoft.netcore.dotnetapphost.2.0.0.nupkg.sha512"
      },
      "Microsoft.NETCore.DotNetHostPolicy/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-rm7mMn0A93fwyAwVhbyOCcPuu2hZNL0A0dAur9sNG9pEkONPfCEQeF7m2mC8KpqZO0Ol6tpV5J0AF3HTXT3GXA==",
        "path": "microsoft.netcore.dotnethostpolicy/2.0.0",
        "hashPath": "microsoft.netcore.dotnethostpolicy.2.0.0.nupkg.sha512"
      },
      "Microsoft.NETCore.DotNetHostResolver/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-uBbjpeSrwsaTCADZCzRk+3aBzNnMqkC4zftJWBsL+Zk+8u+W+/lMb2thM5Y4hiVrv1YQg9t6dKldXzOKkY+pQw==",
        "path": "microsoft.netcore.dotnethostresolver/2.0.0",
        "hashPath": "microsoft.netcore.dotnethostresolver.2.0.0.nupkg.sha512"
      },
      "Microsoft.NETCore.Platforms/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-VdLJOCXhZaEMY7Hm2GKiULmn7IEPFE4XC5LPSfBVCUIA8YLZVh846gtfBJalsPQF2PlzdD7ecX7DZEulJ402ZQ==",
        "path": "microsoft.netcore.platforms/2.0.0",
        "hashPath": "microsoft.netcore.platforms.2.0.0.nupkg.sha512"
      },
      "NETStandard.Library/2.0.0": {
        "type": "package",
        "serviceable": true,
        "sha512": "sha512-7jnbRU+L08FXKMxqUflxEXtVymWvNOrS8yHgu9s6EM8Anr6T/wIX4nZ08j/u3Asz+tCufp3YVwFSEvFTPYmBPA==",
        "path": "netstandard.library/2.0.0",
        "hashPath": "netstandard.library.2.0.0.nupkg.sha512"
      }
    }
  });

}).call(this);
