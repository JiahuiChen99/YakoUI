module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                productName: "yako",
                appId: "org.jiahuichen.yako",
                directories: {
                    "output": "build"
                },
                publish: ["github"],
                win: {
                    icon: "resources/installer/icons/icon.png",
                    target: [
                        "zip",
                        "nsis",
                        "portable"
                    ],
                    publish: ["github"]
                },
                nsis: {
                    oneClick: false,
                    perMachine: true,
                    allowElevation: true,
                    allowToChangeInstallationDirectory: true,
                    installerIcon: "resources/installer/icons/icon.ico"
                },
                mac: {
                    icon: "resources/installer/icons/icon.icns",
                    target: [
                        "zip",
                        "dmg"
                    ]
                },
                dmg: {
                    icon: "resources/installer/icons/icon.icns"
                },
                linux: {
                    executableName: "yako",
                    artifactName: "${productName}-${version}-linux-${arch}.${ext}",
                    maintainer: "Jiahui Chen",
                    synopsis: "Heterogeneous Computing Farm YakoUI application",
                    description: "The Yako orchestrator allows the deployment of computer services to a cluster composed of heterogeneous devices of various kinds, either in hardware (CPU, GPU, memory) or in software (OS, programming languages). The orchestrator supports both conventional devices and IoT devices with the use of different cutting edge protocols. An application has also been created to manage, monitor and view telemetry data.",
                    icon: "resources/installer/icons/",
                    desktop: {
                        Terminal: "false",
                        Type: "Application",
                        Categories: "GTK;GNOME;Orchestrator;"
                    },
                    publish: ["github"],
                    target: [
                        {
                            target: "zip",
                            arch: [
                                "x64"
                            ]
                        },
                        {
                            target: "AppImage",
                            arch: [
                                "x64"
                            ]
                        },
                        {
                            target: "deb",
                            arch: [
                                "x64"
                            ]
                        },
                        {
                            target: "snap",
                            arch: [
                                "x64"
                            ]
                        },
                        {
                            target: "pacman",
                            arch: [
                                "x64"
                            ]
                        },
                        {
                            target: "freebsd",
                            arch: [
                                "x64"
                            ]
                        },
                        {
                            target: "rpm",
                            arch: [
                                "x64"
                            ]
                        }
                    ]
                },
            }
        }
    }
}