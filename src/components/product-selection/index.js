import { Box, Button, Divider, Flex, Text, Image } from "@theme-ui/components"
import { useCart } from "medusa-react"
import React, { useContext } from "react"
import ProductContext from "../../context/product-context"
import ProductDisplay from "./product-display"

const ProductSelection = ({
  product,
  region,
  country,
  nextStep,
  setLoading,
}) => {
  const { variant, quantity } = useContext(ProductContext)
  const { createCart, startCheckout } = useCart()

  const handleSubmit = async () => {
    setLoading(true)
    await createCart.mutateAsync({
      region_id: region.id,
      country_code: country,
      items: [
        {
          variant_id: variant.id,
          quantity,
        },
      ],
    })

    await startCheckout.mutateAsync()
    setLoading(false)

    nextStep()
  }

  return (
    <Box>
<Text
              sx={{
                mb: "16px",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                pb: "16px",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <Image src={"/logo.svg"} width={"42px"} height={"42px"} />
            </Text>      <Flex sx={{ mt: "16px", justifyContent: "center" }}>
        <ProductDisplay region={region} product={product} />
      </Flex>
      <Divider sx={{ color: "#E5E7EB", my: "16px" }} />
      <Button sx={{}} onClick={() => handleSubmit()} variant="cta">
        Continue
      </Button>
    </Box>
  )
}

export default ProductSelection
