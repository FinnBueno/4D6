import React from "react";
import Flag from "react-flagkit";
import { useTranslation } from "react-i18next";

const getOtherLanguage = (lang: string) => lang === 'nl' ? 'gb' : 'nl';

export const LanguageButton: React.FC<{ size: number }> = ({ size }) => {
    const { i18n } = useTranslation();
    i18n.changeLanguage
    return <Flag onClick={() => i18n.changeLanguage(getOtherLanguage(i18n.language))} country={getOtherLanguage(i18n.language).toUpperCase()} size={size} />;
}