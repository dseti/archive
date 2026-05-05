import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "D-SETI Dreamwork",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "dseti.org",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    outputDir: "public",
theme: {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "Montserrat",      // Designed specifically for high readability
    body: "EB Garamond",         // Exceptionally clean and legible on all screens
    code: "JetBrains Mono", // Slightly taller x-height for easier code reading
  },
  colors: {
    lightMode: {
      light: "#fdfdfc",       // Softer off-white to reduce eye strain (paper-like)
      lightgray: "#e0e0e0",   // Subtle borders
      gray: "#7a7a7a",        // Meta info (dates, tags)
      darkgray: "#2d2d2d",    // High-contrast body text (not pure black)
      dark: "#1a1a1a",        // Headers and bold text
      secondary: "#0056b3",   // Clear, accessible blue for links
      tertiary: "#5c7c8a",    // Accents
      highlight: "rgba(0, 86, 179, 0.07)", // Soft blue tint for block highlights
      textHighlight: "#fff23688",
    },
    darkMode: {
      light: "#161617",       // Deep charcoal, easier on eyes than pure black
      lightgray: "#2a2a2e",   // Borders
      gray: "#909090",        // Meta info
      darkgray: "#e0e0e0",    // Soft white body text
      dark: "#ffffff",        // Crisp white headers
      secondary: "#7aa2f7",   // High-legibility blue for dark mode
      tertiary: "#89ddff",    // Accents
      highlight: "rgba(122, 162, 247, 0.15)",
      textHighlight: "#b3aa0288",
    },
  },
},
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
