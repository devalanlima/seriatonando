// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxtjs/i18n'
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
    locales: [
      {
        code: "af",
        iso: "af",
        name: "Afrikaans",
      },
      {
        code: "af-ZA",
        iso: "af-ZA",
        name: "Afrikaans (South Africa)",
      },
      {
        code: "ar",
        iso: "ar",
        name: "Arabic",
      },
      {
        code: "ar-AE",
        iso: "ar-AE",
        name: "Arabic (U.A.E.)",
      },
      {
        code: "ar-BH",
        iso: "ar-BH",
        name: "Arabic (Bahrain)",
      },
      {
        code: "ar-DZ",
        iso: "ar-DZ",
        name: "Arabic (Algeria)",
      },
      {
        code: "ar-EG",
        iso: "ar-EG",
        name: "Arabic (Egypt)",
      },
      {
        code: "ar-IQ",
        iso: "ar-IQ",
        name: "Arabic (Iraq)",
      },
      {
        code: "ar-JO",
        iso: "ar-JO",
        name: "Arabic (Jordan)",
      },
      {
        code: "ar-KW",
        iso: "ar-KW",
        name: "Arabic (Kuwait)",
      },
      {
        code: "ar-LB",
        iso: "ar-LB",
        name: "Arabic (Lebanon)",
      },
      {
        code: "ar-LY",
        iso: "ar-LY",
        name: "Arabic (Libya)",
      },
      {
        code: "ar-MA",
        iso: "ar-MA",
        name: "Arabic (Morocco)",
      },
      {
        code: "ar-OM",
        iso: "ar-OM",
        name: "Arabic (Oman)",
      },
      {
        code: "ar-QA",
        iso: "ar-QA",
        name: "Arabic (Qatar)",
      },
      {
        code: "ar-SA",
        iso: "ar-SA",
        name: "Arabic (Saudi Arabia)",
      },
      {
        code: "ar-SY",
        iso: "ar-SY",
        name: "Arabic (Syria)",
      },
      {
        code: "ar-TN",
        iso: "ar-TN",
        name: "Arabic (Tunisia)",
      },
      {
        code: "ar-YE",
        iso: "ar-YE",
        name: "Arabic (Yemen)",
      },
      {
        code: "az",
        iso: "az",
        name: "Azeri (Latin)",
      },
      {
        code: "az-AZ",
        iso: "az-AZ",
        name: "Azeri (Latin) (Azerbaijan)",
      },
      {
        code: "az-AZ-CYRL",
        iso: "az-AZ",
        name: "Azeri (Cyrillic) (Azerbaijan)",
      },
      {
        code: "be",
        iso: "be",
        name: "Belarusian",
      },
      {
        code: "be-BY",
        iso: "be-BY",
        name: "Belarusian (Belarus)",
      },
      {
        code: "bg",
        iso: "bg",
        name: "Bulgarian",
      },
      {
        code: "bg-BG",
        iso: "bg-BG",
        name: "Bulgarian (Bulgaria)",
      },
      {
        code: "bs-BA",
        iso: "bs-BA",
        name: "Bosnian (Bosnia and Herzegovina)",
      },
      {
        code: "ca",
        iso: "ca",
        name: "Catalan",
      },
      {
        code: "ca-ES",
        iso: "ca-ES",
        name: "Catalan (Spain)",
      },
      {
        code: "cs",
        iso: "cs",
        name: "Czech",
      },
      {
        code: "cs-CZ",
        iso: "cs-CZ",
        name: "Czech (Czech Republic)",
      },
      {
        code: "cy",
        iso: "cy",
        name: "Welsh",
      },
      {
        code: "cy-GB",
        iso: "cy-GB",
        name: "Welsh (United Kingdom)",
      },
      {
        code: "da",
        iso: "da",
        name: "Danish",
      },
      {
        code: "da-DK",
        iso: "da-DK",
        name: "Danish (Denmark)",
      },
      {
        code: "de",
        iso: "de",
        name: "German",
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
        code: "de-LI",
        iso: "de-LI",
        name: "German (Liechtenstein)",
      },
      {
        code: "de-LU",
        iso: "de-LU",
        name: "German (Luxembourg)",
      },
      {
        code: "dv",
        iso: "dv",
        name: "Divehi",
      },
      {
        code: "dv-MV",
        iso: "dv-MV",
        name: "Divehi (Maldives)",
      },
      {
        code: "el",
        iso: "el",
        name: "Greek",
      },
      {
        code: "el-GR",
        iso: "el-GR",
        name: "Greek (Greece)",
      },
      {
        code: "en",
        iso: "en",
        name: "English",
      },
      {
        code: "en-AU",
        iso: "en-AU",
        name: "English (Australia)",
      },
      {
        code: "en-BZ",
        iso: "en-BZ",
        name: "English (Belize)",
      },
      {
        code: "en-CA",
        iso: "en-CA",
        name: "English (Canada)",
      },
      {
        code: "en-CB",
        iso: "en-CB",
        name: "English (Caribbean)",
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
        code: "en-JM",
        iso: "en-JM",
        name: "English (Jamaica)",
      },
      {
        code: "en-NZ",
        iso: "en-NZ",
        name: "English (New Zealand)",
      },
      {
        code: "en-PH",
        iso: "en-PH",
        name: "English (Republic of the Philippines)",
      },
      {
        code: "en-TT",
        iso: "en-TT",
        name: "English (Trinidad and Tobago)",
      },
      {
        code: "en-US",
        iso: "en-US",
        name: "English (United States)",
      },
      {
        code: "en-ZA",
        iso: "en-ZA",
        name: "English (South Africa)",
      },
      {
        code: "en-ZW",
        iso: "en-ZW",
        name: "English (Zimbabwe)",
      },
      {
        code: "eo",
        iso: "eo",
        name: "Esperanto",
      },
      {
        code: "es",
        iso: "es",
        name: "Spanish",
      },
      {
        code: "es-AR",
        iso: "es-AR",
        name: "Spanish (Argentina)",
      },
      {
        code: "es-BO",
        iso: "es-BO",
        name: "Spanish (Bolivia)",
      },
      {
        code: "es-CL",
        iso: "es-CL",
        name: "Spanish (Chile)",
      },
      {
        code: "es-CO",
        iso: "es-CO",
        name: "Spanish (Colombia)",
      },
      {
        code: "es-CR",
        iso: "es-CR",
        name: "Spanish (Costa Rica)",
      },
      {
        code: "es-DO",
        iso: "es-DO",
        name: "Spanish (Dominican Republic)",
      },
      {
        code: "es-EC",
        iso: "es-EC",
        name: "Spanish (Ecuador)",
      },
      {
        code: "es-ES",
        iso: "es-ES",
        name: "Spanish (Castilian)",
      },
      {
        code: "es-ES-VALENCIAN",
        iso: "es-ES",
        name: "Spanish (Spain)",
      },
      {
        code: "es-GT",
        iso: "es-GT",
        name: "Spanish (Guatemala)",
      },
      {
        code: "es-HN",
        iso: "es-HN",
        name: "Spanish (Honduras)",
      },
      {
        code: "es-MX",
        iso: "es-MX",
        name: "Spanish (Mexico)",
      },
      {
        code: "es-NI",
        iso: "es-NI",
        name: "Spanish (Nicaragua)",
      },
      {
        code: "es-PA",
        iso: "es-PA",
        name: "Spanish (Panama)",
      },
      {
        code: "es-PE",
        iso: "es-PE",
        name: "Spanish (Peru)",
      },
      {
        code: "es-PR",
        iso: "es-PR",
        name: "Spanish (Puerto Rico)",
      },
      {
        code: "es-PY",
        iso: "es-PY",
        name: "Spanish (Paraguay)",
      },
      {
        code: "es-SV",
        iso: "es-SV",
        name: "Spanish (El Salvador)",
      },
      {
        code: "es-UY",
        iso: "es-UY",
        name: "Spanish (Uruguay)",
      },
      {
        code: "es-VE",
        iso: "es-VE",
        name: "Spanish (Venezuela)",
      },
      {
        code: "et",
        iso: "et",
        name: "Estonian",
      },
      {
        code: "et-EE",
        iso: "et-EE",
        name: "Estonian (Estonia)",
      },
      {
        code: "eu",
        iso: "eu",
        name: "Basque",
      },
      {
        code: "eu-ES",
        iso: "eu-ES",
        name: "Basque (Spain)",
      },
      {
        code: "fa",
        iso: "fa",
        name: "Farsi",
      },
      {
        code: "fa-IR",
        iso: "fa-IR",
        name: "Farsi (Iran)",
      },
      {
        code: "fi",
        iso: "fi",
        name: "Finnish",
      },
      {
        code: "fi-FI",
        iso: "fi-FI",
        name: "Finnish (Finland)",
      },
      {
        code: "fo",
        iso: "fo",
        name: "Faroese",
      },
      {
        code: "fo-FO",
        iso: "fo-FO",
        name: "Faroese (Faroe Islands)",
      },
      {
        code: "fr",
        iso: "fr",
        name: "French",
      },
      {
        code: "fr-BE",
        iso: "fr-BE",
        name: "French (Belgium)",
      },
      {
        code: "fr-CA",
        iso: "fr-CA",
        name: "French (Canada)",
      },
      {
        code: "fr-CH",
        iso: "fr-CH",
        name: "French (Switzerland)",
      },
      {
        code: "fr-FR",
        iso: "fr-FR",
        name: "French (France)",
      },
      {
        code: "fr-LU",
        iso: "fr-LU",
        name: "French (Luxembourg)",
      },
      {
        code: "fr-MC",
        iso: "fr-MC",
        name: "French (Principality of Monaco)",
      },
      {
        code: "gl",
        iso: "gl",
        name: "Galician",
      },
      {
        code: "gl-ES",
        iso: "gl-ES",
        name: "Galician (Spain)",
      },
      {
        code: "gu",
        iso: "gu",
        name: "Gujarati",
      },
      {
        code: "gu-IN",
        iso: "gu-IN",
        name: "Gujarati (India)",
      },
      {
        code: "he",
        iso: "he",
        name: "Hebrew",
      },
      {
        code: "he-IL",
        iso: "he-IL",
        name: "Hebrew (Israel)",
      },
      {
        code: "hi",
        iso: "hi",
        name: "Hindi",
      },
      {
        code: "hi-IN",
        iso: "hi-IN",
        name: "Hindi (India)",
      },
      {
        code: "hr",
        iso: "hr",
        name: "Croatian",
      },
      {
        code: "hr-BA",
        iso: "hr-BA",
        name: "Croatian (Bosnia and Herzegovina)",
      },
      {
        code: "hr-HR",
        iso: "hr-HR",
        name: "Croatian (Croatia)",
      },
      {
        code: "hu",
        iso: "hu",
        name: "Hungarian",
      },
      {
        code: "hu-HU",
        iso: "hu-HU",
        name: "Hungarian (Hungary)",
      },
      {
        code: "hy",
        iso: "hy",
        name: "Armenian",
      },
      {
        code: "hy-AM",
        iso: "hy-AM",
        name: "Armenian (Armenia)",
      },
      {
        code: "id",
        iso: "id",
        name: "Indonesian",
      },
      {
        code: "id-ID",
        iso: "id-ID",
        name: "Indonesian (Indonesia)",
      },
      {
        code: "is",
        iso: "is",
        name: "Icelandic",
      },
      {
        code: "is-IS",
        iso: "is-IS",
        name: "Icelandic (Iceland)",
      },
      {
        code: "it",
        iso: "it",
        name: "Italian",
      },
      {
        code: "it-CH",
        iso: "it-CH",
        name: "Italian (Switzerland)",
      },
      {
        code: "it-IT",
        iso: "it-IT",
        name: "Italian (Italy)",
      },
      {
        code: "ja",
        iso: "ja",
        name: "Japanese",
      },
      {
        code: "ja-JP",
        iso: "ja-JP",
        name: "Japanese (Japan)",
      },
      {
        code: "ka",
        iso: "ka",
        name: "Georgian",
      },
      {
        code: "ka-GE",
        iso: "ka-GE",
        name: "Georgian (Georgia)",
      },
      {
        code: "kk",
        iso: "kk",
        name: "Kazakh",
      },
      {
        code: "kk-KZ",
        iso: "kk-KZ",
        name: "Kazakh (Kazakhstan)",
      },
      {
        code: "kn",
        iso: "kn",
        name: "Kannada",
      },
      {
        code: "kn-IN",
        iso: "kn-IN",
        name: "Kannada (India)",
      },
      {
        code: "ko",
        iso: "ko",
        name: "Korean",
      },
      {
        code: "ko-KR",
        iso: "ko-KR",
        name: "Korean (Korea)",
      },
      {
        code: "kok",
        iso: "kok",
        name: "Konkani",
      },
      {
        code: "kok-IN",
        iso: "kok-IN",
        name: "Konkani (India)",
      },
      {
        code: "ky",
        iso: "ky",
        name: "Kyrgyz",
      },
      {
        code: "ky-KG",
        iso: "ky-KG",
        name: "Kyrgyz (Kyrgyzstan)",
      },
      {
        code: "lt",
        iso: "lt",
        name: "Lithuanian",
      },
      {
        code: "lt-LT",
        iso: "lt-LT",
        name: "Lithuanian (Lithuania)",
      },
      {
        code: "lv",
        iso: "lv",
        name: "Latvian",
      },
      {
        code: "lv-LV",
        iso: "lv-LV",
        name: "Latvian (Latvia)",
      },
      {
        code: "mi",
        iso: "mi",
        name: "Maori",
      },
      {
        code: "mi-NZ",
        iso: "mi-NZ",
        name: "Maori (New Zealand)",
      },
      {
        code: "mk",
        iso: "mk",
        name: "FYRO Macedonian",
      },
      {
        code: "mk-MK",
        iso: "mk-MK",
        name: "FYRO Macedonian (Former Yugoslav Republic of Macedonia)",
      },
      {
        code: "mn",
        iso: "mn",
        name: "Mongolian",
      },
      {
        code: "mn-MN",
        iso: "mn-MN",
        name: "Mongolian (Mongolia)",
      },
      {
        code: "mr",
        iso: "mr",
        name: "Marathi",
      },
      {
        code: "mr-IN",
        iso: "mr-IN",
        name: "Marathi (India)",
      },
      {
        code: "ms",
        iso: "ms",
        name: "Malay",
      },
      {
        code: "ms-BN",
        iso: "ms-BN",
        name: "Malay (Brunei Darussalam)",
      },
      {
        code: "ms-MY",
        iso: "ms-MY",
        name: "Malay (Malaysia)",
      },
      {
        code: "mt",
        iso: "mt",
        name: "Maltese",
      },
      {
        code: "mt-MT",
        iso: "mt-MT",
        name: "Maltese (Malta)",
      },
      {
        code: "nb",
        iso: "nb",
        name: "Norwegian (Bokmål)",
      },
      {
        code: "nb-NO",
        iso: "nb-NO",
        name: "Norwegian (Bokmål) (Norway)",
      },
      {
        code: "nl",
        iso: "nl",
        name: "Dutch",
      },
      {
        code: "nl-BE",
        iso: "nl-BE",
        name: "Dutch (Belgium)",
      },
      {
        code: "nl-NL",
        iso: "nl-NL",
        name: "Dutch (Netherlands)",
      },
      {
        code: "nn-NO",
        iso: "nn-NO",
        name: "Norwegian (Nynorsk) (Norway)",
      },
      {
        code: "ns",
        iso: "ns",
        name: "Northern Sotho",
      },
      {
        code: "ns-ZA",
        iso: "ns-ZA",
        name: "Northern Sotho (South Africa)",
      },
      {
        code: "pa",
        iso: "pa",
        name: "Punjabi",
      },
      {
        code: "pa-IN",
        iso: "pa-IN",
        name: "Punjabi (India)",
      },
      {
        code: "pl",
        iso: "pl",
        name: "Polish",
      },
      {
        code: "pl-PL",
        iso: "pl-PL",
        name: "Polish (Poland)",
      },
      {
        code: "ps",
        iso: "ps",
        name: "Pashto",
      },
      {
        code: "ps-AR",
        iso: "ps-AR",
        name: "Pashto (Afghanistan)",
      },
      {
        code: "pt",
        iso: "pt",
        name: "Portuguese",
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
        code: "qu",
        iso: "qu",
        name: "Quechua",
      },
      {
        code: "qu-BO",
        iso: "qu-BO",
        name: "Quechua (Bolivia)",
      },
      {
        code: "qu-EC",
        iso: "qu-EC",
        name: "Quechua (Ecuador)",
      },
      {
        code: "qu-PE",
        iso: "qu-PE",
        name: "Quechua (Peru)",
      },
      {
        code: "ro",
        iso: "ro",
        name: "Romanian",
      },
      {
        code: "ro-RO",
        iso: "ro-RO",
        name: "Romanian (Romania)",
      },
      {
        code: "ru",
        iso: "ru",
        name: "Russian",
      },
      {
        code: "ru-RU",
        iso: "ru-RU",
        name: "Russian (Russia)",
      },
      {
        code: "sa",
        iso: "sa",
        name: "Sanskrit",
      },
      {
        code: "sa-IN",
        iso: "sa-IN",
        name: "Sanskrit (India)",
      },
      {
        code: "se",
        iso: "se",
        name: "Sami (Northern)",
      },
      {
        code: "se-FI",
        iso: "se-FI",
        name: "Sami (Northern) (Finland)",
      },
      {
        code: "se-NO",
        iso: "se-NO",
        name: "Sami (Northern) (Norway)",
      },
      {
        code: "se-SE",
        iso: "se-SE",
        name: "Sami (Northern) (Sweden)",
      },
      {
        code: "sk",
        iso: "sk",
        name: "Slovak",
      },
      {
        code: "sk-SK",
        iso: "sk-SK",
        name: "Slovak (Slovakia)",
      },
      {
        code: "sl",
        iso: "sl",
        name: "Slovenian",
      },
      {
        code: "sl-SI",
        iso: "sl-SI",
        name: "Slovenian (Slovenia)",
      },
      {
        code: "sq",
        iso: "sq",
        name: "Albanian",
      },
      {
        code: "sq-AL",
        iso: "sq-AL",
        name: "Albanian (Albania)",
      },
      {
        code: "sr-BA",
        iso: "sr-BA",
        name: "Serbian (Latin) (Bosnia and Herzegovina)",
      },
      {
        code: "sr-SP",
        iso: "sr-SP",
        name: "Serbian (Latin) (Serbia and Montenegro)",
      },
      {
        code: "sv",
        iso: "sv",
        name: "Swedish",
      },
      {
        code: "sv-FI",
        iso: "sv-FI",
        name: "Swedish (Finland)",
      },
      {
        code: "sv-SE",
        iso: "sv-SE",
        name: "Swedish (Sweden)",
      },
      {
        code: "sw",
        iso: "sw",
        name: "Swahili",
      },
      {
        code: "sw-KE",
        iso: "sw-KE",
        name: "Swahili (Kenya)",
      },
      {
        code: "syr",
        iso: "syr",
        name: "Syriac",
      },
      {
        code: "syr-SY",
        iso: "syr-SY",
        name: "Syriac (Syria)",
      },
      {
        code: "ta",
        iso: "ta",
        name: "Tamil",
      },
      {
        code: "ta-IN",
        iso: "ta-IN",
        name: "Tamil (India)",
      },
      {
        code: "te",
        iso: "te",
        name: "Telugu",
      },
      {
        code: "te-IN",
        iso: "te-IN",
        name: "Telugu (India)",
      },
      {
        code: "th",
        iso: "th",
        name: "Thai",
      },
      {
        code: "th-TH",
        iso: "th-TH",
        name: "Thai (Thailand)",
      },
      {
        code: "tl",
        iso: "tl",
        name: "Tagalog",
      },
      {
        code: "tl-PH",
        iso: "tl-PH",
        name: "Tagalog (Philippines)",
      },
      {
        code: "tn",
        iso: "tn",
        name: "Tswana",
      },
      {
        code: "tn-ZA",
        iso: "tn-ZA",
        name: "Tswana (South Africa)",
      },
      {
        code: "tr",
        iso: "tr",
        name: "Turkish",
      },
      {
        code: "tr-TR",
        iso: "tr-TR",
        name: "Turkish (Turkey)",
      },
      {
        code: "tt",
        iso: "tt",
        name: "Tatar",
      },
      {
        code: "tt-RU",
        iso: "tt-RU",
        name: "Tatar (Russia)",
      },
      {
        code: "ts",
        iso: "ts",
        name: "Tsonga",
      },
      {
        code: "uk",
        iso: "uk",
        name: "Ukrainian",
      },
      {
        code: "uk-UA",
        iso: "uk-UA",
        name: "Ukrainian (Ukraine)",
      },
      {
        code: "ur",
        iso: "ur",
        name: "Urdu",
      },
      {
        code: "ur-PK",
        iso: "ur-PK",
        name: "Urdu (Islamic Republic of Pakistan)",
      },
      {
        code: "uz",
        iso: "uz",
        name: "Uzbek (Latin)",
      },
      {
        code: "uz-UZ",
        iso: "uz-UZ",
        name: "Uzbek (Latin) (Uzbekistan)",
      },
      {
        code: "vi",
        iso: "vi",
        name: "Vietnamese",
      },
      {
        code: "vi-VN",
        iso: "vi-VN",
        name: "Vietnamese (Viet Nam)",
      },
      {
        code: "xh",
        iso: "xh",
        name: "Xhosa",
      },
      {
        code: "xh-ZA",
        iso: "xh-ZA",
        name: "Xhosa (South Africa)",
      },
      {
        code: "zh",
        iso: "zh",
        name: "Chinese",
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
        code: "zh-MO",
        iso: "zh-MO",
        name: "Chinese (Macau)",
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
        code: "zu",
        iso: "zu",
        name: "Zulu",
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