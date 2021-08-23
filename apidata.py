import pandas as pd
import requests
import json
from config import api_key


warnock_disburs = []

def extract_data(results):
    return {
    "category_code_full":results["category_code_full"],
    "disbursement_purpose_category":results["disbursement_purpose_category"],
    "disbursement_description":results["disbursement_description"],
    "recipient_name":results["recipient_name"],
    "disbursement_amount": results["disbursement_amount"]
    }

page=list(range(1, 100))

for i in page:
    url="https://api.open.fec.gov/v1/schedules/schedule_b/"
    params={

        "report_year":2018,
        "committee_id": 'C00736876',
        "api_key": api_key,
        "page":i
    }
    data=requests.get(url=url,params=params).json()['results']
    
    for result in data:
        candidate=extract_data(result)
        warnock_disburs.append(candidate)

warnock_disburs=pd.DataFrame(warnock_disburs).to_csv("warnock-disburs.csv")





name
donor_committee_name
contributor_name
entity_type_desc
designation_full
committee_type_full
state
contributor_aggregate_ytd
schedule_type_full
report_year
contribution_receipt_date