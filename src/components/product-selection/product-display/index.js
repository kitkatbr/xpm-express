import { Flex, Image, Text } from "@theme-ui/components"
import React from "react"
import Info from "./info"
import OptionSelector from "./option-selector"

const ProductDisplay = ({ region, product }) => {
  return product ? (
    <Flex sx={{ flexDirection: "column" }}>
      <Flex sx={{ flexDirection: "row", width: "100%", height: "100%" }}>

              

    
        <Image
          sx={{
            width: "50%",
            borderRadius: "4px",
            objectFit: "contain",
            objectPosition: "center center",
          }}
          src={"/elden-ring.webp"}
          alt={product.title}
        />


      </Flex>
      <Text
        sx={{
          mt: "16px",
          lineHeight: "24px",
          fontSize: "14px",
          fontWeight: 300,
          color: "#6B7280",
        }}
        variant="fz_s"
      >
    <div className="product-desc">
      <span className="product-title">
      Elden Ring <b>Runes</b>

              <span className="badge">
                New
              </span>
      </span>
      <span className="product-caption">
      {product.description}
            </span>
   
      
    </div>      </Text>
      <OptionSelector product={product} />
    </Flex>
  ) : null
}

export default ProductDisplay
