import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import TextHead from '../components/TextHead';
import { BASE_URL } from '../utils/apiUrl';
import { useTranslation } from 'react-i18next';
import Search from '../components/Search';

function Home() {
  const [characters, setCharacters] = useState();
  const [charactersFiltred, setCharactersFiltred] = useState();
  const [charactersLoading, setCharactersLoading] = useState(true);
  const [searchName, setSearchName] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    fetch(BASE_URL + 'characters?category=Breaking+Bad')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        setCharactersFiltred(data);
        setCharactersLoading(false);
      })
      .catch((e) => setCharactersLoading(false));
  }, []);

  const handleOnSearch = () => {
    if (characters) {
      if (searchName.length > 0) {
        const data = characters.filter(({ name }) =>
          name.toLowerCase().includes(searchName.toLowerCase())
        );
        setCharactersFiltred(data);
      } else {
        setCharactersFiltred(characters);
      }
    }
  };

  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className=" flex items-center justify-center mb-12">
          <Search
            setText={setSearchName}
            action={handleOnSearch}
            name={t('SEARCH_NAME')}
          />
        </div>
        <div className="flex flex-wrap -m-4  justify-center">
          {charactersLoading && !charactersFiltred ? (
            <Spinner />
          ) : charactersFiltred ? (
            <>
              {charactersFiltred?.map((char, index) => {
                const { img, name, nickname } = char;
                return (
                  <Card img={img} name={name} nickname={nickname} key={index} />
                );
              })}
            </>
          ) : (
            <TextHead text={t('NOT_CHAR_FOUND')} extraStyle={'italic'} />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
