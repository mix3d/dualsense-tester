const rtlCodeList = [
  'ar',
  'ar-AE',
  'ar-BH',
  'ar-DJ',
  'ar-DZ',
  'ar-EG',
  'ar-IQ',
  'ar-JO',
  'ar-KW',
  'ar-LB',
  'ar-LY',
  'ar-MA',
  'ar-OM',
  'ar-QA',
  'ar-SA',
  'ar-SD',
  'ar-SY',
  'ar-TN',
  'ar-YE',
  'fa-AF',
  'fa-IR',
  'he',
  'he-IL',
  'iw',
  'kd',
  'pk-PK',
  'ps',
  'ug',
  'ur',
  'ur-IN',
  'ur-PK',
  'yi',
  'yi-US',
]

export function checkRTL(localeCode: string) {
  return rtlCodeList.includes(localeCode)
}
