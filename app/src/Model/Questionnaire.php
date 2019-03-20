<?php

/**
 * This file contains the "Questionnaire" class.
 *
 * @category SilverStripe_Project
 * @package SDLT
 * @author  Catalyst I.T. SilverStripe Team 2018 <silverstripedev@catalyst.net.nz>
 * @copyright 2018 Catalyst.Net Ltd
 * @license https://www.catalyst.net.nz (Commercial)
 * @link https://www.catalyst.net.nz
 */

namespace NZTA\SDLT\Model;

use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;
use SilverStripe\ORM\DataObject;
use SilverStripe\ORM\HasManyList;
use SilverStripe\Security\Member;
use SilverStripe\Security\Security;
use Symbiote\GridFieldExtensions\GridFieldOrderableRows;

/**
 * Class Questionnaire
 *
 * @property string Name
 * @property string KeyInformation
 *
 * @method HasManyList Questions
 */
class Questionnaire extends DataObject implements ScaffoldingProvider
{
    /**
     * @var string
     */
    private static $table_name = 'Questionnaire';

    /**
     * @var array
     */
    private static $db = [
        'Name' => 'Varchar(255)',
        'KeyInformation' => 'HTMLText',
        'IsCisoApprovalRequired' => 'Boolean',
        'IsSecurityArchitectApprovalRequired' => 'Boolean',
        'IsBusinessOwnerApprovalRequired' => 'Boolean',
        'SendApprovedNotificatonToSecurityArchitect' => 'Boolean',
    ];

    /**
     * @var array
     */
    private static $has_one = [
        'Pillar' => Pillar::class
    ];

    /**
     * @var array
     */
    private static $has_many = [
        'Questions' => Question::class
    ];

    /**
     * CMS Fields
     * @return FieldList
     */
    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeByName('PillarID');

        $questions = $fields->dataFieldByName('Questions');

        if ($questions) {
            $config = $questions->getConfig();

            $config->addComponent(
                new GridFieldOrderableRows('SortOrder')
            );
        }

        $fields->dataFieldByName('IsBusinessOwnerApprovalRequired')
            ->setDescription('If business owner approval is required, then please
            make sure you create a question for product owner email address and
            that should be mandatory.');

        $fields->dataFieldByName('IsCisoApprovalRequired')
            ->setTitle('Is CISO Approval Required');

        return $fields;
    }

    /**
     * @param SchemaScaffolder $scaffolder Scaffolder
     * @return SchemaScaffolder
     */
    public function provideGraphQLScaffolding(SchemaScaffolder $scaffolder)
    {
        // Provide entity type
        $typeScaffolder = $scaffolder
            ->type(Questionnaire::class)
            ->addFields([
                'ID',
                'Name',
                'KeyInformation'
            ]);

        // Provide relations
        $typeScaffolder
            ->nestedQuery('Questions')
            ->setUsePagination(false)
            ->end();

        // Provide operations
        $typeScaffolder
            ->operation(SchemaScaffolder::READ_ONE)
            ->setName('readQuestionnaire')
            ->end();

        return $scaffolder;
    }

    /**
     * Allow logged-in user to access the model
     *
     * @param Member|null $member member
     * @return bool
     */
    public function canView($member = null)
    {
        return (Security::getCurrentUser() !== null);
    }
}
