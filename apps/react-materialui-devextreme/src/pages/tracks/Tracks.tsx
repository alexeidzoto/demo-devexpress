import React from "react";
import { Grid } from "@material-ui/core";
import DataGrid, {
  Column,
  Scrolling, Summary, TotalItem,
  FilterRow,
  Lookup,
} from 'devextreme-react/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { Lookup as LookupColumn, Genre } from '../../domain/types';

// components
import PageTitle from "../../components/PageTitle/PageTitle";

import { genreService, trackService, mediatypeService } from '../../domain/services';

const mainDataSource = new DataSource({
  store: new CustomStore({
      key: 'trackId',
      load: () => trackService.all(),
  })
});

const mediaTypeDataSource = {
  store: {
      type: 'array',
      data: [],
      key: 'artistId'
  },
  pageSize: 10,
  paginate: true   
}

const genreDataSource = {
  store: {
      type: 'array',
      data: [],
      key: 'genreId'
  },
  pageSize: 10,
  paginate: true   
}

export default function Tracks() {

  const [lookupGenres, setLookupGenres] = React.useState<LookupColumn<Genre>>(genreDataSource);
  const [lookupMediaTypes, setLookupMediatTypes] = React.useState<LookupColumn<Genre>>(mediaTypeDataSource);

  React.useEffect(() => {
    let isSubscribed: boolean = true;

    (async function() {
      const genres = await genreService.all();
      const mediaTypes = await mediatypeService.all();
      const lookupG = {
        ...lookupGenres, 
        store: {
          ...lookupGenres.store,
          data: genres
        }
      }
      const lookupMT = {
        ...lookupMediaTypes, 
        store: {
          ...lookupMediaTypes.store,
          data: mediaTypes
        }
      }
      if (isSubscribed) {
        setLookupGenres(lookupG);
        setLookupMediatTypes(lookupMT);
      }
    })();

    return () => {
      isSubscribed = false
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageTitle title="Tracks" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <DataGrid
              id="tracksGrid"
              className={'dx-card wide-card'}
              dataSource={mainDataSource}
              repaintChangesOnly={true}
              width="100%"
              showBorders={false}
              focusedRowEnabled={true}
              defaultFocusedRowIndex={0}
              columnAutoWidth={true}
              columnHidingEnabled={true}
            >
              <Scrolling
                mode="virtual"
              />
              <FilterRow visible={true} />
              <Column
                dataField={'trackId'}
                caption={'Track Id'}
                hidingPriority={8}
              />
              <Column
                dataField={'name'}
                width={190}
                caption={'Name'}
                hidingPriority={8}
              />
              <Column
                dataField={'mediaTypeId'}
                caption={'Media type'}
                hidingPriority={5}
                >
                <Lookup dataSource={lookupMediaTypes} valueExpr="mediaTypeId" displayExpr="name" />
              </Column>
              <Column
                dataField={'genreId'}
                caption={'Genre'}
                allowSorting={false}
                hidingPriority={7}
              >
                <Lookup dataSource={lookupGenres} valueExpr="genreId" displayExpr="name" />
              </Column>
              <Column
                dataField={'composer'}
                caption={'Composer'}
                hidingPriority={3}
              />
              <Column
                dataField={'milliseconds'}
                caption={'Milliseconds'}
                hidingPriority={4}
              />
              <Column
                dataField={'bytes'}
                caption={'Bytes'}
                hidingPriority={1}
              />
              <Column
                dataField={'unitPrice'}
                caption={'Unit Price'}
                hidingPriority={0}
              />
              <Summary>
                <TotalItem column="name" summaryType="count" />
                <TotalItem column="unitPrice" summaryType="sum" />
              </Summary>
            </DataGrid>
        </Grid>
      </Grid>
    </>
  );
}