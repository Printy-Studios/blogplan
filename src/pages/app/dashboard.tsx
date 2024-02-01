import Details from '@/components/layout/Details';
import Page from '@/components/layout/Page';
import PlusIcon from '@/icons/plus.svg'

export default function DashboardPage() {
    return (
        <Page>
            
            <section className='details-list'>
                <h1>Dashboard</h1>
                <Details
                    title={<h2>Favorites</h2>}
                    actionIcon={PlusIcon}
                >
                    Aaa
                </Details>
                <Details
                    title={<h2>Articles</h2>}
                    actionIcon={PlusIcon}
                >
                    Aaa
                </Details>
                <Details
                    title={<h2>Favorites</h2>}
                    actionIcon={PlusIcon}
                >
                    Aaa
                </Details>
            </section>
            
        </Page>
    )
}