import React, { FC, useEffect, useState } from 'react';
import Select from 'react-select';
import { ValueType } from "react-select/src/types";

import { useQuery } from '@apollo/react-hooks';
import { GET_GALLERY_SEARCH } from '../../graphql/queries';

import GalleryImage from './GalleryImage';
import Loading from '../Loading';

const GalleryImageSearch:FC<PropTypes.IGalleryImageSearchProps> = ({}) => {
  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  const [filterQuery, setFilterQuery] = useState<Util.FilterQuery>({
    sort: 'asc', // asc, desc
  });

  const { data, loading } = useQuery(GET_GALLERY_SEARCH, {
    variables: { searchText, filterQuery },
  });

  console.log('GET_GALLERY_SEARCH', data);

  return (
    <div className='gallery__search'>
      <div className='gallery__search__box'>
        <input 
          type='text'
          placeholder='Search Pokemon Annotations'
          className='gallery__search__box__input'
          value={searchText}
          onChange={(event) => { console.log(event.target.value); setSearchText(event.target.value)}}
        />
      </div>

    {/* NOTE: I need to figure this out. */}
      <div className='gallery__search__filter'>
        <Select
          value={{value: filterQuery.sort, label: filterQuery.sort }}
          onChange={(selectedOption: ValueType<Util.OptionType>) => {
            const selectedOptionType = selectedOption as Util.OptionType;
            setFilterQuery({
              ...filterQuery,
              // sort: ,
            });  
          }}
          options={[{value: 'desc', label: 'desc'}, {value: 'asc', label: 'asc'}]}
        />
      </div>

      <div className='gallery__search__results'>
        {/* It should also let the user know if what they've searched is not a pokemon. */}

        {loading && <Loading loading={loading} />}

        {!loading && searchText && data.getGallerySearch.length === 0 && (
          <div>
            Sorry, there are no annotated.
          </div>
        )}

        {!loading && searchText && data.getGallerySearch.map(
          (image: Util.Image) => (
            <GalleryImage
              image={image}
            />
          )
        )}
      </div>
    </div>
  )
}

export default GalleryImageSearch;
