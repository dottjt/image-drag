import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';

export const ROUTE_TITLE = {
  HOME: 'HOME',
  ABOUT: 'ABOUT',
  IMAGE_ANNOTATOR: 'IMAGE_ANNOTATOR',
  IMAGE_ANNOTATOR_INDIVIDUAL: 'IMAGE_ANNOTATOR_INDIVIDUAL',
  IMAGE_ANNOTATOR_GALLERY: 'IMAGE_ANNOTATOR_GALLERY',
};

export const ROUTE_PATH = {
  HOME: '/',
  ABOUT: '/about',
  IMAGE_ANNOTATOR: '/annotate',
  IMAGE_ANNOTATOR_INDIVIDUAL: '/annotate/:image_id',
  IMAGE_ANNOTATOR_GALLERY: '/gallery',
};

const routes = [
  { name: ROUTE_TITLE.HOME, path: ROUTE_PATH.HOME },
  { name: ROUTE_TITLE.ABOUT, path: ROUTE_PATH.ABOUT },
  { name: ROUTE_TITLE.IMAGE_ANNOTATOR, path: ROUTE_PATH.IMAGE_ANNOTATOR },
  { name: ROUTE_TITLE.IMAGE_ANNOTATOR_GALLERY, path: ROUTE_PATH.IMAGE_ANNOTATOR_GALLERY },
  { name: ROUTE_TITLE.IMAGE_ANNOTATOR_INDIVIDUAL, path: ROUTE_PATH.IMAGE_ANNOTATOR_INDIVIDUAL },
];

const router = createRouter(routes)
router.usePlugin(browserPlugin())
router.start()

export default router;
