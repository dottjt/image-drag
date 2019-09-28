import React, { FC, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_GALLERY_SEARCH } from '../graphql/queries';

import NavBar from '../components/NavBar';
import Loading from '../components/Loading';

const Home:FC<PropTypes.IHomeProps> = () => {

  const [searchText, setSearchText] = useState<string | undefined>(undefined);

  const { data, loading } = useQuery(GET_GALLERY_SEARCH, {
    variables: { searchText }
  });

  console.log(data);

  return (
    <div className='layout'>
      <NavBar/>
      <div className='layout__page'>
        <h1 className='homepage__title'>PokeML</h1>
        <h2 className='homepage__title'>Pokemon Machine Learning<br/> Image Repository</h2>

        <div className='homepage__search__box'>
          <input 
            type='text'
            placeholder='Search Pokemon Annotations'
            className='homepage__search__box__input'
            value={searchText}
            onChange={(event) => { console.log(event.target.value); setSearchText(event.target.value)}}
          />
        </div>
        
        <div className='homepage__search__results'>
          {/* It should also let the user know if what they've searched is not a pokemon. */}

          {loading && <Loading loading={loading} />}

          {!loading && searchText && data.getGallerySearch.length === 0 && (
            <div>
              Sorry, there are no annotated.
            </div>
          )}

          {!loading && searchText && data.getGallerySearch.map((image: Util.Image) => (
            <div className='homepage__search__result'>
              {image.annotations.map((annotation: Util.Annotation) => (
                <span
                  style={{
                    position: 'absolute',
                    width: 0, // TODO
                    height: 0, // TODO
                    top: annotation.coordinates[0].y, // TODO
                    left: annotation.coordinates[0].x, // TODO
                  }}
                >
                  Annotation 1
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className='homepage__section'>
          <h3>What is PokeML?</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
