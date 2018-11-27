import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const MainImage = (props) => (
  <div>
    <Link href="/detail">
      <a>main image view</a>
    </Link>
    <img src={props.images.data.data.full_url} />
  </div>
)

MainImage.getInitialProps = async function() {
  const res = await fetch('http://localhost:7000/_/files/5')
  const data = await res.json()
  console.log(data);
  return { images: data }
}

export default MainImage;