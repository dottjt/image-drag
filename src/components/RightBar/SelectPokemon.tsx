

const SelectPokemon:FC<PropTypes.ISelectPokemonProps> = ({ 
  pokemonSearchString,
  setPokemonSearchString,
  selectedPokemon,
  setSelectedPokemon,
}: PropTypes.ISelectPokemonProps) => {
  const [searchPokemon, { data, loading }] = useMutation(SEARCH_POKEMON);

  return (
    <div>
      <input type="text" value={pokemonSearchString} onChange={}
      />
      <div>
        {data.searchedPokemon.map((pokemon: Util.Pokemon) => (
          <div>
            <h4>{pokemon.name}</h4><span>{pokemon.sprite}</span>
          </div>
        ))}
      </div>
    </div>
  )

}

(event: React.ChangeEvent<HTMLInputElement>) => {
  setPokemonSearchString(pokemonSearchString);
  searchPokemon(event.target.value);
}

