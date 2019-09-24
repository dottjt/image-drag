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

    setSelectedPokemon: any,
    setSelectedAnnotation: any,
    setSelectedAnnotationType: any,

    selectedAnnotationName: string,
    setSelectedAnnotationName: any,

    forceUpdate: any,
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
    
    selectedAnnotation: Util.Annotation,

    setSelectedAnnotationName: string,
  }
  export type ISelectPokemonProps = {
    pokemonSearchString: string,
    setPokemonSearchString: any,

    annotations: Util.Annotation[],
    setAnnotations: any,
    selectedAnnotation: Util.Annotation,
  }
  export type ISelectPokemonResultProps = {
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
    selectedAnnotation: Util.Annotation,
  }
}
