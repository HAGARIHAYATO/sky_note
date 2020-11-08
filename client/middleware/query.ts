export default function({query, redirect}) {
  if (!(query.date && query.hour && query.min && query.lat && query.lng)) {
    redirect('/');
  }
}