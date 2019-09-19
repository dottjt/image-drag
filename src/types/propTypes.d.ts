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

  export type IRightBarProps = {
    annotations: Util.Annotation,
  }
}

