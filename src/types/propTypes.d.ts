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
  }
  export type IRectangleProps = {
    onTransform: any,
    x: number;
    y: number;
    width: number;
    height: number;
    name: string;
    stroke: string;
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
  export type ISelectAnnotationProps = {
    annotations: Util.Annotation[],
    selectedAnnotation?: Util.Annotation,
    setSelectedAnnotation: any,
  }
}
