declare module PropTypes {
  export type IAppProps = {
    client: any,
    route: any,
  }

  export type IHomeProps = {
    images: Util.Image[],
  }

  export type IImageAnnotatorProps = {
    images: Util.Image[],
  }
  export type IImageAnnotatorState = {
    rectangles: Util.Annotation[],
    rectCount: number,
    selectedShapeName: string,
    mouseDown: boolean,
    mouseDraw: boolean,
    newRectX: number,
    newRectY: number,
  }


  // RIGHT BAR
  export type IRightBarProps = {
    annotations: Util.Annotation,
  }
  export type ISelectPokemonProps = {
    pokemonSearchString: string,
    setPokemonSearchString: any,

    selectedPokemon?: Util.Pokemon,
    setSelectedPokemon: any,
  }
  export type ISelectAnnotationProps = {
    annotations: Util.Annotation[],
    selectedAnnotation?: Util.Annotation,
    setSelectedAnnotation: any,
  }
}
