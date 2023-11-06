// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  build: {
    transpile: [
      'nuxt/app'
    ]
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      'Work+Sans': true,
    }
  },
  colorMode: {
    classSuffix: '',
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
      alwaysRedirect: true
    },
    strategy: 'prefix_except_default',
    defaultLocale: 'en-US',
    locales: [
      {
        code: "af-ZA",
        iso: "af-ZA",
        name: "Afrikaans (South Africa)",
      },
      {
        code: "ar-SA",
        iso: "ar-SA",
        name: "Arabic (Saudi Arabia)",
      },
      {
        code: "be-BY",
        iso: "be-BY",
        name: "Belarusian (Belarus)",
      },
      {
        code: "bg-BG",
        iso: "bg-BG",
        name: "Bulgarian (Bulgaria)",
      },
      {
        code: "bn-BD",
        iso: "bn-BD",
        name: "Bangla (Bangladesh)"
      },
      {
        code: "ca-ES",
        iso: "ca-ES",
        name: "Catalan (Spain)",
      },
      {
        code: "ch-GU",
        iso: "ch-GU",
        name: "Chamorro (Guam)"
      },
      {
        code: "cn-CN",
        iso: "cn-CN",
        name: "Chinese (China)"
      },
      {
        code: "cs-CZ",
        iso: "cs-CZ",
        name: "Czech (Czech Republic)",
      },
      {
        code: "cy-GB",
        iso: "cy-GB",
        name: "Welsh (United Kingdom)",
      },
      {
        code: "da-DK",
        iso: "da-DK",
        name: "Danish (Denmark)",
      },
      {
        code: "de-AT",
        iso: "de-AT",
        name: "German (Austria)",
      },
      {
        code: "de-CH",
        iso: "de-CH",
        name: "German (Switzerland)",
      },
      {
        code: "de-DE",
        iso: "de-DE",
        name: "German (Germany)",
      },
      {
        code: "el-GR",
        iso: "el-GR",
        name: "Greek (Greece)",
      },
      {
        code: "en-AU",
        iso: "en-AU",
        name: "English (Australia)",
      },
      {
        code: "en-CA",
        iso: "en-CA",
        name: "English (Canada)",
      },
      {
        code: "en-GB",
        iso: "en-GB",
        name: "English (United Kingdom)",
      },
      {
        code: "en-IE",
        iso: "en-IE",
        name: "English (Ireland)",
      },
      {
        code: "en-NZ",
        iso: "en-NZ",
        name: "English (New Zealand)",
      },
      {
        code: "en-US",
        iso: "en-US",
        name: "English (United States)",
      },
      {
        code: "eo-EO",
        iso: "eo-EO",
        name: "Esperanto"
      },
      {
        code: "es-ES",
        iso: "es-ES",
        name: "Spanish (Castilian)",
      },
      {
        code: "es-MX",
        iso: "es-MX",
        name: "Spanish (Mexico)",
      },
      {
        code: "et-EE",
        iso: "et-EE",
        name: "Estonian (Estonia)",
      },
      {
        code: "eu-ES",
        iso: "eu-ES",
        name: "Basque (Spain)",
      },
      {
        code: "fa-IR",
        iso: "fa-IR",
        name: "Farsi (Iran)",
      },
      {
        code: "fi-FI",
        iso: "fi-FI",
        name: "Finnish (Finland)",
      },
      {
        code: "fr-CA",
        iso: "fr-CA",
        name: "French (Canada)",
      },
      {
        code: "fr-FR",
        iso: "fr-FR",
        name: "French (France)",
      },
      {
        code: "ga-IE",
        iso: "ga-IE",
        name: "Gaeilge (Ireland)"
      },
      {
        code: "gd-GB",
        iso: "gd-GB",
        name: "Scottish Gaelic (United Kingdom (Great Britain))"
      },
      {
        code: "gl-ES",
        iso: "gl-ES",
        name: "Galician (Spain)",
      },
      {
        code: "he-IL",
        iso: "he-IL",
        name: "Hebrew (Israel)",
      },
      {
        code: "hi-IN",
        iso: "hi-IN",
        name: "Hindi (India)",
      },
      {
        code: "hr-HR",
        iso: "hr-HR",
        name: "Croatian (Croatia)",
      },
      {
        code: "hu-HU",
        iso: "hu-HU",
        name: "Hungarian (Hungary)",
      },
      {
        code: "id-ID",
        iso: "id-ID",
        name: "Indonesian (Indonesia)",
      },
      {
        code: "it-IT",
        iso: "it-IT",
        name: "Italian (Italy)",
      },
      {
        code: "ja-JP",
        iso: "ja-JP",
        name: "Japanese (Japan)",
      },
      {
        code: "ka-GE",
        iso: "ka-GE",
        name: "Georgian (Georgia)",
      },
      {
        code: "kk-KZ",
        iso: "kk-KZ",
        name: "Kazakh (Kazakhstan)",
      },
      {
        code: "kn-IN",
        iso: "kn-IN",
        name: "Kannada (India)",
      },
      {
        code: "ko-KR",
        iso: "ko-KR",
        name: "Korean (Korea)",
      },
      {
        code: "ky-KG",
        iso: "ky-KG",
        name: "Kyrgyz (Kyrgyzstan)",
      },
      {
        code: "lt-LT",
        iso: "lt-LT",
        name: "Lithuanian (Lithuania)",
      },
      {
        code: "lv-LV",
        iso: "lv-LV",
        name: "Latvian (Latvia)",
      },
      {
        code: "mi-NZ",
        iso: "mi-NZ",
        name: "Maori (New Zealand)",
      },
      {
        code: "mr-IN",
        iso: "mr-IN",
        name: "Marathi (India)",
      },
      {
        code: "ml-IN",
        iso: "ml-IN",
        name: "Malayalam (India)",
      },
      {
        code: "ms-MY",
        iso: "ms-MY",
        name: "Malay (Malaysia)",
      },
      {
        code: "ms-SG",
        iso: "ms-SG",
        name: "Bahasa Malaysia (Singapore)",
      },
      {
        code: "nb-NO",
        iso: "nb-NO",
        name: "Norwegian (Bokmål) (Norway)",
      },
      {
        code: "nl-BE",
        iso: "nl-BE",
        name: "Dutch (Belgium)",
      },
      {
        code: "no-NO",
        iso: "no-NO",
        name: "Norwegian (Norway)"
      },
      {
        code: "pa-IN",
        iso: "pa-IN",
        name: "Punjabi (India)",
      },
      {
        code: "pl-PL",
        iso: "pl-PL",
        name: "Polish (Poland)",
      },
      {
        code: "pt-BR",
        iso: "pt-BR",
        name: "Portuguese",
      },
      {
        code: "pt-PT",
        iso: "pt-PT",
        name: "Portuguese (Portugal)",
      },
      {
        code: "ro-RO",
        iso: "ro-RO",
        name: "Romanian (Romania)",
      },
      {
        code: "ru-RU",
        iso: "ru-RU",
        name: "Russian (Russia)",
      },
      {
        code: "si-LK",
        iso: "si-LK",
        name: "Sinhala (Sri Lanka)"
      },
      {
        code: "sk-SK",
        iso: "sk-SK",
        name: "Slovak (Slovakia)",
      },
      {
        code: "sl-SI",
        iso: "sl-SI",
        name: "Slovenian (Slovenia)",
      },
      {
        code: "sq-AL",
        iso: "sq-AL",
        name: "Albanian (Albania)",
      },
      {
        code: "sr-RS",
        iso: "sr-RS",
        name: "Serbian (Serbia)"
      },
      {
        code: "sv-SE",
        iso: "sv-SE",
        name: "Swedish (Sweden)",
      },
      {
        code: "ta-IN",
        iso: "ta-IN",
        name: "Tamil (India)",
      },
      {
        code: "te-IN",
        iso: "te-IN",
        name: "Telugu (India)",
      },
      {
        code: "th-TH",
        iso: "th-TH",
        name: "Thai (Thailand)",
      },
      {
        code: "tl-PH",
        iso: "tl-PH",
        name: "Tagalog (Philippines)",
      },
      {
        code: "tr-TR",
        iso: "tr-TR",
        name: "Turkish (Turkey)",
      },
      {
        code: "uk-UA",
        iso: "uk-UA",
        name: "Ukrainian (Ukraine)",
      },
      {
        code: "vi-VN",
        iso: "vi-VN",
        name: "Vietnamese (Viet Nam)",
      },
      {
        code: "zh-CN",
        iso: "zh-CN",
        name: "Chinese (S)",
      },
      {
        code: "zh-HK",
        iso: "zh-HK",
        name: "Chinese (Hong Kong)",
      },
      {
        code: "zh-SG",
        iso: "zh-SG",
        name: "Chinese (Singapore)",
      },
      {
        code: "zh-TW",
        iso: "zh-TW",
        name: "Chinese (T)",
      },
      {
        code: "zu-ZA",
        iso: "zu-ZA",
        name: "Zulu (South Africa)",
      }
    ],
  },
  ssr: true
})