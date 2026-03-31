import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@/index.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { routerMerger } from '@/shared/utils/router-merger'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/data/state/store.ts';

import { QuestionsGameRoutes } from '@/presentation/routes/question-routes.tsx';
import { SentenceRoutes } from '@/presentation/routes/senteces-routes';
import { IndexRoutes } from '@/presentation/routes/index-routes'
import { DashboardFormRoutes } from '@/presentation/routes/dashboard-forms-routes'
import { ConsoleRoutes } from '@/presentation/routes/console-routes';
import { Toaster } from "@/presentation/components/ui/toaster"
import { AuthRoutes } from '@/presentation/routes/auth-routes';
import { WordleGameRoutes } from '@/presentation/routes/wordle-routes';


const routes = routerMerger(IndexRoutes,
  DashboardFormRoutes,
  SentenceRoutes,
  QuestionsGameRoutes,
  ConsoleRoutes,
  AuthRoutes,
  WordleGameRoutes)

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster />
      </PersistGate>
    </Provider>
  </StrictMode>,
)