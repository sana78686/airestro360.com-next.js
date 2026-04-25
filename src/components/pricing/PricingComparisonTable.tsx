import { COMPARISON_ROWS, COMPARISON_SUB, COMPARISON_TITLE } from '@/lib/pricingContent'
import '@/styles/pricing-sections.css'

type Props = {
  title?: string
  sub?: string
}

export default function PricingComparisonTable({
  title = COMPARISON_TITLE,
  sub = COMPARISON_SUB,
}: Props) {
  return (
    <section className="pricing-compare" aria-labelledby="pricing-compare-h2">
      <h2 id="pricing-compare-h2" className="pricing-compare-h2">
        {title}
      </h2>
      <p className="pricing-compare-sub">{sub}</p>
      <div className="pricing-compare-table-wrap" role="region" aria-label="Feature comparison" tabIndex={0}>
        <table className="pricing-compare-table">
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col">Launch</th>
              <th scope="col">Grow</th>
              <th scope="col">Company</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row) => (
              <tr key={row.feature}>
                <th scope="row">{row.feature}</th>
                <td aria-label={row.launch ? 'Included' : 'Not included'}>
                  {row.launch ? '✓' : '—'}
                </td>
                <td aria-label={row.grow ? 'Included' : 'Not included'}>
                  {row.grow ? '✓' : '—'}
                </td>
                <td aria-label={row.company ? 'Included' : 'Not included'}>
                  {row.company ? '✓' : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
