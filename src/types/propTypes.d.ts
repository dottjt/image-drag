declare module PropTypes {
  // APP
  export type IAppProps = {
    client: any,
    route: any,
  }

  // ANNOTATION
  export type IAnnotationProps = {}

  // GALLERY
  export type IGalleryProps = {}

  // IMAGE ANNOTATOR
  export type IImageAnnotatorProps = {
    images: Util.Image[],
    currentImage: Util.Image,

    annotations: Util.Annotation[],
    setAnnotations: any,

    annotationCount: number,
    setAnnotationCount: any,

    forceUpdate: any,
  }
  export type IImageAnnotatorState = {
    selectedShapeName: string,
    mouseDown: boolean,
    mouseDraw: boolean,
    newRectX: number,
    newRectY: number,
  }
  export type IAnnotationImageProps = {
    currentImage: Util.Image,
  }
  export type IRectTransformerProps = {
    selectedShapeName: string,
    tRef: any,
  }
  export type IRectangleProps = {
    annotation: Util.Annotation,
    isSelected: boolean,
    onTransform: any,
    onSelectAnnotation: any,
    tRef: any,
  }

  // RIGHT BAR
  export type IRightBarProps = {
    annotations: Util.Annotation[],
  }
  export type ISelectPokemonProps = {
    pokemonSearchString: string,
    setPokemonSearchString: any,

    selectedPokemon?: Util.Pokemon,
    setSelectedPokemon: any,
  }
  export type ISelectPokemonResultProps = {
    pokemon?: Util.Pokemon,
    setSelectedPokemon: any,
    isSelectedPokemon?: boolean;
  }
  export type ISelectAnnotationProps = {
    annotations: Util.Annotation[],
    selectedAnnotation?: Util.Annotation,
    setSelectedAnnotation: any,
  }
}
