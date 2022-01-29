function getGuideSidebar(groupA, groupB) {
    const sidebar = [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'getting-started',
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'frontmatter',
                'permalinks',
                'markdown-slot',
                'global-computed'
            ]
        }
    ]

    return sidebar
}


export const Sidebar = {
    '/guide/': getGuideSidebar('Guide', 'Advanced'),
}
