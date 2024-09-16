import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components";
import React, { Fragment } from "react";
import { useMatches } from "react-router-dom";

type HandleType = {
    crumb: (param?: string) => React.ReactNode;
  };



export const Menu = () => {
  const matches = useMatches();
  let crumbs = matches
    .filter((match) =>
      Boolean(match.handle && (match.handle as HandleType).crumb)
    )
    .map((match) => {
      const crumb = (match.handle as HandleType).crumb(
        match.data as string | undefined
      );
      return crumb as React.ReactNode;
    });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* <BreadcrumbItem>
            <BreadcrumbPage>Sudents</BreadcrumbPage>
          </BreadcrumbItem> */}

        {crumbs.map((crumb, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>{crumb}</BreadcrumbItem>

            <BreadcrumbSeparator />
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
