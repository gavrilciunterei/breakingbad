import React from 'react';
import CharacterInfo from './CharacterInfo';
import { useTranslation } from 'react-i18next';

function CharacterCard({ character }) {
  const { t } = useTranslation();

  return (
    <div className="ml-3">
      <CharacterInfo title={t('ID')} text={character?.char_id} />
      <CharacterInfo title={t('NAME')} text={character?.name} />
      <CharacterInfo title={t('NICKNAME')} text={character?.nickname} />
      <CharacterInfo title={t('OCCUPATION')} text={character?.occupation} />
      <CharacterInfo title={t('PORTRAYED')} text={character?.portrayed} />
      <CharacterInfo title={t('STATUS')} text={character?.status} />
      <CharacterInfo title={t('BIRTHDAY')} text={character?.birthday} />
      <CharacterInfo title={t('CATEGORY')} text={character?.category} />
      <CharacterInfo title={t('APPEARANCE')} text={character?.appearance} />
    </div>
  );
}

export default CharacterCard;
