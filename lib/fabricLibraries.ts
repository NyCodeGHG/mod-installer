export function getFabricLibraries(): Library[] {
    return [
        {
            "name": "net.fabricmc:tiny-mappings-parser:0.3.0+build.17",
            "url": "https://maven.fabricmc.net/"
        },
        {
            "name": "net.fabricmc:sponge-mixin:0.11.2+mixin.0.8.5",
            "url": "https://maven.fabricmc.net/"
        },
        {
            "name": "net.fabricmc:tiny-remapper:0.8.1",
            "url": "https://maven.fabricmc.net/"
        },
        {
            "name": "net.fabricmc:access-widener:2.1.0",
            "url": "https://maven.fabricmc.net/"
        },
        {
            "name": "org.ow2.asm:asm:9.2",
            "url": "https://maven.fabricmc.net/"
        },
        {
            "name": "org.ow2.asm:asm-analysis:9.2",
            "url": "https://maven.fabricmc.net/"
        },
        {
            "name": "org.ow2.asm:asm-commons:9.2",
            "url": "https://maven.fabricmc.net/"
        },
        {
            "name": "org.ow2.asm:asm-tree:9.2",
            "url": "https://maven.fabricmc.net/"
        },
        {
            "name": "org.ow2.asm:asm-util:9.2",
            "url": "https://maven.fabricmc.net/"
        },
        {
            "name": "net.fabricmc:intermediary:1.18.2",
            "url": "https://maven.fabricmc.net/"
        },
        {
            "name": "net.fabricmc:fabric-loader:0.13.3",
            "url": "https://maven.fabricmc.net/"
        }
    ]
}

export type Library = {
    name: string
    url: string
}