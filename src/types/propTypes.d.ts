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
  export type IGalleryProps = {}
  export type IGalleryImageSearchProps = {}
  export type IGalleryImageProps = {
    image: Util.Image,
  }

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

    forceUpdate: any,
  }
  export type IImageAnnotatorState = {
    mouseDown: boolean,
    mouseDraw: boolean,
    newRectX: number,
    newRectY: number,
  }
  export type IImageAnnotatorLoginProps = {}
  export type IAnnotationImageProps = {
    currentImage: Util.Image,
  }
  export type IRectTransformerProps = {
    selectedAnnotationName: string,
    trRef: any,
  }
  export type IRectangleProps = {
    annotations: Util.Annotation[],
    setAnnotations: any,

    annotationCount: number,
    setAnnotationCount: any, 
    
    draggedDown: boolean,

    setSelectedAnnotationName: string,
    selectedAnnotation?: Util.Annotation,
    annotation: Util.Annotation,

    isSelected: boolean,
    onTransform: any,
    onSelectAnnotation: any,
    trRef: any,
  }

  // RIGHT BAR
  export type IRightBarProps = {
    annotations: Util.Annotation[],
    setAnnotations: any,

    selectedAnnotation?: Util.Annotation,

    setSelectedAnnotationName: any,
  }
  export type IRightBarNavBarProps = {}
  export type ISearchPokemonProps = {
    pokemonSearchString: string,
    setPokemonSearchString: any,

    pokemonSearchPosition?: number,
    setPokemonSearchPosition: any,

    annotations: Util.Annotation[],
    setAnnotations: any,
    selectedAnnotation?: Util.Annotation,
  }
  export type ISearchPokemonResultProps = {
    pokemon?: Util.Pokemon,
    setSelectedPokemon: any,
    isSelectedPokemon?: boolean;
    pokemonSearchPosition?: number;
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
