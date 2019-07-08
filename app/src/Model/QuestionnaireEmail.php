<?php

/**
 * This file contains the "QuestionnaireEmail" class.
 *
 * @category SilverStripe_Project
 * @package SDLT
 * @author  Catalyst I.T. SilverStripe Team 2018 <silverstripedev@catalyst.net.nz>
 * @copyright 2018 Catalyst.Net Ltd
 * @license https://www.catalyst.net.nz (Commercial)
 * @link https://www.catalyst.net.nz
 */

namespace NZTA\SDLT\Model;

use SilverStripe\ORM\DataObject;
use SilverStripe\Security\Member;
use SilverStripe\Security\Security;
use SilverStripe\Forms\Textfield;
use SilverStripe\Forms\HTMLEditor\HtmlEditorField;
use SilverStripe\Forms\LiteralField;
use NZTA\SDLT\Traits\SDLTModelPermissions;

/**
 * Class QuestionnaireEmail
 */
class QuestionnaireEmail extends DataObject
{
    use SDLTModelPermissions;
    /**
     * @var string
     */
    private static $table_name = 'QuestionnaireEmail';

    /**
     * @var array
     */
    private static $db = [
        'FromEmailAddress' => 'Varchar(255)',
        'StartLinkEmailSubject' => 'Text',
        'StartLinkEmailBody' => 'HTMLText',
        'SummaryLinkEmailSubject' => 'Text',
        'SummaryLinkEmailBody' => 'HTMLText',
        'ApprovalLinkEmailSubject' => 'Text',
        'ApprovalLinkEmailBody' => 'HTMLText',
        'ApprovedNotificationEmailSubject' => 'Text',
        'ApprovedNotificationEmailBody' => 'HTMLText',
        'DeniedNotificationEmailSubject' => 'Text',
        'DeniedNotificationEmailBody' => 'HTMLText',
        'EmailSignature' => 'HTMLText',
    ];

    /**
     * @var array
     */
    private static $summary_fields = [
        'FromEmailAddress'
    ];

    /**
     * CMS Fields
     * @return FieldList
     */
    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->addFieldsToTab(
            'Root.StartLinkEmail',
            [
                TextField::create(
                    'StartLinkEmailSubject',
                    'Start Link Email Subject'
                ),
                HtmlEditorField::create(
                    'StartLinkEmailBody',
                    'Start Link Email Body'
                ),
                LiteralField::create(
                    'StartEmailHelpText',
                    'Please use variable {$questionnaireName} for questionnaire name and
                        {$startLink} for start link in the email body and Subject.
                        {$startLink} will be replaced by "this link" label.'
                )
            ]
        );

        $fields->addFieldsToTab(
            'Root.SummaryLinkEmail',
            [
                TextField::create(
                    'SummaryLinkEmailSubject',
                    'Summary Link Email Subject'
                ),
                HtmlEditorField::create(
                    'SummaryLinkEmailBody',
                    'Summary Link Email Body'
                ),
                LiteralField::create(
                    'SummaryLinkEmailHelpText',
                    'Please use variable {$questionnaireName} for questionnaire name, {$productName} for product name  and
                        {$summaryLink} for summary link in the email body and subject.
                        {$summaryLink} will be replaced by "this link" label.'
                )
            ]
        );

        $fields->addFieldsToTab(
            'Root.ApprovalLinkEmail',
            [
                TextField::create(
                    'ApprovalLinkEmailSubject',
                    'Approval Link Email Subject'
                ),
                HtmlEditorField::create(
                    'ApprovalLinkEmailBody',
                    'Approval Link Email Body'
                ),
                LiteralField::create(
                    'ApprovalLinkEmailHelpText',
                    'Please use variable {$questionnaireName} for questionnaire name, {$productName} for product name, {$approvalLink} for
                        approval link, {$submitterName} for submitter name and {$submitterEmail} for submitter
                        email in the email body and subject. {$approvalLink} will be replaced by "this link" label.'
                )
            ]
        );

        $fields->addFieldsToTab(
            'Root.ApprovedNotificationEmail',
            [
                TextField::create(
                    'ApprovedNotificationEmailSubject',
                    'Approved Notification Email Subject'
                ),
                HtmlEditorField::create(
                    'ApprovedNotificationEmailBody',
                    'Approved Notification Email Body'
                ),
                LiteralField::create(
                    'ApprovedNotificationEmailhelpText',
                    'Please use variable {$questionnaireName} for questionnaire name and {$productName} for product name in the email body and subject.'
                )
            ]
        );

        $fields->addFieldsToTab(
            'Root.DeniedNotificationEmail',
            [
                TextField::create(
                    'DeniedNotificationEmailSubject',
                    'Denied Notification Email Subject'
                ),
                HtmlEditorField::create(
                    'DeniedNotificationEmailBody',
                    'Denied Notification Email Body'
                ),
                LiteralField::create(
                    'DeniedNotificationEmailhelpText',
                    'Please use variable {$questionnaireName} for questionnaire name and {$productName} for product name in the email body and subject.'
                )
            ]
        );

        $questions = $fields->dataFieldByName('Questions');

        if ($questions) {
            $config = $questions->getConfig();

            $config->addComponent(
                new GridFieldOrderableRows('SortOrder')
            );

            $pageConfig = $config->getComponentByType(GridFieldPaginator::class);
            $pageConfig->setItemsPerPage(250);
        }

        return $fields;
    }


}
