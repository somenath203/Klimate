import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Layout from './app_components/Layout';
import { ThemeProvider } from './context/theme-provider';
import WeatherDashboard from './pages/weather-dashboard';
import CityPage from './pages/city-page';
import { Toaster } from './components/ui/sonner';


const App = () => {


  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, 
        gcTime: 10 * 60 * 1000, 
        retry: false,
        refetchOnWindowFocus: false
      }
    }
  });


  return (
    <QueryClientProvider client={queryClient}>


      <BrowserRouter>

        <ThemeProvider defaultTheme="dark">

          <Layout>

            <Routes>

              <Route path="/" element={<WeatherDashboard />} />

              <Route path="/city/:cityName" element={<CityPage />} />

            </Routes>
            
          </Layout>

          <Toaster richColors />

        </ThemeProvider>

      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
      
    </QueryClientProvider>
  );

};

export default App;
