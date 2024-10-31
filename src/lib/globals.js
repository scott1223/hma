const CMS_URL = import.meta.env.VITE_CMS_URL
const SITE_URL = import.meta.env.VITE_SITE_URL
const phoneIcon = '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="44" height="44" rx="10" fill="#333333"/><path d="M13 15.5C13 24.0604 19.9396 31 28.5 31C28.8862 31 29.2691 30.9859 29.6483 30.9581C30.0834 30.9262 30.3009 30.9103 30.499 30.7963C30.663 30.7019 30.8185 30.5345 30.9007 30.364C31 30.1582 31 29.9181 31 29.438V26.6207C31 26.2169 31 26.015 30.9335 25.842C30.8749 25.6891 30.7795 25.553 30.6559 25.4456C30.516 25.324 30.3262 25.255 29.9468 25.117L26.74 23.9509C26.2985 23.7904 26.0777 23.7101 25.8683 23.7237C25.6836 23.7357 25.5059 23.7988 25.3549 23.9058C25.1837 24.0271 25.0629 24.2285 24.8212 24.6314L24 26C21.3501 24.7999 19.2019 22.6489 18 20L19.3686 19.1788C19.7715 18.9371 19.9729 18.8163 20.0942 18.6451C20.2012 18.4941 20.2643 18.3164 20.2763 18.1317C20.2899 17.9223 20.2096 17.7015 20.0491 17.26L18.883 14.0532C18.745 13.6738 18.676 13.484 18.5544 13.3441C18.447 13.2205 18.3109 13.1252 18.158 13.0665C17.985 13 17.7831 13 17.3793 13H14.562C14.0819 13 13.8418 13 13.636 13.0993C13.4655 13.1815 13.2981 13.337 13.2037 13.501C13.0897 13.6991 13.0737 13.9166 13.0419 14.3517C13.0141 14.7309 13 15.1138 13 15.5Z" fill="white"/></svg>'
const TG_BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN; // токен бота
const TG_CHAT_ID = import.meta.env.VITE_TG_CHAT_ID; // chat_id группы
const YM_ID = import.meta.env.VITE_YM_ID; // chat_id группы


const tgSendMessage =  async function sendMessageToTelegram(message) {
    const url = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;

    const body = {
      chat_id: TG_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        alert('Ошибка при отправке сообщения в telegram', response);
      }
    } catch (error) {
      console.error('Ошибка при отправке сообщения в telegram', error);
    }
  }

export { CMS_URL, SITE_URL, YM_ID, phoneIcon, tgSendMessage}