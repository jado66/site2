import MainLayout from 'src/layouts/main';
import MaintenanceView from 'src/sections/status/view/maintenance-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'AMY Communications: About us',
};

export default function MarketingAboutPage() {
  return (
    <MainLayout>
      <MaintenanceView />
    </MainLayout>
  );
}
