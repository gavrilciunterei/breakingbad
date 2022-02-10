import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../utils/apiUrl';

import CharacterInfo from '../components/CharacterInfo';
import CharacterCard from '../components/CharacterCard';
import Spinner from '../components/Spinner';
import Quote from '../components/Quote';
import SimpleButton from '../components/buttons/SimpleButton';
import TextHead from '../components/TextHead';
import { useTranslation } from 'react-i18next';

function Detail() {
  const { name } = useParams();
  const { t } = useTranslation();

  const [character, setCharacter] = useState();
  const [characterLoading, setCharacterLoading] = useState(true);
  const [quote, setQuote] = useState();
  const [quoteLoading, setQuoteLoading] = useState(true);
  const [death, setDeath] = useState();
  const [deathLoading, setDeathLoading] = useState(true);

  useEffect(() => {
    if (name) {
      fetch(BASE_URL + 'characters?name=' + name.split('-').join('+'))
        .then((response) => response.json())
        .then((data) => {
          setCharacter(data[0]);
          setCharacterLoading(false);
        })
        .catch((e) => setCharacterLoading(false));
    }
  }, [name]);

  useEffect(() => {
    if (character) {
      handleLoadQuote();
      handleLoadDeath();
    }
  }, [character]);

  const handleLoadDeath = () => {
    fetch(BASE_URL + 'death?name=' + character.name.split(' ').join('+'))
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setDeath(data[0]);
        }
        setDeathLoading(false);
      })
      .catch((e) => setDeathLoading(false));
  };

  const handleLoadQuote = () => {
    fetch(
      BASE_URL + 'quote/random?author=' + character.name.split(' ').join('+')
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const newQuote = data[0].quote;
          if (newQuote !== quote) {
            setQuote(newQuote);
          } else {
            handleLoadQuote();
          }
        }
        setQuoteLoading(false);
      })
      .catch((e) => setQuoteLoading(false));
  };

  return (
    <>
      <div className="w-full lg:w-4/6 px-4 mx-auto">
        <div className="max-w-7xl m-auto grid lg:grid-cols-3 grid-cols-1  bg-green-900 w-full mb-6 shadow-xl rounded-lg mt-16 p-5 items-center">
          {!characterLoading && character ? (
            <>
              <div className="col-span-2 text-white ml-10 mr-10">
                <TextHead text={t('CHARACTER_INFO')} />
                <CharacterCard character={character} />

                {deathLoading ? (
                  <Spinner />
                ) : death ? (
                  <div>
                    <TextHead text={t('DEATH')} />
                    <div className="ml-3">
                      <CharacterInfo title={t('CAUSE')} text={death.cause} />
                      <CharacterInfo
                        title={t('RESPONSIBLE')}
                        text={death.responsible}
                      />
                      <CharacterInfo
                        title={t('LAST_WORDS')}
                        text={death.last_words}
                      />
                    </div>
                  </div>
                ) : (
                  <TextHead text={t('NO_DEATH')} extraStyle={'italic'} />
                )}

                {quoteLoading ? (
                  <Spinner />
                ) : quote && quote.length > 0 ? (
                  <>
                    <Quote text={quote} />
                    <SimpleButton
                      text={t('GET_NEW')}
                      action={() => handleLoadQuote()}
                    />
                  </>
                ) : (
                  <TextHead text={t('NO_QUOTES')} extraStyle={'italic'} />
                )}
              </div>
              <div className="col-span-1 justify-center flex">
                <img
                  className="object-fill w-max h-82 overflow-hidden rounded-lg max-w-xl"
                  src={character.img}
                  alt="avatar"
                />
              </div>
            </>
          ) : characterLoading ? (
            <Spinner />
          ) : (
            <Navigate to="/" />
          )}
        </div>
      </div>
    </>
  );
}

export default Detail;
