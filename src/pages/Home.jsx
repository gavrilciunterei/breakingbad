import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import TextHead from '../components/TextHead';
import { useTranslation } from 'react-i18next';
import Search from '../components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../data/characters';

function Home() {
  const dispatch = useDispatch();
  const { allCharacters } = useSelector((state) => state.characters);
  const [charactersFiltred, setCharactersFiltred] = useState();
  const [charactersLoading, setCharactersLoading] = useState(true);
  const [searchName, setSearchName] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    if (!allCharacters) {
      dispatch(getAll({ serie: 'Breaking+Bad' }));
    } else {
      setCharactersLoading(false);
      setCharactersFiltred(allCharacters);
    }
  }, [dispatch, allCharacters]);

  const handleOnSearch = () => {
    if (allCharacters) {
      if (searchName.length > 0) {
        const data = allCharacters.filter(({ name }) =>
          name.toLowerCase().includes(searchName.toLowerCase())
        );
        setCharactersFiltred(data);
      } else {
        setCharactersFiltred(allCharacters);
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
