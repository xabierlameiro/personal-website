// @flow
import * as React from 'react'
import html from '../coverage/lcov-report/index.html'

export default function Home(param: {
    ...
}): React.Element<React$FragmentType> {
    return (
        <>
            <h1>Nextjs template with Flow, Jest, Prettier, Eslint and Husky</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </>
    )
}
