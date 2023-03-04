import { GetServerSideProps, NextPage } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Banner from "@/components/Banner"
import styled from "styled-components"
import BannerImage from '@/public/images/BANNER 01.png';
import Products from "@/components/Products"

export const getServerSideProps: GetServerSideProps = async () => {
  const api = 'http://localhost:5000'
  const result = await fetch(`${api}/products`)
  const data = await result.json()
  data.forEach((product: any) => {
    product.image = `${api}/uploads/${product.filename}`
    product.formattedPrice = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'})).format(product.price)
    product.splitPrice = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'})).format(product.price/10)
  })
  return {
    props: {
      productsApi: data
    }
  }
}

const Main = styled.main`
  min-height: 62vh;
`

const Home: NextPage = ({ productsApi }: any) => {
  return (
    <Main>
      <Banner image={BannerImage} width={1140} height={325} />
      <Products products={productsApi}/>
    </Main>
  )
}

export default Home