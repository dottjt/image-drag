declare module PropTypes {
  // APP
  export type IAppProps = {
    client: any,
    route: any,
  }

  // HOME
  export type IHomeProps = {}
  export type IAboutProps = {}

  export type INavBarProps = {}

  // IMAGE ANNOTATOR
  export type IImageAnnotatorProps = {
    image_id?: string,
  }

  // GALLERY
  export type IImageAnnotatorGalleryProps = {}

  // IMAGE ANNOTATOR
  export type IImageAnnotatorCanvasProps = {
    currentImage: Util.Image,
    selectedAnnotation?: Util.Annotation,

    annotations: Util.Annotation[],
    setAnnotations: any,

    annotationCount: number,
    setAnnotationCount: any,

    selectedAnnotationName: string,
    setSelectedAnnotationName: any,
  }
  export type IImageAnnotatorState = {
    mouseDown: boolean,
    mouseDraw: boolean,
    newRectX: number,
    newRectY: number,
  }
  export type IAnnotationImageProps = {
    currentImage: Util.Image,
  }
  export type IRectTransformerProps = {
    selectedAnnotationName: string,
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
    setAnnotations: any,
    
    selectedAnnotation?: Util.Annotation,

    setSelectedAnnotationName: any,
  }
  export type ISearchPokemonProps = {
    pokemonSearchString: string,
    setPokemonSearchString: any,

    annotations: Util.Annotation[],
    setAnnotations: any,
    selectedAnnotation?: Util.Annotation,
  }
  export type ISearchPokemonResultProps = {
    pokemon?: Util.Pokemon,
    setSelectedPokemon: any,
    isSelectedPokemon?: boolean;
  }
  export type ISelectAnnotationProps = {
    annotations: Util.Annotation[],
    selectedAnnotation?: Util.Annotation,
    setSelectedAnnotationName: any,
  }
  export type ISelectAnnotationTypeProps = {
    annotations: Util.Annotation[],
    setAnnotations: any,
    selectedAnnotation?: Util.Annotation,
  }
}
