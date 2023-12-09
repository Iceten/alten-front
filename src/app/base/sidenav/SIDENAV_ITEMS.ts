import { SidenavItem } from "app/base/sidenav/sidenav.model";

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: '',
    labels: {
      en: "Home",
      fr: "Acceuil"
    },
    link: '/'
  },
  {
    id: 'admin/products',
    labels: {
      en: "Admin",
      fr: "Admin"
    },
    link: 'admin/products'

  },
  {
    id: 'products',
    labels: {
      en: "Products",
      fr: "Produits"
    },
    link: 'products'
  }
];