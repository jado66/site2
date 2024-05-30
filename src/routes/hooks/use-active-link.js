import { usePathname } from 'next/navigation';

// ----------------------------------------------------------------------

export function useActiveLink(path, deep = true) {
  if (!path) {
    return false;
  }

  const pathname = usePathname();

  const checkPath = path.startsWith('#');

  const currentPath = path === '/' ? '/' : `${path}/`;

  const normalActive = !checkPath && pathname === currentPath;

  const deepActive = !checkPath && pathname.includes(currentPath);

  return deep ? deepActive : normalActive;
}
