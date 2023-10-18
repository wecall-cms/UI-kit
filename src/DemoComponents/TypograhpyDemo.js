import React from "react";
import Typography from "../components/Typography/Typography";

const TypographyDemo = () => {
  return (
    <div>
      <h1>Typography Example</h1>
      <div className="container">
        <div>
          <p style={{ color: "red" }}>Medium Headings</p>

          <Typography type="medium" order={1}>
            Heading Title
          </Typography>
          <Typography type="medium" order={2}>
            Heading Title
          </Typography>
          <Typography type="medium" order={3}>
            Heading Title
          </Typography>
          <Typography type="medium" order={4}>
            Heading Title
          </Typography>
          <Typography type="medium" order={5}>
            Heading Title
          </Typography>
          <Typography type="medium" order={6}>
            Heading Title
          </Typography>
        </div>

        <div>
          <p style={{ color: "red" }}>Semi Bold Headings</p>
          <Typography type="semiBold" order={1}>
            Heading Title
          </Typography>
          <Typography type="semiBold" order={2}>
            Heading Title
          </Typography>
          <Typography type="semiBold" order={3}>
            Heading Title
          </Typography>
          <Typography type="semiBold" order={4}>
            Heading Title
          </Typography>
          <Typography type="semiBold" order={5}>
            Heading Title
          </Typography>
          <Typography type="semiBold" order={6}>
            Heading Title
          </Typography>
        </div>

        <div>
          <h2 style={{ color: "red" }}>Paragraphs</h2>
          <p style={{ color: "red" }}>Body text</p>

          <Typography type="body">
            In ultricies fermentum aliquet. Pellentesque dui magna, condimentum
            non ullamcorper at, cursus in sem. Nunc condimentum, purus ac
            sagittis ultricies, metus leo pharetra mi, non vehicula felis elit
            et nisi. Etiam venenatis commodo libero, vel ullamcorper nibh
            lobortis vel. Aliquam auctor porta tortor, nec consequat nibh
            finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel
            gravida magna.
          </Typography>
          <p style={{ color: "red" }}>lead text</p>
          <Typography type="lead">
            {" "}
            In ultricies fermentum aliquet. Pellentesque dui magna, condimentum
            non ullamcorper at, cursus in sem. Nunc condimentum, purus ac
            sagittis ultricies, metus leo pharetra mi, non vehicula felis elit
            et nisi. Etiam venenatis commodo libero, vel ullamcorper nibh
            lobortis vel. Aliquam auctor porta tortor, nec consequat nibh
            finibus a. Sed ultrices risus eget iaculis luctus. Mauris vel
            gravida magna.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default TypographyDemo;
