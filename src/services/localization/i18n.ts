import i18n, { StringMap, TOptions } from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import lang from './translations';

const resources = {
    gb: {
        translation: lang,
    },
    nl: {
        translation: lang,
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'gb',
        supportedLngs: [ 'gb', 'nl' ],
        // keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

// I know this is dirty, I do not care
export const useLocalization = (prefix: string) => {
    const { t: translation, i18n } = useTranslation();
    return {
        t: (key: string | string[], defaultValue?: string, options?: TOptions<StringMap> | string) =>
            translation(`${prefix}.${i18n.language}.${key}`, defaultValue, options)
    };
}

export const translation = i18n;