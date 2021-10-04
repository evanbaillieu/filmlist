import React from "react";
import { useInfiniteQuery } from 'react-query'

import filmService from "../service/filmService";
import FilmItem from "./filmItem";
import useIntersectionObserver from "../hook/useIntersectionObserver";

export default function FilmView() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("film", filmService.findByPage, {
    getNextPageParam: (lastPage, pages) => (lastPage.page < lastPage.total_pages)? lastPage.page + 1 : false
  });

  const loadMoreButtonRef = React.useRef()

  useIntersectionObserver({
      target: loadMoreButtonRef,
      onIntersect: fetchNextPage,
      enabled: hasNextPage,
  })

  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      <div className="grid">
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.results.map((item) => (
              <FilmItem item={item} key={item.id} />
          ))}
          </React.Fragment>
        ))}
      </div>
      <div>
        <button
          ref={loadMoreButtonRef}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}
