import React from "react";
import { Grid, GridItem } from "./ui/Grid";
import { gridItems } from "@/data";

const SectionLayout = () => {
  return (
    <section id="#about">
      {
        <Grid>
          {gridItems.map(
            ({
              id,
              className,
              title,
              description,
              img,
              imgClassName,
              titleClassName,
              spareImg,
            }) => (
              <GridItem
                id={id}
                key={id}
                className={className}
                title={title}
                description={description}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
              />
            )
          )}
        </Grid>
      }
    </section>
  );
};

export default SectionLayout;
