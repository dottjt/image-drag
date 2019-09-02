import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';

export const ROUTE_TITLE = {
  HOME: 'HOME',
  IMAGE_ANNOTATOR: 'IMAGE_ANNOTATOR',
};

export const ROUTE_PATH = {
  HOME: '/',
  IMAGE_ANNOTATOR: '/image_annotator',
};

const routes = [
  { name: ROUTE_TITLE.HOME, path: ROUTE_PATH.HOME },
  { name: ROUTE_TITLE.IMAGE_ANNOTATOR, path: ROUTE_PATH.IMAGE_ANNOTATOR },
];

const router = createRouter(routes)
router.usePlugin(browserPlugin())
router.start()

export default router;
